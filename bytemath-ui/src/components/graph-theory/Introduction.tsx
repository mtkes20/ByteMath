import React, {useEffect, useRef, useState} from 'react';
import {Button, Grid, Paper, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import cytoscape, {Core, NodeSingular} from 'cytoscape';

const Introduction: React.FC = () => {
    const {t} = useTranslation();
    const graphRef = useRef<HTMLDivElement>(null);
    const cyRef = useRef<Core | null>(null);
    const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

    useEffect(() => {
        if (graphRef.current) {
            const cy = cytoscape({
                container: graphRef.current,
                elements: [
                    {data: {id: '1'}},
                    {data: {id: '2'}},
                    {data: {id: '3'}},
                    {data: {id: '4'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': 'white',
                            'label': 'data(id)',
                            'color': 'black',
                            'text-valign': 'center',
                            'text-halign': 'center',
                            'width': 40,
                            'height': 40,
                        }
                    },
                    {
                        selector: 'node.selected',
                        style: {
                            'background-color': '#4CAF50',
                            'border-color': '#000000'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 4,
                            'line-color': 'white',
                            'curve-style': 'bezier'
                        }
                    }
                ],
                layout: {
                    name: 'grid',
                    rows: 2
                }
            });

            cyRef.current = cy;

            let selectedNode: NodeSingular | null = null;

            cy.on('tap', 'node', function (this: NodeSingular) {
                if (selectedNode && selectedNode !== this) {
                    const existingEdge = cy.edges().filter(edge =>
                        (edge.source().id() === selectedNode!.id() && edge.target().id() === this.id()) ||
                        (edge.source().id() === this.id() && edge.target().id() === selectedNode!.id())
                    );

                    if (existingEdge.length === 0) {
                        cy.add({
                            group: 'edges',
                            data: {source: selectedNode.id(), target: this.id()}
                        });
                    }
                    selectedNode.removeClass('selected');
                    selectedNode = null;
                } else {
                    if (selectedNode) {
                        selectedNode.removeClass('selected');
                    }
                    selectedNode = this;
                    this.addClass('selected');
                }
            });

            cy.on('tap', function (event) {
                if (event.target === cy) {
                    if (selectedNode) {
                        selectedNode.removeClass('selected');
                        selectedNode = null;
                    }
                }
            });
        }
    }, []);

    const clearEdges = () => {
        if (cyRef.current) {
            cyRef.current.edges().remove();
        }
    };

    const highlightTerm = (term: string) => {
        setSelectedTerm(term);
        setTimeout(() => {
            setSelectedTerm(null);
        }, 1000);
        if (cyRef.current) {
            if (term === 'vertex') {
                cyRef.current.nodes().forEach((node) => {
                    const originalColor = node.style('background-color');
                    node.animate({
                        style: {'background-color': 'orange'}
                    }, {
                        duration: 1000,
                        complete: () => {
                            node.animate({
                                style: {'background-color': originalColor}
                            }, {
                                duration: 100
                            });
                        }
                    });
                });
            } else if (term === 'edge') {
                cyRef.current.edges().forEach((edge) => {
                    const originalColor = edge.style('background-color');
                    edge.animate({
                        style: {'line-color': 'orange'}
                    }, {
                        duration: 1000,
                        complete: () => {
                            edge.animate({
                                style: {'line-color': originalColor}
                            }, {
                                duration: 100
                            });
                        }
                    });
                });
            }
        }
    };

    return (
        <Container>
            <Title variant="h1">Introduction to Graph Theory</Title>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Text>
                        <p>Graph theory is a fun way to understand how things are connected. Imagine it as a tool to map
                            out
                            relationships, like in social networks or road systems.</p>

                        <h2>What's a Graph?</h2>
                        <p>A graph is like a connect-the-dots picture:</p>
                        <TermList>
                            <TermItem onClick={() => highlightTerm('vertex')} active={selectedTerm === 'vertex'}>
                                <strong>Vertices:</strong> These are the main objects or points of interest.
                            </TermItem>
                            <TermItem onClick={() => highlightTerm('edge')} active={selectedTerm === 'edge'}>
                                <strong>Edges:</strong> These show how the dots are connected.
                            </TermItem>
                        </TermList>
                        <p>Click term to highlight.</p>
                        <h2>Interactive Graph Example </h2>
                        <p>Click on two nodes to create an edge between them!</p>
                    </Text>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{padding: '20px', backgroundColor: '#2a2a2a'}}>
                        <GraphContainer ref={graphRef}/>
                        <Button variant="contained" color="secondary" onClick={clearEdges}
                                style={{marginTop: '10px', marginRight: '10px'}}>
                            Clear Edges
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

const Container = styled('div')({
    height: "100%",
    width: "100%",
    padding: "50px",
    gap: "15px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1a1a1a"
});

const Title = styled(Typography)({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
});

const Text = styled(Typography)({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
});

const GraphContainer = styled('div')({
    width: '100%',
    height: '300px',
    border: '1px solid #ccc',
    margin: '20px 0',
});

const TermList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
});

const TermItem = styled('li')<{ active: boolean }>(({active}) => ({
    cursor: 'pointer',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: active ? 'orange' : '#2a2a2a',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: active ? 'orange' : '#3a3a3a',
    },
}));

export default Introduction;
