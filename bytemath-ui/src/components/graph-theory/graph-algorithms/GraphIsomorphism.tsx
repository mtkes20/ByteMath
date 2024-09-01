import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Stylesheet} from 'cytoscape';
import {Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
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
    defaultNode: '#57a6e6',
    matchedNode: '#66da2d',
    mismatchedNode: '#f32b2b',
    edge: '#ffffff',
    selected: '#ffd700',
};

const commonStyles: Stylesheet[] = [
    {
        selector: 'node',
        style: {
            'background-color': colors.defaultNode,
            'label': 'data(id)',
            'color': 'white',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '18px',
            'font-weight': 'bold',
            'width': 40,
            'height': 40,
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': colors.edge,
            'curve-style': 'bezier',
        }
    },
    {
        selector: '.matched',
        style: {
            'background-color': colors.matchedNode,
        }
    },
    {
        selector: '.mismatched',
        style: {
            'background-color': colors.mismatchedNode,
        }
    },
    {
        selector: '.selected',
        style: {
            'background-color': colors.selected,
        }
    },
];

const elementsGraph1 = [
    {data: {id: 'A'}},
    {data: {id: 'B'}},
    {data: {id: 'C'}},
    {data: {id: 'D'}},
    {data: {id: 'E'}},
    {data: {id: 'F'}},
    {data: {id: 'G'}},
    {data: {source: 'A', target: 'B'}},
    {data: {source: 'B', target: 'C'}},
    {data: {source: 'C', target: 'D'}},
    {data: {source: 'D', target: 'E'}},
    {data: {source: 'E', target: 'F'}},
    {data: {source: 'F', target: 'G'}},
    {data: {source: 'G', target: 'A'}},
    {data: {source: 'A', target: 'D'}},
    {data: {source: 'B', target: 'E'}},
    {data: {source: 'C', target: 'F'}},
    {data: {source: 'D', target: 'G'}}
];

const elementsGraph2 = [
    {data: {id: '1'}},
    {data: {id: '2'}},
    {data: {id: '3'}},
    {data: {id: '4'}},
    {data: {id: '5'}},
    {data: {id: '6'}},
    {data: {id: '7'}},
    {data: {source: '1', target: '2'}},
    {data: {source: '2', target: '3'}},
    {data: {source: '3', target: '4'}},
    {data: {source: '4', target: '5'}},
    {data: {source: '5', target: '6'}},
    {data: {source: '6', target: '7'}},
    {data: {source: '7', target: '1'}},
    {data: {source: '1', target: '4'}},
    {data: {source: '2', target: '5'}},
    {data: {source: '3', target: '6'}},
    {data: {source: '4', target: '7'}}
];


