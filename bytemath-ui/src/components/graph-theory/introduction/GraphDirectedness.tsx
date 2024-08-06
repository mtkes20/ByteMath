import React, {useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape';
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
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const GraphDirectedness: React.FC = () => {
    const undirectedGraph = useRef<HTMLDivElement>(null);
    const directedGraph = useRef<HTMLDivElement>(null);
    const [selectedEdge, setSelectedEdge] = useState<string | null>(null);
    const {t} = useTranslation();

    useEffect(() => {
        if (undirectedGraph.current && directedGraph.current) {
            const undirectedCy = cytoscape({
                container: undirectedGraph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'F'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                    {data: {id: 'DF', source: 'D', target: 'F'}},
                    {data: {id: 'FA', source: 'F', target: 'A'}},
                    {data: {id: 'FB', source: 'F', target: 'B'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#c56e6e',
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
                        selector: 'edge.highlighted',
                        style: {
                            'line-color': '#ff7f50',
                            'width': 4
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
                    {data: {id: '12', source: '1', target: '2'}},
                    {data: {id: '23', source: '2', target: '3'}},
                    {data: {id: '34', source: '3', target: '4'}},
                    {data: {id: '45', source: '4', target: '5'}},
                    {data: {id: '51', source: '5', target: '1'}},
                    {data: {id: '52', source: '5', target: '2'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#cd6aaa',
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
                            'curve-style': 'bezier',
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': 'white'
                        }
                    },
                    {
                        selector: 'edge.highlighted',
                        style: {
                            'line-color': '#ff7f50',
                            'target-arrow-color': '#ff7f50',
                            'width': 4
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            undirectedCy.on('tap', 'edge', function (evt) {
                undirectedCy.edges().removeClass('highlighted');
                directedCy.edges().removeClass('highlighted');
                const edge = evt.target;
                edge.addClass('highlighted');
                setSelectedEdge(`${edge.source().id()}-${edge.target().id()} (${t('graphTheory.graphDirectedness.undirected.label')})`);
            });

            directedCy.on('tap', 'edge', function (evt) {
                undirectedCy.edges().removeClass('highlighted');
                directedCy.edges().removeClass('highlighted');
                const edge = evt.target;
                edge.addClass('highlighted');
                setSelectedEdge(`${edge.source().id()}->${edge.target().id()} (${t('graphTheory.graphDirectedness.directed.label')})`);
            });
        }
    }, [t]);

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.graphDirectedness.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.graphDirectedness.definition')}
                    <StyledList>
                        <StyledListItem>
                            <strong>{t('graphTheory.graphDirectedness.undirected.label')}:</strong> {t('graphTheory.graphDirectedness.undirected.description')}
                        </StyledListItem>
                        <StyledListItem>
                            <strong>{t('graphTheory.graphDirectedness.directed.label')}:</strong> {t('graphTheory.graphDirectedness.directed.description')}
                        </StyledListItem>
                    </StyledList>
                </StyledText>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={undirectedGraph}/>
                        <StyledExplanation>{t('graphTheory.graphDirectedness.undirected.label')}</StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={directedGraph}/>
                        <StyledExplanation>{t('graphTheory.graphDirectedness.directed.label')}</StyledExplanation>
                    </Grid>
                </Grid>
                <StyledExplanation>
                    {selectedEdge
                        ? t('graphTheory.graphDirectedness.selectedEdge', {edge: selectedEdge})
                        : t('graphTheory.graphDirectedness.prompt')}
                </StyledExplanation>
                <StyledInteractionPrompt>
                    {t('graphTheory.graphDirectedness.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default GraphDirectedness;
