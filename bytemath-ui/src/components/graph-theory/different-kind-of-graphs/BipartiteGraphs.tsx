import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {LayoutOptions} from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledList,
    StyledListItem,
    StyledSlider,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";

const BipartiteGraphs: React.FC = () => {
    const bipartiteGraph = useRef<HTMLDivElement>(null);
    const nonBipartiteGraph = useRef<HTMLDivElement>(null);
    const [bipartiteCy, setBipartiteCy] = useState<cytoscape.Core | null>(null);
    const [nonBipartiteCy, setNonBipartiteCy] = useState<cytoscape.Core | null>(null);
    const [nodeCount, setNodeCount] = useState(6);
    const {t} = useTranslation();

    const bipartiteLayout: LayoutOptions = {
        name: 'grid',
        rows: 2,
        cols: nodeCount / 2
    };

    useEffect(() => {
        if (bipartiteGraph.current && nonBipartiteGraph.current) {
            if (!bipartiteCy) {
                const bipartite = cytoscape({
                    container: bipartiteGraph.current,
                    elements: generateBipartiteGraph(nodeCount),
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
                            selector: 'node[setId = "0"]',
                            style: {
                                'background-color': '#54a627',
                            }
                        },
                        {
                            selector: 'node[setId = "1"]',
                            style: {
                                'background-color': '#e4440c',
                            }
                        },
                        {
                            selector: 'edge',
                            style: {
                                'width': 3,
                                'line-color': '#ffffff',
                                'curve-style': 'bezier'
                            }
                        }
                    ],
                    layout: bipartiteLayout,
                    zoomingEnabled: false
                });
                setBipartiteCy(bipartite);
            } else {
                updateGraph(bipartiteCy, generateBipartiteGraph(nodeCount), bipartiteLayout);
            }

            if (!nonBipartiteCy) {
                const nonBipartite = cytoscape({
                    container: nonBipartiteGraph.current,
                    elements: generateNonBipartiteGraph(nodeCount),
                    style: [
                        {
                            selector: 'node',
                            style: {
                                'background-color': '#81b7da',
                                'label': 'data(id)',
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
                setNonBipartiteCy(nonBipartite);
            } else {
                updateGraph(nonBipartiteCy, generateNonBipartiteGraph(nodeCount), {name: 'circle'});
            }
        }
    }, [nodeCount]);

    const generateEdge = (sourceId: string, targetId: string) => {
        if (Math.random() > 0.5) {
            return {
                data: {
                    id: `${sourceId}${targetId}`,
                    source: sourceId,
                    target: targetId
                }
            };
        } else {
            return null;
        }
    };

    const generateBipartiteGraph = (n: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: (i + 1).toString(), setId: (i < n / 2 ? "0" : "1")}
        }));

        const edges = [];
        for (let i = 0; i < n / 2; i++) {
            for (let j = n / 2; j < n; j++) {
                const edge = generateEdge((i + 1).toString(), (j + 1).toString());
                if (edge) {
                    edges.push(edge);
                }
            }
        }

        return [...nodes, ...edges];
    };

    const generateNonBipartiteGraph = (n: number) => {
        const nodes = Array.from({length: n}, (_, i) => ({
            data: {id: (i + 1).toString()}
        }));
        const edges = [];
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const edge = generateEdge((i + 1).toString(), (j + 1).toString());
                if (edge) {
                    edges.push(edge);
                }
            }
        }
        return [...nodes, ...edges];
    };

    const handleNodeCountChange = (event: Event, newValue: number | number[]) => {
        setNodeCount(newValue as number);
    };

    const updateGraph = (cy: cytoscape.Core | null, elements: cytoscape.ElementDefinition[], layout: LayoutOptions) => {
        if (cy) {
            cy.elements().remove();
            cy.add(elements);
            cy.layout(layout).run();
        }
    };


    return (
        <SubContent>
            <Subtitle>{t('graphTheory.differentGraphs.bipartiteGraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.bipartiteGraphs.description')}
                </StyledText>
                <StyledList>
                    {[0, 1, 2].map((i) => (
                        <StyledListItem key={i}>
                            {t(`graphTheory.differentGraphs.bipartiteGraphs.examples.${i}`)}
                        </StyledListItem>
                    ))}
                </StyledList>
                <StyledText>
                    {t('graphTheory.differentGraphs.bipartiteGraphs.applicationNote')}
                </StyledText>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={bipartiteGraph} style={{height: '400px'}}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.bipartiteGraphs.bipartiteLabel')}</StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledGraphContainer ref={nonBipartiteGraph} style={{height: '400px'}}/>
                        <StyledExplanation>{t('graphTheory.differentGraphs.bipartiteGraphs.nonBipartiteLabel')}</StyledExplanation>
                    </Grid>
                </Grid>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.bipartiteGraphs.interactionPrompt')}
                </StyledInteractionPrompt>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={12}>
                        <StyledSlider
                            value={nodeCount}
                            onChange={handleNodeCountChange}
                            aria-labelledby="node-count-slider"
                            valueLabelDisplay="auto"
                            step={2}
                            marks
                            min={4}
                            max={12}
                        />
                        <StyledText>{t('graphTheory.differentGraphs.bipartiteGraphs.numberOfNodes')}: {nodeCount}</StyledText>
                    </Grid>
                </Grid>
            </StyledCard>
        </SubContent>
    );
};

export default BipartiteGraphs;