const GraphIsomorphism: React.FC = () => {
    const {t} = useTranslation();

    const exampleGraph1 = useRef<HTMLDivElement>(null);
    const exampleGraph2 = useRef<HTMLDivElement>(null);
    const userGraph1 = useRef<HTMLDivElement>(null);
    const userGraph2 = useRef<HTMLDivElement>(null);
    const [exampleCy1, setExampleCy1] = useState<cytoscape.Core | null>(null);
    const [exampleCy2, setExampleCy2] = useState<cytoscape.Core | null>(null);
    const [userCy1, setUserCy1] = useState<cytoscape.Core | null>(null);
    const [userCy2, setUserCy2] = useState<cytoscape.Core | null>(null);
    const [isomorphic, setIsomorphic] = useState<boolean | null>(null);
    const [selectedNodes1, setSelectedNodes1] = useState<string[]>([]);
    const [selectedNodes2, setSelectedNodes2] = useState<string[]>([]);

    useEffect(() => {
        if (exampleGraph1.current && !exampleCy1) {
            const cy = cytoscape({
                container: exampleGraph1.current,
                elements: elementsGraph1,
                style: commonStyles,
                layout: {name: 'circle'},
                userZoomingEnabled: false,
            });
            setExampleCy1(cy);
        }

        if (exampleGraph2.current && !exampleCy2) {
            const cy = cytoscape({
                container: exampleGraph2.current,
                elements: elementsGraph2,
                style: commonStyles,
                layout: {name: 'breadthfirst'},
                userZoomingEnabled: false,
            });
            setExampleCy2(cy);
        }

        if (userGraph1.current && !userCy1) {
            const cy = cytoscape({
                container: userGraph1.current,
                elements: [],
                style: commonStyles,
                userZoomingEnabled: false,
            });
            setUserCy1(cy);
            setupGraphInteractions(cy, setSelectedNodes1);
        }

        if (userGraph2.current && !userCy2) {
            const cy = cytoscape({
                container: userGraph2.current,
                elements: [],
                style: commonStyles,
                layout: {name: 'grid'},
                userZoomingEnabled: false,
                userPanningEnabled: false,
            });
            setUserCy2(cy);
            setupGraphInteractions(cy, setSelectedNodes2);
        }
    }, []);

    const setupGraphInteractions = (cy: cytoscape.Core, setSelectedNodes: React.Dispatch<React.SetStateAction<string[]>>) => {
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
        });
    };

    const determineIsomorphismAndAnimate = () => {
        if (!userCy1 || !userCy2) {
            return;
        }
        const nodes1 = userCy1.nodes();
        const nodes2 = userCy2.nodes();
        nodes1.removeClass('matched mismatched');
        nodes2.removeClass('matched mismatched');
        const isIsomorphic = determineIsomorphism(userCy1, userCy2);
        animateIsomorphismResult(nodes1, nodes2, isIsomorphic);
    };

    function determineIsomorphism(cy1: cytoscape.Core, cy2: cytoscape.Core): boolean {
        const nodeIds1 = cy1.nodes().map(node => node.id());
        const nodeIds2 = cy2.nodes().map(node => node.id());

        if (nodeIds1.length !== nodeIds2.length || cy1.edges().length !== cy2.edges().length) {
            return false;
        }

        return permute(nodeIds2, (permutation) => {
            const mapping = Object.fromEntries(nodeIds1.map((node, i) => [node, permutation[i]]));
            return verifyMapping(cy1, cy2, mapping);
        });
    }

    const animateIsomorphismResult = (nodes1: cytoscape.NodeCollection, nodes2: cytoscape.NodeCollection, isIsomorphic: boolean) => {
        const max = Math.max(nodes1.length, nodes2.length);
        for (let i = 0; i < max; i++) {
            setTimeout(() => {
                if (i < nodes1.length) {
                    nodes1[i].addClass(isIsomorphic ? 'matched' : 'mismatched');
                }
                if (i < nodes2.length) {
                    nodes2[i].addClass(isIsomorphic ? 'matched' : 'mismatched');
                }
            }, i * 400);
        }

        setTimeout(() => {
            setIsomorphic(isIsomorphic);
        }, max * 400);
    }

    function permute(array: string[], callback: (permutation: string[]) => boolean): boolean {
        if (array.length <= 1) {
            return callback(array);
        }
        for (let index = 0; index < array.length; index++) {
            const remaining = [...array.slice(0, index), ...array.slice(index + 1)];
            const cur = array[index];

            if (permute(remaining, (permutation) => callback([cur, ...permutation]))) {
                return true;
            }
        }
        return false;
    }

    function verifyMapping(cy1: cytoscape.Core, cy2: cytoscape.Core, mapping: { [key: string]: string }): boolean {
        return cy1.edges().every(edge => {
            const source = edge.data('source');
            const target = edge.data('target');
            const mappedSource = mapping[source];
            const mappedTarget = mapping[target];
            return cy2.$(`edge[source = "${mappedSource}"][target = "${mappedTarget}"]`).length > 0 || cy2.$(`edge[source = "${mappedTarget}"][target = "${mappedSource}"]`).length > 0;
        });
    }

    const deleteUserGraphs = () => {
        if (userCy1 && userCy2) {
            userCy1.elements().remove();
            userCy2.elements().remove();
            userCy1.nodes().removeClass('matched mismatched selected');
            userCy2.nodes().removeClass('matched mismatched selected');
            setIsomorphic(null);
            setSelectedNodes1([]);
            setSelectedNodes2([]);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphAlgorithms.graphIsomorphism.title')}</Subtitle>
            <StyledCard>
                <StyledText>{t('graphTheory.graphAlgorithms.graphIsomorphism.introduction')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.graphIsomorphism.definitionTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.graphIsomorphism.definition')}<br/><br/></StyledText>

                <Subtitle>{t('graphTheory.graphAlgorithms.graphIsomorphism.determinationTitle')}</Subtitle>
                <StyledText>{t('graphTheory.graphAlgorithms.graphIsomorphism.determination')}<br/><br/></StyledText>

                <Example>{t('graphTheory.graphAlgorithms.graphIsomorphism.exampleDescription')}<br/><br/></Example>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={exampleGraph1}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={exampleGraph2}/>
                    </Grid>
                </Grid>

                <StyledInteractionPrompt>
                    {t('graphTheory.graphAlgorithms.graphIsomorphism.interactiveDescription')}
                </StyledInteractionPrompt>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={userGraph1}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={userGraph2}/>
                    </Grid>
                </Grid>

                <Grid container spacing={3} justifyContent="center" style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Grid item>
                        <StyledButton onClick={determineIsomorphismAndAnimate}>
                            <PlayArrowIcon/>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={deleteUserGraphs}>
                            <DeleteIcon/>
                        </StyledButton>
                    </Grid>
                </Grid>

                {isomorphic !== null && (
                    <StyledText
                        style={{
                            marginTop: '20px',
                            textAlign: 'center',
                            color: isomorphic ? '#66da2d' : '#f32b2b'
                        }}>
                        {isomorphic
                            ? t('graphTheory.graphAlgorithms.graphIsomorphism.isomorphicResult')
                            : t('graphTheory.graphAlgorithms.graphIsomorphism.nonIsomorphicResult')}
                    </StyledText>
                )}

            </StyledCard>
        </SubContent>
    );
};

export default GraphIsomorphism;
