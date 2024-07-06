import React, {useCallback, useEffect, useRef, useState} from 'react';
import cytoscape, {NodeSingular} from 'cytoscape';

const GraphBoard: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cyRef = useRef<cytoscape.Core | null>(null);
    const [nodeCount, setNodeCount] = useState(0);
    const [edgeSource, setEdgeSource] = useState<string | null>(null);
    const currentIdRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const cy = cytoscape({
            container: containerRef.current,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#800080',
                        'label': 'data(id)',
                        'width': 20,
                        'height': 20,
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'color': 'black',
                        'font-size': '10px',
                        'text-outline-width': 2,
                        'text-outline-color': '#FFFFFF'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 1,
                        'line-color': '#888',
                        'target-arrow-color': '#888',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],
            layout: {name: 'preset'},
            userZoomingEnabled: false,
            userPanningEnabled: false,
        });

        cyRef.current = cy;

        cy.on('tap', (event) => {
            if (event.target === cy) {
                handleNodeAdd(event.position);
            }
        });

        cy.on('tap', 'node', (event) => {
            handleNodeClick(event.target);
        });

        return () => {
            cy.destroy();
        };
    }, []);


    const handleNodeAdd = useCallback((position: { x: number; y: number }) => {
        if (cyRef.current) {
            const newId = (currentIdRef.current + 1).toString();
            cyRef.current.add({
                group: 'nodes',
                data: {id: newId},
                position: position
            });
            currentIdRef.current += 1;
        }
    }, []);

    const edgeSourceRef = useRef<string | null>(null);

    const handleNodeClick = useCallback((node: NodeSingular) => {
        if (edgeSourceRef.current === null) {
            console.log("no memory");
            edgeSourceRef.current = node.id();
            setEdgeSource(node.id());
        } else if (edgeSourceRef.current !== node.id()) {
            if (cyRef.current) {
                cyRef.current.add({
                    group: 'edges',
                    data: {
                        id: `e${edgeSourceRef.current}-${node.id()}`,
                        source: edgeSourceRef.current,
                        target: node.id()
                    }
                });
            }
            edgeSourceRef.current = null;
            setEdgeSource(null);
        }
    }, []);

    const clearGraph = useCallback(() => {
        if (cyRef.current) {
            cyRef.current.elements().remove();
            setNodeCount(0);
            setEdgeSource(null);
            currentIdRef.current = 0;
        }
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{marginBottom: '10px'}}>
                <button onClick={clearGraph}>Clear Graph</button>
            </div>
            <div
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '600px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <div style={{marginTop: '10px', color: 'white'}}>
                <p>Click on the board to add a node.</p>
                <p>Click two nodes in succession to create an edge between them.</p>
            </div>
        </div>
    );
};

export default GraphBoard;
