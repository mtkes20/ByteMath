import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Stylesheet} from 'cytoscape';
import {Grid, Paper, Typography} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import {
    Example,
    StyledButton,
    StyledCard,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const colors = {
    node: '#6C757D',
    edge: '#ADB5BD',
    spanningNode: '#20C997',
    spanningEdge: '#FA7921',
    selected: '#E63946',
};

const commonStyles: Stylesheet[] = [
    {
        selector: 'node',
        style: {
            'background-color': colors.node,
            'label': 'data(id)',
            'color': 'white',
            'text-valign': 'center',
            'font-size': '18px',
            'font-weight': 'bold',
            'width': 40,
            'height': 40,
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 4,
            'line-color': colors.edge,
            'curve-style': 'bezier',
        }
    },
    {
        selector: '.spanning-tree',
        style: {
            'background-color': colors.spanningNode,
            'line-color': colors.spanningEdge,
        }
    },
    {
        selector: '.selected',
        style: {
            'background-color': colors.selected,
        }
    },
];

const exampleElements = [
    {data: {id: 'A'}},
    {data: {id: 'B'}},
    {data: {id: 'C'}},
    {data: {id: 'D'}},
    {data: {id: 'E'}},
    {data: {id: 'F'}},
    {data: {id: 'G'}},
    {data: {id: 'H'}},
    {data: {source: 'A', target: 'B', id: 'AB'}},
    {data: {source: 'A', target: 'C', id: 'AC'}},
    {data: {source: 'B', target: 'D', id: 'BD'}},
    {data: {source: 'B', target: 'E', id: 'BE'}},
    {data: {source: 'C', target: 'F', id: 'CF'}},
    {data: {source: 'D', target: 'G', id: 'DG'}},
    {data: {source: 'E', target: 'G', id: 'EG'}},
    {data: {source: 'E', target: 'H', id: 'EH'}},
    {data: {source: 'F', target: 'H', id: 'FH'}},
    {data: {source: 'G', target: 'H', id: 'GH'}},
    {data: {source: 'A', target: 'D', id: 'AD'}},
    {data: {source: 'B', target: 'C', id: 'BC'}},
    {data: {source: 'C', target: 'E', id: 'CE'}},
    {data: {source: 'D', target: 'F', id: 'DF'}},
];

const exampleSpanningEdges = ['AB', 'AC', 'BD', 'BE', 'CF', 'EG', 'EH'];

const GraphSpanningTree: React.FC = () => {
    const {t} = useTranslation();
    const exampleGraph = useRef<HTMLDivElement>(null);
    const userGraph = useRef<HTMLDivElement>(null);
    const [exampleCy, setExampleCy] = useState<cytoscape.Core | null>(null);
    const [userCy, setUserCy] = useState<cytoscape.Core | null>(null);
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
    const [spanningTreeFound, setSpanningTreeFound] = useState<boolean | null>(null);

    useEffect(() => {
        if (exampleGraph.current && !exampleCy) {
            const newCy = cytoscape({
                container: exampleGraph.current,
                elements: exampleElements,
                style: commonStyles,
                layout: {name: 'circle'},
                userZoomingEnabled: false,
                userPanningEnabled: false,
            });
            setExampleCy(newCy);

            newCy.edges().forEach(edge => {
                if (exampleSpanningEdges.includes(edge.id())) {
                    edge.addClass('spanning-tree');
                    edge.source().addClass('spanning-tree');
                    edge.target().addClass('spanning-tree');
                }
            });
        }

        if (userGraph.current && !userCy) {
            const newCy = cytoscape({
                container: userGraph.current,
                elements: [],
                style: commonStyles,
                layout: {name: 'circle'},
                userZoomingEnabled: false,
            });
            setUserCy(newCy);
            setupGraphInteractions(newCy);
        }
    }, []);

    const setupGraphInteractions = (cy: cytoscape.Core) => {
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
                            cy.add({
                                group: 'edges',
                                data: {source: newSelected[0], target: newSelected[1]}
                            });
                        }
                        cy.nodes().removeClass('selected');
                        return [];
                    } else {
                        event.target.addClass('selected');
                        return newSelected;
                    }
                });
            }
            setSpanningTreeFound(null);
        });
    };

    const findSpanningTree = (cy: cytoscape.Core | null) => {
        if (!cy) {
            return;
        }
        cy.elements().removeClass('spanning-tree');
        const nodes = cy.nodes();
        if (nodes.length === 0) {
            setSpanningTreeFound(false);
            return;
        }

        const visited = new Set<string>();
        const queue: cytoscape.NodeSingular[] = [];
        const spanningEdges: cytoscape.EdgeSingular[] = [];
        const start = nodes[0];
        visited.add(start.id());
        queue.push(start);
        start.addClass('spanning-tree');

        while (queue.length > 0) {
            const cur = queue.shift()!;

            cur.neighborhood('node').forEach((neighbor) => {
                if (!visited.has(neighbor.id())) {
                    queue.push(neighbor);
                    visited.add(neighbor.id());
                    neighbor.addClass('spanning-tree');
                    const edge = cy.edges(`[source = "${cur.id()}"][target = "${neighbor.id()}"], [source = "${neighbor.id()}"][target = "${cur.id()}"]`).first();
                    spanningEdges.push(edge);
                }
            });
        }
        spanningEdges.forEach(edge => edge.addClass('spanning-tree'));

        setSpanningTreeFound(visited.size === nodes.length);
    };

    const resetGraph = (cy: cytoscape.Core | null) => {
        if (cy) {
            cy.elements().remove();
            cy.elements().removeClass('spanning-tree selected');
            setSelectedNodes([]);
            setSpanningTreeFound(null);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphAlgorithms.spanningTree.title')}</Subtitle>
            <StyledCard>
                <StyledText>{t('graphTheory.graphAlgorithms.spanningTree.introduction')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.spanningTree.definitionTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.spanningTree.definition')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.spanningTree.algorithmTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.spanningTree.algorithm')}<br/><br/></StyledText>

                <Example>{t('graphTheory.graphAlgorithms.spanningTree.exampleDescription')}<br/><br/></Example>

                <StyledGraphContainer ref={exampleGraph}/>
                <StyledText>{t('graphTheory.graphAlgorithms.spanningTree.exampleExplanation')}<br/><br/></StyledText>

                <StyledInteractionPrompt>{t('graphTheory.graphAlgorithms.spanningTree.interactiveDescription')}</StyledInteractionPrompt>

                <StyledGraphContainer ref={userGraph}/>

                <Grid container spacing={3} justifyContent="center" style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Grid item>
                        <StyledButton onClick={() => findSpanningTree(userCy)}>
                            <PlayArrowIcon/>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={() => resetGraph(userCy)}>
                            <DeleteIcon/>
                        </StyledButton>
                    </Grid>
                </Grid>

                {spanningTreeFound !== null && (
                    <Paper elevation={3} style={{
                        padding: '15px',
                        marginTop: '20px',
                        backgroundColor: spanningTreeFound ? '#e8f5e9' : '#ffebee'
                    }}>
                        <Typography variant="h6" gutterBottom>
                            {spanningTreeFound ? (
                                <InfoIcon style={{verticalAlign: 'middle', marginRight: '10px', color: '#4caf50'}}/>
                            ) : (
                                <ErrorIcon style={{verticalAlign: 'middle', marginRight: '10px', color: '#f44336'}}/>
                            )}
                            {spanningTreeFound
                                ? t('graphTheory.graphAlgorithms.spanningTree.spanningTreeFound')
                                : t('graphTheory.graphAlgorithms.spanningTree.spanningTreeNotFound')
                            }
                        </Typography>
                        <Typography>
                            {spanningTreeFound
                                ? t('graphTheory.graphAlgorithms.spanningTree.spanningTreeFoundDescription')
                                : t('graphTheory.graphAlgorithms.spanningTree.spanningTreeNotFoundDescription')
                            }
                        </Typography>
                    </Paper>
                )}
            </StyledCard>
        </SubContent>
    );
};

export default GraphSpanningTree;
