import React, {useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape';
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

const WeightedGraphs: React.FC = () => {
    const {t} = useTranslation();
    const undirectedWeightedGraph = useRef<HTMLDivElement>(null);
    const directedWeightedGraph = useRef<HTMLDivElement>(null);
    const [selectedElement, setSelectedElement] = useState<string | null>(null);
    const [elementType, setElementType] = useState<'node' | 'edge' | null>(null);
    const [weight, setWeight] = useState<number | null>(null);

    const createGraph = (container: HTMLDivElement, isDirected: boolean) => {
        return cytoscape({
            container: container,
            elements: [
                {data: {id: isDirected ? '1' : 'A'}},
                {data: {id: isDirected ? '2' : 'B'}},
                {data: {id: isDirected ? '3' : 'C'}},
                {data: {id: isDirected ? '4' : 'D'}},
                {
                    data: {
                        id: isDirected ? '12' : 'AB',
                        source: isDirected ? '1' : 'A',
                        target: isDirected ? '2' : 'B',
                        weight: 4
                    }
                },
                {
                    data: {
                        id: isDirected ? '23' : 'BC',
                        source: isDirected ? '2' : 'B',
                        target: isDirected ? '3' : 'C',
                        weight: 2
                    }
                },
                {
                    data: {
                        id: isDirected ? '34' : 'CD',
                        source: isDirected ? '3' : 'C',
                        target: isDirected ? '4' : 'D',
                        weight: 3
                    }
                },
                {
                    data: {
                        id: isDirected ? '41' : 'DA',
                        source: isDirected ? '4' : 'D',
                        target: isDirected ? '1' : 'A',
                        weight: 1
                    }
                },
                {
                    data: {
                        id: isDirected ? '13' : 'AC',
                        source: isDirected ? '1' : 'A',
                        target: isDirected ? '3' : 'C',
                        weight: 5
                    }
                },
            ],
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': isDirected ? '#61b6b6' : '#3694d8',
                        'label': 'data(id)',
                        'color': 'white',
                        'text-valign': 'center',
                        'width': 40,
                        'height': 40,
                        'transition-property': 'background-color, border-color, border-width',
                        'transition-duration': 300
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': 'white',
                        'curve-style': 'bezier',
                        'target-arrow-shape': isDirected ? 'triangle' : 'none',
                        'target-arrow-color': 'white',
                        'label': 'data(weight)',
                        'color': 'white',
                        'text-background-color': 'transparent',
                        'text-background-opacity': 1,
                        'text-background-padding': '2px',
                        'transition-property': 'line-color, target-arrow-color, text-background-color',
                        'transition-duration': 300
                    }
                },
                {
                    selector: '.selected',
                    style: {
                        'background-color': '#78347e',
                        'line-color': '#78347e',
                        'target-arrow-color': '#78347e',
                        'border-width': 2,
                        'border-color': '#78347e',
                    }
                }
            ],
            layout: {name: 'circle'},
            zoomingEnabled: false
        });
    };

    useEffect(() => {
        if (undirectedWeightedGraph.current && directedWeightedGraph.current) {
            const undirectedCy = createGraph(undirectedWeightedGraph.current, false);
            const directedCy = createGraph(directedWeightedGraph.current, true);

            const handleElementTap = (evt: cytoscape.EventObject) => {
                const element = evt.target;
                undirectedCy.elements().removeClass('selected');
                directedCy.elements().removeClass('selected');
                element.addClass('selected');
                setSelectedElement(element.id());
                setElementType(element.isNode() ? 'node' : 'edge');
                setWeight(element.isEdge() ? element.data('weight') : null);
            };

            undirectedCy.on('tap', 'node, edge', handleElementTap);
            directedCy.on('tap', 'node, edge', handleElementTap);
        }
    }, []);

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.differentGraphs.weightedGraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.weightedGraphs.description')}
                    <StyledList>
                        <StyledListItem>{t('graphTheory.differentGraphs.weightedGraphs.undirectedDescription')}</StyledListItem>
                        <StyledListItem>{t('graphTheory.differentGraphs.weightedGraphs.directedDescription')}</StyledListItem>
                    </StyledList>
                </StyledText>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={undirectedWeightedGraph}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.weightedGraphs.undirectedGraph')}</StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={directedWeightedGraph}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.weightedGraphs.directedGraph')}</StyledExplanation>
                    </Grid>
                </Grid>
                <StyledExplanation>
                    {selectedElement && elementType === 'edge'
                        ? t('graphTheory.differentGraphs.weightedGraphs.edgeWeightExplanation', {
                            selectedElement,
                            weight
                        })
                        : selectedElement && elementType === 'node'
                            ? t('graphTheory.differentGraphs.weightedGraphs.nodeExplanation', {selectedElement})
                            : t('graphTheory.differentGraphs.weightedGraphs.selectElementPrompt')}
                </StyledExplanation>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.weightedGraphs.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default WeightedGraphs;
