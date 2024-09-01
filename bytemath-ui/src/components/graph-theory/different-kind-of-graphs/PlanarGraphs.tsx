import React, {useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape';
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledSlider,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const PlanarGraphs: React.FC = () => {
    const planarGraph = useRef<HTMLDivElement>(null);
    const nonPlanarGraph = useRef<HTMLDivElement>(null);
    const [planarCy, setPlanarCy] = useState<cytoscape.Core | null>(null);
    const [nonPlanarCy, setNonPlanarCy] = useState<cytoscape.Core | null>(null);
    const [nodeCount, setNodeCount] = useState(5);
    const {t} = useTranslation();

    useEffect(() => {
        if (planarGraph.current && nonPlanarGraph.current) {
            if (!planarCy) {
                const planar = cytoscape({
                    container: planarGraph.current,
                    elements: generatePlanarGraph(nodeCount),
                    style: [
                        {
                            selector: 'node',
                            style: {
                                'background-color': '#81b7da',
                                'label': 'data(id)',
                                'color': 'white',
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
                        }
                    ],
                    layout: {name: 'circle'},
                    zoomingEnabled: false
                });
                setPlanarCy(planar);
            } else {
                updateGraph(planarCy, generatePlanarGraph(nodeCount));
            }

            if (!nonPlanarCy) {
                const nonPlanar = cytoscape({
                    container: nonPlanarGraph.current,
                    elements: generateNonPlanarGraph(nodeCount),
                    style: [
                        {
                            selector: 'node',
                            style: {
                                'background-color': '#4e8f2a',
                                'label': 'data(id)',
                                'color': 'white',
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
                        }
                    ],
                    layout: {name: 'circle'},
                    zoomingEnabled: false
                });
                setNonPlanarCy(nonPlanar);
            } else {
                updateGraph(nonPlanarCy, generateNonPlanarGraph(nodeCount));
            }
        }
    }, [nodeCount]);

    const generatePlanarGraph = (n: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: (i + 1).toString()}
        }));
        const edges = [];
        for (let i = 1; i < n; i++) {
            edges.push({
                data: {
                    id: `1-${nodes[i].data.id}`,
                    source: '1',
                    target: nodes[i].data.id
                }
            });
            if (i < n - 1) {
                edges.push({
                    data: {
                        id: `${nodes[i].data.id}-${nodes[i + 1].data.id}`,
                        source: nodes[i].data.id,
                        target: nodes[i + 1].data.id
                    }
                });
            }
        }
        return [...nodes, ...edges];
    };


    const generateNonPlanarGraph = (n: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: (i + 1).toString()}
        }));
        const edges = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                edges.push({
                    data: {
                        id: `${i + 1}-${j + 1}`,
                        source: (i + 1).toString(),
                        target: (j + 1).toString()
                    }
                });
            }
        }
        return [...nodes, ...edges];
    };


    const updateGraph = (cy: cytoscape.Core | null, elements: cytoscape.ElementDefinition[]) => {
        if (cy) {
            cy.elements().remove();
            cy.add(elements);
            cy.layout({name: 'circle'}).run();
        }
    };

    const handleNodeCountChange = (event: Event, newValue: number | number[]) => {
        setNodeCount(newValue as number);
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.differentGraphs.planarGraphs.planarTitle')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.planarGraphs.planarDescription')}
                </StyledText>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={planarGraph} style={{height: '400px'}}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.planarGraphs.planarLabel')}</StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={nonPlanarGraph} style={{height: '400px'}}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.planarGraphs.nonPlanarLabel')}</StyledExplanation>
                    </Grid>
                </Grid>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.planarGraphs.planarInteractionPrompt')}
                </StyledInteractionPrompt>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={12}>
                        <StyledSlider
                            value={nodeCount}
                            onChange={handleNodeCountChange}
                            aria-labelledby="node-count-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={3}
                            max={15}
                        />
                        <StyledText>{t('graphTheory.differentGraphs.planarGraphs.numberOfNodes')}: {nodeCount}</StyledText>
                    </Grid>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default PlanarGraphs;
