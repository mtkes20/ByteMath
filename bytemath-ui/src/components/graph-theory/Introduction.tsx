import React, {useEffect, useRef} from 'react';
import {Button, styled, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import GraphBoard from "./GraphBoard";
import cytoscape, {Core, NodeSingular} from 'cytoscape';

const Introduction: React.FC = () => {
    const {t} = useTranslation();
    const graphRef = useRef<HTMLDivElement>(null);
    const cyRef = useRef<Core | null>(null);

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
                            'background-color': '#4CAF50',
                            'label': 'data(id)',
                            'color': 'white',
                            'text-valign': 'center',
                            'text-halign': 'center',
                        }
                    },
                    {
                        selector: 'node.selected',
                        style: {
                            'background-color': '#FFA500',
                            'border-width': '2px',
                            'border-color': '#000000'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 2,
                            'line-color': '#ccc',
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

    return (
        <Container>
            <Title variant="h1">Introduction to Graph Theory</Title>
            <Text>
                <p>Graph theory is a fun way to understand how things are connected. Imagine it as a tool to map out
                    relationships, like in social networks or road systems.</p>

                <h2>What's a Graph?</h2>
                <p>A graph is like a connect-the-dots picture:</p>
                <ul>
                    <li><strong>Dots (Vertices):</strong> These are the main objects or points of interest.</li>
                    <li><strong>Lines (Edges):</strong> These show how the dots are connected.</li>
                </ul>

                <h2>Interactive Graph Example</h2>
                <p>Click on two nodes to create an edge between them!</p>
                <GraphContainer ref={graphRef}/>
                <Button variant="contained" color="secondary" onClick={clearEdges} style={{marginTop: '10px'}}>
                    Clear Edges
                </Button>
            </Text>
            <div style={{padding: "60px"}}>
                <GraphBoard/>
            </div>
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
    width: '400px',
    height: '300px',
    border: '1px solid #ccc',
    margin: '20px 0',
});

export default Introduction;
