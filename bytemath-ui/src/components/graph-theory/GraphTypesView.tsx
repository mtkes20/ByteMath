import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import {Grid, styled, Typography} from "@mui/material";


interface GraphTypesProps {
    currentGraphType: string;
    setCurrentGraphType: (type: string) => void;
}

const GraphTypesView: React.FC<GraphTypesProps> = ({currentGraphType, setCurrentGraphType}) => {
    const graphTypesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (graphTypesRef.current) {
            cytoscape({
                container: graphTypesRef.current,
                elements: getElementsForGraphType(currentGraphType),
                style: getStyleForGraphType(currentGraphType),
                layout: {name: 'circle'},
                zoomingEnabled: false
            });
        }
    }, [currentGraphType]);


    const getElementsForGraphType = (type: string): cytoscape.ElementDefinition[] => {
        switch (type) {
            case "Undirected":
                return [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'E'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                    {data: {id: 'DE', source: 'D', target: 'E'}},
                    {data: {id: 'EA', source: 'E', target: 'A'}},
                ];
            case "Directed":
                return [
                    {data: {id: '1'}},
                    {data: {id: '2'}},
                    {data: {id: '3'}},
                    {data: {id: '4'}},
                    {data: {id: '5'}},
                    {data: {id: 'e12', source: '1', target: '2'}},
                    {data: {id: 'e23', source: '2', target: '3'}},
                    {data: {id: 'e31', source: '3', target: '1'}},
                    {data: {id: 'e24', source: '2', target: '4'}},
                    {data: {id: 'e45', source: '4', target: '5'}},
                    {data: {id: 'e53', source: '5', target: '3'}},
                ];
            case "Weighted":
                return [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'AB', source: 'A', target: 'B', weight: 3}},
                    {data: {id: 'BC', source: 'B', target: 'C', weight: 2}},
                    {data: {id: 'CD', source: 'C', target: 'D', weight: 4}},
                    {data: {id: 'DA', source: 'D', target: 'A', weight: 1}},
                ];
            case "Complete":
                return [
                    {data: {id: 'P'}},
                    {data: {id: 'Q'}},
                    {data: {id: 'R'}},
                    {data: {id: 'S'}},
                    {data: {id: 'PQ', source: 'P', target: 'Q'}},
                    {data: {id: 'PR', source: 'P', target: 'R'}},
                    {data: {id: 'PS', source: 'P', target: 'S'}},
                    {data: {id: 'QR', source: 'Q', target: 'R'}},
                    {data: {id: 'QS', source: 'Q', target: 'S'}},
                    {data: {id: 'RS', source: 'R', target: 'S'}},
                ];
            default:
                return [];
        }
    };

    const getStyleForGraphType = (type: string): cytoscape.Stylesheet[] => {
        const baseStyles: cytoscape.Stylesheet[] = [
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
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': 'white',
                    'curve-style': 'bezier'
                }
            }
        ];

        switch (type) {
            case "Directed":
                return [
                    ...baseStyles,
                    {
                        selector: 'edge',
                        style: {
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': 'white',
                            'arrow-scale': 2
                        }
                    },
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#FF6B6B',
                        }
                    }
                ];
            case "Weighted":
                return [
                    ...baseStyles,
                    {
                        selector: 'edge',
                        style: {
                            'label': 'data(weight)',
                            'font-size': '16px',
                            'color': 'white',
                            'text-outline-color': 'black',
                            'text-outline-width': 2,
                            'text-background-opacity': 0,
                            'text-rotation': 0,
                            'text-margin-y': -10,
                        }
                    }
                ];
            case "Complete":
                return [
                    ...baseStyles,
                    {
                        selector: 'edge',
                        style: {
                            'curve-style': 'haystack'
                        }
                    },
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#FFA500',
                        }
                    }
                ];
            default:
                return [
                    ...baseStyles,
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#45B7D1',
                        }
                    }
                ];
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <GraphContainer ref={graphTypesRef}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Text>
                    <h2>Types of Graphs</h2>
                    <p>Graphs come in various forms, each with unique properties:</p>
                    <TermList>
                        <TermItem onClick={() => setCurrentGraphType("Undirected")}
                                  active={currentGraphType === "Undirected"}>
                            <strong>Undirected Graph:</strong> Edges have no direction. Like friendship on Facebook.
                        </TermItem>
                        <TermItem onClick={() => setCurrentGraphType("Directed")}
                                  active={currentGraphType === "Directed"}>
                            <strong>Directed Graph (Digraph):</strong> Edges have a direction. Like following someone on
                            Twitter.
                        </TermItem>
                        <TermItem onClick={() => setCurrentGraphType("Weighted")}
                                  active={currentGraphType === "Weighted"}>
                            <strong>Weighted Graph:</strong> Edges have values (weights). Like distances between cities.
                        </TermItem>
                        <TermItem onClick={() => setCurrentGraphType("Complete")}
                                  active={currentGraphType === "Complete"}>
                            <strong>Complete Graph:</strong> Every vertex is connected to every other vertex.
                        </TermItem>
                    </TermList>
                    <p><em>Click on a graph type to see an example!</em></p>
                </Text>
            </Grid>
        </Grid>
    );
};

const Text = styled(Typography)({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
});

const GraphContainer = styled('div')({
    width: '100%',
    height: '400px',
    border: '1px solid #ccc',
    margin: '20px 0',
});

const TermList = styled('ul')({
    listStyleType: 'none',
    padding: 0,
});

const TermItem = styled('li')<{ active?: boolean }>(({active}) => ({
    cursor: 'pointer',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: active ? 'orange' : 'transparent',
    color: 'white',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: active ? 'orange' : 'rgba(255, 255, 255, 0.1)',
    },
}));

export default GraphTypesView;
