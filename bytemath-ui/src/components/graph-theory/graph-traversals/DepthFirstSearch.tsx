import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {NodeSingular, Stylesheet} from 'cytoscape';
import {Box, Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {
    StyledButton,
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";

const colors = {
    unvisitedNode: '#57a6e6',
    visitedNode: '#32cd32',
    currentNodeEdge: '#ff5717',
    stackNode: '#ffd700',
    edge: '#ffffff',
};

const commonStyles: Stylesheet[] = [
    {
        selector: 'node',
        style: {
            'background-color': colors.unvisitedNode,
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
        selector: '.visited',
        style: {
            'background-color': colors.visitedNode,
        }
    },
    {
        selector: '.current',
        style: {
            'background-color': colors.currentNodeEdge,
        }
    },
    {
        selector: '.in-stack',
        style: {
            'background-color': colors.stackNode,
        }
    },
    {
        selector: '.seen-edge',
        style: {
            'line-color': colors.currentNodeEdge,
            'target-arrow-color': colors.currentNodeEdge,
        }
    },
    {
        selector: '.selected',
        style: {
            'background-color': '#4bc129'
        }
    },
];

const DepthFirstSearch: React.FC = () => {
    const {t} = useTranslation();

    const exampleGraph = useRef<HTMLDivElement>(null);
    const userGraph = useRef<HTMLDivElement>(null);
    const [exampleCy, setExampleCy] = useState<cytoscape.Core | null>(null);
    const [userCy, setUserCy] = useState<cytoscape.Core | null>(null);
    const [startNode, setStartNode] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
    const [dfsOrder, setDfsOrder] = useState<string[]>([]);
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
    const [stack, setStack] = useState<string[]>([]);

    useEffect(() => {
            if (exampleGraph.current && !exampleCy) {
                const cy = cytoscape({
                    container: exampleGraph.current,
                    elements: [
                        {data: {id: 'A'}},
                        {data: {id: 'B'}},
                        {data: {id: 'C'}},
                        {data: {id: 'D'}},
                        {data: {id: 'E'}},
                        {data: {id: 'F'}},
                        {data: {id: 'G'}},
                        {data: {id: 'H'}},
                        {data: {id: 'I'}},
                        {data: {id: 'J'}},
                        {data: {id: 'K'}},
                        {data: {id: 'L'}},
                        {data: {id: 'M'}},
                        {data: {id: 'N'}},
                        {data: {id: 'O'}},

                        {data: {source: 'A', target: 'B'}},
                        {data: {source: 'A', target: 'C'}},
                        {data: {source: 'B', target: 'D'}},
                        {data: {source: 'B', target: 'E'}},
                        {data: {source: 'C', target: 'F'}},
                        {data: {source: 'C', target: 'G'}},
                        {data: {source: 'D', target: 'H'}},
                        {data: {source: 'D', target: 'I'}},
                        {data: {source: 'E', target: 'J'}},
                        {data: {source: 'E', target: 'K'}},
                        {data: {source: 'F', target: 'L'}},
                        {data: {source: 'F', target: 'M'}},
                        {data: {source: 'G', target: 'O'}},
                        {data: {source: 'G', target: 'N'}}
                    ],
                    style: commonStyles,
                    layout:
                        {
                            name: 'breadthfirst',
                            directed: true,
                            spacingFactor: 1.1,
                            roots: ['A']
                        }
                    ,
                    userZoomingEnabled: false,
                });
                setExampleCy(cy);
                runDFS(cy, 'A');
            }

            if (userGraph.current && !userCy) {
                const cy = cytoscape({
                    container: userGraph.current,
                    elements: [],
                    style: commonStyles,
                    layout: {name: 'grid'},
                    userZoomingEnabled: false,
                    userPanningEnabled: false,
                });

                cy.on('tap', (event) => {
                    if (isRunning) {
                        return;
                    }
                    if (event.target === cy) {
                        const position = event.position;
                        const id = `${cy.nodes().length + 1}`;
                        const newNode = cy.add({
                            data: {id},
                            position
                        });

                        if (!startNode) {
                            setStartNode(id);
                            newNode.addClass('start');
                        }
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
                        if (!startNode || startNode !== nodeId) {
                            cy.nodes().removeClass('start');
                            event.target.addClass('start');
                            setStartNode(nodeId);
                        }
                    }
                });
                setUserCy(cy);
            }
        }
        ,
        [isRunning, startNode]
    );

    const runDFS = (
        cy: cytoscape.Core,
        startNode: string,
        onStep?: (order: string[], stack: string[]) => void
    ) => {
        const visited = new Set<string>();
        const stack: string[] = [startNode];
        const order: string[] = [];

        cy.elements().removeClass('visited current in-stack seen-edge');

        const dfsStep = () => {
            if (stack.length > 0) {
                const node = stack.pop()!;
                if (!visited.has(node)) {
                    order.push(node);
                    visited.add(node);
                    const cur = cy.getElementById(node);
                    cur.addClass('visited current');

                    const unvisited = cur.neighborhood().nodes().filter((n: NodeSingular) => !visited.has(n.id()));

                    const sorted = unvisited.sort((a: NodeSingular, b: NodeSingular) => {
                        return a.position('x') - b.position('x');
                    });

                    for (let i = sorted.length - 1; i >= 0; i--) {
                        const neighbor = sorted[i];
                        stack.push(neighbor.id());
                        neighbor.addClass('in-stack');
                        cur.edgesWith(neighbor).addClass('seen-edge');
                    }

                    if (onStep) {
                        onStep(order, [...stack]);
                    }

                    setTimeout(() => {
                        cur.removeClass('current');
                        dfsStep();
                    }, 1000);
                } else {
                    dfsStep();
                }
            } else {
                cy.elements().removeClass('visited current in-stack seen-edge');
                setTimeout(() => runDFS(cy, startNode, onStep), 2000);
            }
        };

        dfsStep();
    };

    const handleRun = () => {
        if (!userCy || !startNode) return;
        setIsRunning(true);
        runDFS(userCy, startNode, (order, stack) => {
            setDfsOrder(order);
            setStack(stack);
            setCurrentStep(order.length - 1);
        });
    };

    const resetBoard = () => {
        if (userCy) {
            userCy.elements().remove();
            setStartNode(null);
            setIsRunning(false);
            setDfsOrder([]);
            setCurrentStep(-1);
            setStack([]);
            setSelectedNodes([]);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphTraversals.dfs.title')}</Subtitle>
            <StyledCard style={{padding: '30px'}}>
                <StyledText style={{marginBottom: '20px'}}>
                    {t('graphTheory.graphTraversals.dfs.explanation')}
                </StyledText>
                <StyledText style={{marginBottom: '20px'}}>
                    {t('graphTheory.graphTraversals.dfs.demoDescription')}
                </StyledText>
                <StyledGraphContainer ref={exampleGraph} style={{height: '400px', marginBottom: '30px'}}/>
                <StyledCard
                    style={{padding: '20px', marginTop: '30px', marginBottom: '30px', backgroundColor: "#1a1a1a"}}>
                    <Grid container spacing={3}>
                        {[
                            {color: colors.unvisitedNode, label: t('graphTheory.graphTraversals.dfs.unvisitedNode')},
                            {color: colors.visitedNode, label: t('graphTheory.graphTraversals.dfs.visitedNode')},
                            {color: colors.currentNodeEdge, label: t('graphTheory.graphTraversals.dfs.currentNode')},
                            {color: colors.stackNode, label: t('graphTheory.graphTraversals.dfs.stackNode')},
                            {color: colors.currentNodeEdge, label: t('graphTheory.graphTraversals.dfs.forwardEdge')},
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}
                                  style={{display: 'flex', alignItems: 'center'}}>
                                <Box
                                    width={30}
                                    height={30}
                                    bgcolor={item.color}
                                    mr={2}
                                    borderRadius="50%"
                                />
                                <StyledExplanation>{item.label}</StyledExplanation>
                            </Grid>
                        ))}
                    </Grid>
                </StyledCard>
                <StyledText style={{marginBottom: '20px'}}>
                    {t('graphTheory.graphTraversals.dfs.interactionDescription')}
                </StyledText>
                <StyledGraphContainer ref={userGraph} style={{height: '400px', marginBottom: '30px'}}/>
                <Grid container spacing={3} justifyContent="center" style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Grid item>
                        <StyledButton onClick={handleRun} disabled={!startNode || isRunning}>
                            <PlayArrowIcon/>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={resetBoard}><RestartAltIcon/></StyledButton>
                    </Grid>
                </Grid>
                <StyledInteractionPrompt style={{marginTop: '20px'}}>
                    {t('graphTheory.graphTraversals.dfs.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default DepthFirstSearch;
