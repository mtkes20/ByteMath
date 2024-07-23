import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Core, NodeSingular} from 'cytoscape';
import {Button, Grid, Paper, styled, Typography} from "@mui/material";


interface GraphIntroViewProps {
}


const GraphIntroView: React.FC<GraphIntroViewProps> = () => {
    const graphFirstExampleRef = useRef<HTMLDivElement>(null);
    const cyRef = useRef<Core | null>(null);
    const [selectedTerm, setSelectedTerm] = useState<string | null>(null);


    useEffect(() => {
        if (graphFirstExampleRef.current) {
            const cy = cytoscape({
                container: graphFirstExampleRef.current,
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
                zoomingEnabled: false
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
                    const originalColor = edge.style('line-color');
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

    const clearEdges = () => {
        if (cyRef.current) {
            cyRef.current.edges().remove();
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Text>
                    <p>Graph theory is a fascinating way to understand connections in our world. It's like a map of
                        relationships, helping us see how things are linked, whether it's friends in a social
                        network or cities connected by roads.</p>

                    <h2>What Exactly is a Graph?</h2>
                    <p>Imagine a game of connect-the-dots, but with a twist. In graph theory:</p>
                    <TermList>
                        <TermItem onClick={() => highlightTerm('vertex')} active={selectedTerm === 'vertex'}>
                            <strong>Vertices (or Nodes):</strong> These are the dots. They represent objects or
                            points of interest. In a social network graph, each vertex could be a person.
                        </TermItem>
                        <TermItem onClick={() => highlightTerm('edge')} active={selectedTerm === 'edge'}>
                            <strong>Edges:</strong> These are the lines connecting the dots. They show relationships
                            or connections between vertices. In our social network example, an edge could represent
                            a friendship between two people.
                        </TermItem>
                    </TermList>
                    <p><em>Click on 'Vertices' or 'Edges' above to see them highlighted in the graph!</em></p>

                    <h2>Try It Yourself: Build a Graph!</h2>
                    <p>In the interactive example to the right:</p>
                    <ul>
                        <li>The circles are vertices (nodes)</li>
                        <li>Click on two circles to create an edge (connection) between them</li>
                        <li>Use 'Clear Edges' to start over</li>
                    </ul>
                    <p>Can you create a graph that connects all vertices?</p>
                </Text>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{padding: '20px', backgroundColor: '#2a2a2a'}}>
                    <GraphContainer ref={graphFirstExampleRef}/>
                    <Button variant="contained" color="secondary" onClick={clearEdges}
                            style={{marginTop: '10px', marginRight: '10px'}}>
                        Clear Edges
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};

const GraphContainer = styled('div')({
    width: '100%',
    height: '400px',
    border: '1px solid #ccc',
    margin: '20px 0',
});

const Text = styled(Typography)({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
});

const TermList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
});

const TermItem = styled('li')<{ active?: boolean }>(({active}) => ({
    cursor: 'pointer',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: active ? 'orange' : '#2a2a2a',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: active ? '#orange' : '#3a3a3a',
        transform: 'translateX(5px)',
    },
}));

export default GraphIntroView;
