import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import { Grid } from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import { useTranslation } from 'react-i18next';

const WeightedGraphs: React.FC = () => {
    const { t } = useTranslation();
    const weightedGraph = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (weightedGraph.current) {
            cytoscape({
                container: weightedGraph.current,
                elements: [
                    { data: { id: 'A' } },
                    { data: { id: 'B' } },
                    { data: { id: 'C' } },
                    { data: { id: 'D' } },
                    { data: { id: 'AB', source: 'A', target: 'B', weight: 5 } },
                    { data: { id: 'BC', source: 'B', target: 'C', weight: 10 } },
                    { data: { id: 'CD', source: 'C', target: 'D', weight: 3 } },
                    { data: { id: 'DA', source: 'D', target: 'A', weight: 8 } }
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#6a8f8b',
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
                            'width': 4,
                            'line-color': '#aaa',
                            'curve-style': 'bezier',
                            'label': 'data(weight)',
                            'text-rotation': 'autorotate',
                            'text-margin-y': -10,
                            'color': 'black'
                        }
                    }
                ],
                layout: { name: 'circle' },
                zoomingEnabled: false
            });
        }
    }, []);

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.weightedGraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.weightedGraphs.introduction')}
                </StyledText>
                <Grid container spacing={4} justifyContent="center" style={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <StyledText>{t('graphTheory.weightedGraphs.graphTitle')}</StyledText>
                        <StyledGraphContainer ref={weightedGraph} style={{ height: '300px' }} />
                        <StyledExplanation>
                            {t('graphTheory.weightedGraphs.explanation')}
                        </StyledExplanation>
                    </Grid>
                </Grid>
                <StyledText style={{ marginTop: '20px' }}>
                    {t('graphTheory.weightedGraphs.additionalInfo')}
                </StyledText>
            </StyledCard>
        </SubContent>
    );
};

export default WeightedGraphs;
