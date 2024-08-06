import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {NodeSingular} from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import {useTranslation} from 'react-i18next';

const GraphVertexDegree: React.FC = () => {
    const {t} = useTranslation();
    const undirectedGraph = useRef<HTMLDivElement>(null);
    const directedGraph = useRef<HTMLDivElement>(null);
    const [selectedNode, setSelectedNode] = useState<string | null>(null);
    const [undirectedDegree, setUndirectedDegree] = useState<number | null>(null);
    const [inDegree, setInDegree] = useState<number | null>(null);
    const [outDegree, setOutDegree] = useState<number | null>(null);

    useEffect(() => {
        if (undirectedGraph.current && directedGraph.current) {
            const undirectedCy = cytoscape({
                container: undirectedGraph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'E'}},
                    {data: {id: 'F'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'AC', source: 'A', target: 'C'}},
                    {data: {id: 'AD', source: 'A', target: 'D'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'DF', source: 'D', target: 'F'}},
                    {data: {id: 'FA', source: 'F', target: 'A'}},
                    {data: {id: 'EC', source: 'E', target: 'C'}},
                    {data: {id: 'ED', source: 'E', target: 'D'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#b58f80',
                            'label': 'data(id)',
                            'color': 'black',
                            'text-valign': 'center',
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
                    },
                    {
                        selector: 'node.selected',
                        style: {
                            'background-color': '#ff7f50',
                            'border-width': 2,
                            'border-color': '#ff4500'
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            const directedCy = cytoscape({
                container: directedGraph.current,
                elements: [
                    {data: {id: '1'}},
                    {data: {id: '2'}},
                    {data: {id: '3'}},
                    {data: {id: '4'}},
                    {data: {id: '5'}},
                    {data: {id: '6'}},
                    {data: {id: '14', source: '1', target: '4'}},
                    {data: {id: '24', source: '2', target: '4'}},
                    {data: {id: '34', source: '3', target: '4'}},
                    {data: {id: '24', source: '2', target: '4'}},
                    {data: {id: '25', source: '2', target: '5'}},
                    {data: {id: '16', source: '1', target: '6'}},
                    {data: {id: '46', source: '4', target: '6'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#61b6b6',
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
                            'curve-style': 'bezier',
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': 'white'
                        }
                    },
                    {
                        selector: 'node.selected',
                        style: {
                            'background-color': '#ff7f50',
                            'border-width': 2,
                            'border-color': '#ff4500'
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            undirectedCy.on('tap', 'node', function (evt) {
                const node = evt.target as NodeSingular;
                undirectedCy.elements().removeClass('selected');
                directedCy.elements().removeClass('selected');
                node.addClass('selected');
                setSelectedNode(node.id());
                setUndirectedDegree(node.degree(false));
                setInDegree(null);
                setOutDegree(null);
            });

            directedCy.on('tap', 'node', function (evt) {
                const node = evt.target as NodeSingular;
                undirectedCy.elements().removeClass('selected');
                directedCy.elements().removeClass('selected');
                node.addClass('selected');
                setSelectedNode(node.id());
                setUndirectedDegree(null);
                setInDegree(node.indegree(false));
                setOutDegree(node.outdegree(false));
            });
        }
    }, []);

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.introduction.vertexDegree.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.introduction.vertexDegree.description')}
                    <StyledList>
                        <StyledListItem>{t('graphTheory.introduction.vertexDegree.undirectedGraphDescription')}</StyledListItem>
                        <StyledListItem>{t('graphTheory.introduction.vertexDegree.directedGraphDescription')}</StyledListItem>
                    </StyledList>
                </StyledText>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={undirectedGraph}/>
                        <StyledExplanation>{t('graphTheory.introduction.vertexDegree.undirectedGraph')}</StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={directedGraph}/>
                        <StyledExplanation>{t('graphTheory.introduction.vertexDegree.directedGraph')}</StyledExplanation>
                    </Grid>
                </Grid>
                <StyledExplanation>
                    {selectedNode && undirectedDegree !== null
                        ? t('graphTheory.introduction.vertexDegree.undirectedDegreeExplanation', {selectedNode, undirectedDegree})
                        : selectedNode && inDegree !== null && outDegree !== null
                            ? t('graphTheory.introduction.vertexDegree.directedDegreeExplanation', {
                                selectedNode,
                                inDegree,
                                outDegree
                            })
                            : t('graphTheory.introduction.vertexDegree.selectVertexPrompt')}
                </StyledExplanation>
                <StyledInteractionPrompt>
                    {t('graphTheory.introduction.vertexDegree.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default GraphVertexDegree;
