import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Core} from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledTermItem,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import {useTranslation} from 'react-i18next';

const GraphVerticesAndEdges: React.FC = () => {
    const undirectedGraphRef = useRef<HTMLDivElement>(null);
    const directedGraphRef = useRef<HTMLDivElement>(null);
    const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);
    const [undirectedCy, setUndirectedCy] = useState<Core | null>(null);
    const [directedCy, setDirectedCy] = useState<Core | null>(null);
    const {t} = useTranslation();

    useEffect(() => {
        if (undirectedGraphRef.current && directedGraphRef.current) {
            const undirectedCyInstance = cytoscape({
                container: undirectedGraphRef.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CA', source: 'C', target: 'A'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#b799cf',
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
                            'width': 4,
                            'line-color': 'white'
                        }
                    },
                    {
                        selector: '.highlighted',
                        style: {
                            'background-color': 'orange',
                            'line-color': 'orange',
                            'target-arrow-color': 'orange',
                            'transition-property': 'background-color, line-color, target-arrow-color',
                            'transition-duration': 500
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            const directedCyInstance = cytoscape({
                container: directedGraphRef.current,
                elements: [
                    {data: {id: 'X'}},
                    {data: {id: 'Y'}},
                    {data: {id: 'Z'}},
                    {data: {id: 'XY', source: 'X', target: 'Y'}},
                    {data: {id: 'YZ', source: 'Y', target: 'Z'}},
                    {data: {id: 'ZX', source: 'Z', target: 'X'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#61b6b6',
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
                            'width': 4,
                            'line-color': 'white',
                            'curve-style': 'bezier',
                            'target-arrow-shape': 'triangle',
                            'target-arrow-color': 'white'
                        }
                    },
                    {
                        selector: '.highlighted',
                        style: {
                            'background-color': 'orange',
                            'line-color': 'orange',
                            'target-arrow-color': 'orange',
                            'transition-property': 'background-color, line-color, target-arrow-color',
                            'transition-duration': 500
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false,
            });

            setUndirectedCy(undirectedCyInstance);
            setDirectedCy(directedCyInstance);
        }
    }, []);

    useEffect(() => {
        if (undirectedCy && directedCy) {
            undirectedCy.elements().removeClass('highlighted');
            directedCy.elements().removeClass('highlighted');

            if (highlightedTerm === 'vertices') {
                undirectedCy.nodes().addClass('highlighted');
                directedCy.nodes().addClass('highlighted');
            } else if (highlightedTerm === 'edges') {
                undirectedCy.edges().addClass('highlighted');
                directedCy.edges().addClass('highlighted');
            }
        }
    }, [highlightedTerm, undirectedCy, directedCy]);

    const handleTermSelection = (term: string) => {
        setHighlightedTerm(prev => (prev === term ? null : term));
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.verticesAndEdges.title')}</Subtitle>
            <StyledCard>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledText>
                            {t('graphTheory.verticesAndEdges.description')}
                        </StyledText>
                        <StyledTermItem
                            onClick={() => handleTermSelection('vertices')}
                            active={highlightedTerm === 'vertices'}
                        >
                            <strong>{t('graphTheory.verticesAndEdges.vertices.label')}:</strong> {t('graphTheory.verticesAndEdges.vertices.description')}
                        </StyledTermItem>
                        <StyledTermItem
                            onClick={() => handleTermSelection('edges')}
                            active={highlightedTerm === 'edges'}
                        >
                            <strong>{t('graphTheory.verticesAndEdges.edges.label')}:</strong> {t('graphTheory.verticesAndEdges.edges.description')}
                        </StyledTermItem>
                        <StyledExplanation>
                            {t('graphTheory.verticesAndEdges.explanation')}
                        </StyledExplanation>
                        <StyledInteractionPrompt>
                            {t('graphTheory.verticesAndEdges.interactionPrompt')}
                        </StyledInteractionPrompt>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <StyledGraphContainer ref={undirectedGraphRef}/>
                                <StyledExplanation>{t('graphTheory.verticesAndEdges.undirectedGraph')}</StyledExplanation>
                            </Grid>
                            <Grid item xs={6}>
                                <StyledGraphContainer ref={directedGraphRef}/>
                                <StyledExplanation>{t('graphTheory.verticesAndEdges.directedGraph')}</StyledExplanation>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default GraphVerticesAndEdges;
