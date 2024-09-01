import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Core, NodeCollection, NodeSingular, Stylesheet} from 'cytoscape';
import {Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    StyledButton,
    StyledCard,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from 'react-i18next';

const colors = {
    nodeColor: '#6ebfe1',
    edgeColor: '#ffffff',
    highlightColor: '#d36f30',
    selectedNode: '#47c522',
    cycleColors: [
        '#dc6d49', '#cd6aaa', '#ef42ef', '#f6f632', '#00B3E6',
        '#5e710a', '#1c53dd', '#ae17d8', '#73ed73', '#B34D4D',
    ]
};

const commonStyles: Stylesheet[] =
    [
        {
            selector: 'node',
            style: {
                'background-color': colors.nodeColor,
                'label': 'data(id)',
                'color': 'white',
                'text-valign': 'center',
                'width': 40,
                'height': 40,
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 4,
                'line-color': colors.edgeColor,
                'curve-style': 'bezier'
            }
        },
        {
            selector: '.selected',
            style: {
                'background-color': colors.selectedNode,
                'transition-property': 'background-color',
                'transition-duration': 500
            }
        },
        {
            selector: '.highlighted',
            style: {
                'background-color': colors.highlightColor,
                'line-color': colors.highlightColor,
                'transition-property': 'background-color, line-color',
                'transition-duration': 300
            }
        }
    ]

const GraphPathsAndCycles: React.FC = () => {
    const {t} = useTranslation();
    const graph = useRef<HTMLDivElement>(null);
    const userGraph = useRef<HTMLDivElement>(null);
    const [cy, setCy] = useState<Core | null>(null);
    const [userCy, setUserCy] = useState<Core | null>(null);
    const [explanation, setExplanation] = useState<string>("");
    const [userGraphExplanation, setUserGraphExplanation] = useState<string>("");
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

    useEffect(() => {
        if (graph.current) {
            const cy = cytoscape({
                container: graph.current,
                elements: [
                    {data: {id: 'a'}},
                    {data: {id: 'b'}},
                    {data: {id: 'c'}},
                    {data: {id: 'd'}},
                    {data: {id: 'e'}},
                    {data: {id: 'f'}},
                    {data: {id: 'g'}},
                    {data: {id: 'ab', source: 'a', target: 'b'}},
                    {data: {id: 'bc', source: 'b', target: 'c'}},
                    {data: {id: 'cd', source: 'c', target: 'd'}},
                    {data: {id: 'ef', source: 'e', target: 'f'}},
                    {data: {id: 'fg', source: 'f', target: 'g'}},
                    {data: {id: 'ga', source: 'g', target: 'a'}},
                    {data: {id: 'fc', source: 'f', target: 'c'}},
                ],
                style: commonStyles,
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            setCy(cy);
        }

        if (userGraph.current) {
            const cy = cytoscape({
                container: userGraph.current,
                elements: [],
                style: commonStyles,
                layout: {name: 'grid'},
                zoomingEnabled: false,
            });

            cy.on('tap', (event) => {
                if (event.target === cy) {
                    const position = event.position;
                    const id = `${cy.nodes().length + 1}`;
                    cy.add({
                        data: {id},
                        position
                    });
                } else if (event.target.isNode()) {
                    const nodeId = event.target.id();
                    setSelectedNodes(prev => {
                        const newSelected = [...prev, nodeId];
                        if (newSelected.length === 2) {
                            if (newSelected[0] !== newSelected[1]) {
                                const existingEdge = cy.edges(`[source="${newSelected[0]}"][target="${newSelected[1]}"], [source="${newSelected[1]}"][target="${newSelected[0]}"]`);
                                if (existingEdge.length === 0) {
                                    cy.add({
                                        group: 'edges',
                                        data: {source: newSelected[0], target: newSelected[1]}
                                    });
                                }
                            }
                            cy.nodes().removeClass('selected');
                            return [];
                        } else {
                            event.target.addClass('selected');
                            return newSelected;
                        }
                    });
                }
            });
            setUserCy(cy);
        }
    }, []);

    const highlightPath = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            const path = cy.$('#e, #f, #g, #a, #b, #c, #d, #ab, #bc, #cd, #ef, #ga, #fg');
            path.addClass('highlighted');
            setExplanation(t('graphTheory.introduction.pathsAndCycles.pathExplanation'));
        }
    };

    const highlightCycle = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            const cycle = cy.$('#a, #b, #c, #f, #g, #a, #ab, #bc, #fc, #fg, #ga');
            cycle.addClass('highlighted');
            setExplanation(t('graphTheory.introduction.pathsAndCycles.cycleExplanation'));
        }
    };

    const resetGraph = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            setExplanation("");
        }
    };


    const detectCycles = () => {
        if (!userCy) {
            return;
        }

        const all: NodeCollection = userCy.nodes();
        const cycles: Set<string> = new Set();

        const dfs = (start: NodeSingular, current: NodeSingular, parent: NodeSingular | null, visited: Set<string>, path: string[]) => {
            visited.add(current.id());
            path.push(current.id());

            current.neighborhood().nodes().forEach((neighbor: NodeSingular) => {
                if (neighbor.id() === parent?.id()) return;

                if (visited.has(neighbor.id())) {
                    if (neighbor.id() === start.id() && path.length > 2) {
                        const cycle = path.slice(path.indexOf(neighbor.id()));
                        const normalized = normalizeCycle(cycle);
                        if (!cycles.has(normalized)) {
                            cycles.add(normalized);
                        }
                    }
                } else {
                    dfs(start, neighbor, current, new Set(visited), [...path]);
                }
            });
        };

        const normalizeCycle = (cycle: string[]): string => {
            const sorted = [...cycle].sort((a, b) => Number(a) - Number(b));
            const min = sorted[0];
            const indMin = cycle.indexOf(min);
            const rot = [...cycle.slice(indMin), ...cycle.slice(0, indMin)];
            const rev = [...rot].reverse();
            rev.unshift(rev.pop()!);
            return rot < rev ? rot.join(',') : rev.join(',');
        };

        all.forEach((node: NodeSingular) => {
            dfs(node, node, null, new Set(), []);
        });

        const unique = Array.from(cycles).map(cycle => cycle.split(','));
        highlightUserCycle(unique);
    };

    const highlightUserCycle = (cycles: string[][]) => {
        if (!userCy) {
            return;
        }

        userCy.elements().removeClass('cycle').removeStyle();

        cycles.forEach((cycle, index) => {
            const cycleColor = colors.cycleColors[index % colors.cycleColors.length];
            cycle.forEach((nodeId, i) => {
                const nextNodeId = cycle[(i + 1) % cycle.length];
                userCy.$id(nodeId).addClass('cycle').style({
                    'background-color': cycleColor
                });
                userCy.edges(`[source="${nodeId}"][target="${nextNodeId}"], [source="${nextNodeId}"][target="${nodeId}"]`)
                    .addClass('cycle')
                    .style({
                        'line-color': cycleColor,
                        'target-arrow-color': cycleColor
                    });
            });
        });

        const cycleExplanations = cycles.map((cycle, index) => {
            const cycleColor = colors.cycleColors[index % colors.cycleColors.length];
            return `<span style="color: ${cycleColor}">Cycle ${index + 1}: ${cycle.join(' → ')}</span>`;
        });

        setUserGraphExplanation(`
            ${t('graphTheory.introduction.pathsAndCycles.cyclesDetected')}: ${cycles.length} <br>
            ${cycleExplanations.join('<br>')}
        `);
    };

    const deleteUserGraph = () => {
        if (userCy) {
            userCy.elements().remove();
            setUserGraphExplanation('');
            setSelectedNodes([]);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.introduction.pathsAndCycles.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.introduction.pathsAndCycles.description')}
                </StyledText>
                <StyledGraphContainer ref={graph} style={{height: '300px'}}/>
                <Grid container spacing={2} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item>
                        <StyledButton onClick={highlightPath}>
                            {t('graphTheory.introduction.pathsAndCycles.showPathButton')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={highlightCycle}>
                            {t('graphTheory.introduction.pathsAndCycles.showCycleButton')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={resetGraph}>
                            {t('graphTheory.introduction.pathsAndCycles.resetButton')}
                        </StyledButton>
                    </Grid>
                </Grid>
                <StyledText>
                    {explanation}
                </StyledText>
                <StyledText style={{marginTop: '20px'}}>
                    {t('graphTheory.introduction.pathsAndCycles.interactiveDescription')}
                </StyledText>
                <StyledGraphContainer ref={userGraph} style={{height: '400px', marginBottom: '30px'}}/>
                <Grid container spacing={2} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item>
                        <StyledButton onClick={detectCycles}>
                            <PlayArrowIcon/>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={deleteUserGraph}>
                            <DeleteIcon/>
                        </StyledButton>
                    </Grid>
                </Grid>
                <StyledText dangerouslySetInnerHTML={{__html: userGraphExplanation}}/>
                <StyledInteractionPrompt>
                    {t('graphTheory.introduction.pathsAndCycles.interactivePrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default GraphPathsAndCycles;
