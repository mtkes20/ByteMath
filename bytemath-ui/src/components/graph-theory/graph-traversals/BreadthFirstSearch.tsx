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
    queuedNode: '#ffd700',
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
        selector: '.in-queue',
        style: {
            'background-color': colors.queuedNode,
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

const BreadthFirstSearch: React.FC = () => {
    const {t} = useTranslation();

    const exampleGraph = useRef<HTMLDivElement>(null);
    const userGraph = useRef<HTMLDivElement>(null);
    const [exampleCy, setExampleCy] = useState<cytoscape.Core | null>(null);
    const [userCy, setUserCy] = useState<cytoscape.Core | null>(null);
    const [startNode, setStartNode] = useState<string | null>(null);
    const [isRunning, setIsRunning] = useState(false);
    const [currentStep, setCurrentStep] = useState(-1);
    const [bfsOrder, setBfsOrder] = useState<string[]>([]);
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
    const [queue, setQueue] = useState<string[]>([]);

    useEffect(() => {
            if (exampleGraph.current && !exampleCy) {
                const cy = cytoscape({
                        container: exampleGraph.current,
                        elements: [
                            {data: {id: 'a'}},
                            {data: {id: 'b'}},
                            {data: {id: 'c'}},
                            {data: {id: 'd'}},
                            {data: {id: 'e'}},
                            {data: {id: 'f'}},
                            {data: {id: 'g'}},
                            {data: {id: 'h'}},
                            {data: {id: 'i'}},
                            {data: {id: 'j'}},
                            {data: {id: 'k'}},
                            {data: {id: 'l'}},
                            {data: {id: 'm'}},
                            {data: {id: 'n'}},
                            {data: {id: 'o'}},

                            {data: {source: 'a', target: 'b'}},
                            {data: {source: 'a', target: 'c'}},
                            {data: {source: 'b', target: 'd'}},
                            {data: {source: 'b', target: 'e'}},
                            {data: {source: 'c', target: 'f'}},
                            {data: {source: 'c', target: 'g'}},
                            {data: {source: 'd', target: 'h'}},
                            {data: {source: 'd', target: 'i'}},
                            {data: {source: 'e', target: 'j'}},
                            {data: {source: 'e', target: 'k'}},
                            {data: {source: 'f', target: 'l'}},
                            {data: {source: 'f', target: 'm'}},
                            {data: {source: 'g', target: 'o'}},
                            {data: {source: 'g', target: 'n'}}
                        ],
                        style: commonStyles,
                        layout:
                            {
                                name: 'breadthfirst',
                                directed: true,
                                spacingFactor: 1.1,
                                roots: ['a']
                            }
                        ,
                        userZoomingEnabled: false,
                    })
                ;
                setExampleCy(cy);
                runBFS(cy, 'a');
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

    const runBFS = (
        cy: cytoscape.Core,
        startNode: string,
        onStep?: (order: string[], queue: string[]) => void
    ) => {
        const visited = new Set<string>();
        const queue: string[] = [startNode];
        const order: string[] = [];

        cy.elements().removeClass('visited current in-queue seen-edge');


        const bfsStep = () => {
            if (queue.length > 0) {
                const node = queue.shift()!;
                if (!visited.has(node)) {
                    order.push(node);
                    visited.add(node);
                    const cur = cy.getElementById(node);
                    cur.addClass('visited current');

                    cur.neighborhood().nodes().forEach((next: NodeSingular) => {
                        if (!visited.has(next.id())) {
                            queue.push(next.id());
                            next.addClass('in-queue');
                            cur.edgesWith(next).addClass('seen-edge');
                        }
                    });

                    if (onStep) {
                        onStep(order, [...queue]);
                    }
                }
                setTimeout(() => {
                    cy.getElementById(node).removeClass('current');
                    bfsStep();
                }, 1000);
            } else {
                cy.elements().removeClass('visited current in-queue seen-edge');
                setTimeout(() => runBFS(cy, startNode, onStep), 1000);
            }
        };
        bfsStep();
    };


    const handleRun = () => {
        if (!userCy || !startNode) return;
        runBFS(userCy, startNode, (order, queue) => {
            setBfsOrder(order);
            setQueue(queue);
            setCurrentStep(order.length - 1);
        });
    };

    const resetBoard = () => {
        if (userCy) {
            userCy.elements().remove();
            setStartNode(null);
            setIsRunning(false);
            setBfsOrder([]);
            setCurrentStep(-1);
            setQueue([]);
            setSelectedNodes([]);
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphTraversals.bfs.title')}</Subtitle>
            <StyledCard style={{padding: '30px'}}>
                <StyledText style={{marginBottom: '20px'}}>
                    {t('graphTheory.graphTraversals.bfs.explanation')}
                </StyledText>
                <StyledText style={{marginBottom: '20px'}}>
                    {t('graphTheory.graphTraversals.bfs.demoDescription')}
                </StyledText>
                <StyledGraphContainer ref={exampleGraph} style={{height: '400px', marginBottom: '30px'}}/>
                <StyledCard
                    style={{padding: '20px', marginTop: '30px', marginBottom: '30px', backgroundColor: "#1a1a1a"}}>
                    <Grid container spacing={3}>
                        {[
                            {
                                color: colors.unvisitedNode,
                                label: t('graphTheory.graphTraversals.bfs.unvisitedNode')
                            },
                            {color: colors.visitedNode, label: t('graphTheory.graphTraversals.bfs.visitedNode')},
                            {
                                color: colors.currentNodeEdge,
                                label: t('graphTheory.graphTraversals.bfs.currentNode')
                            },
                            {color: colors.queuedNode, label: t('graphTheory.graphTraversals.bfs.queuedNode')},
                            {
                                color: colors.currentNodeEdge,
                                label: t('graphTheory.graphTraversals.bfs.traversedEdge')
                            },
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
                    {t('graphTheory.graphTraversals.bfs.interactionDescription')}
                </StyledText>
                <StyledGraphContainer ref={userGraph} style={{height: '400px', marginBottom: '30px'}}/>
                <Grid container spacing={3} justifyContent="center"
                      style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Grid container spacing={3} justifyContent="center"
                          style={{marginTop: '30px', marginBottom: '30px'}}>
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
                        {t('graphTheory.graphTraversals.bfs.interactionPrompt')}
                    </StyledInteractionPrompt>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default BreadthFirstSearch;
