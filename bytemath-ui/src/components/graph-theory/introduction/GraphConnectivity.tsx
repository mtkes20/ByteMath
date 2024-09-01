import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from 'react-i18next';

const SimpleGraphConnectivity: React.FC = () => {
    const {t} = useTranslation();
    const connectedGraph = useRef<HTMLDivElement>(null);
    const disconnectedGraph = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (connectedGraph.current && disconnectedGraph.current) {
            cytoscape({
                container: connectedGraph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                    {data: {id: 'DA', source: 'D', target: 'A'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#34879a',
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
                            'line-color': '#ccc',
                            'curve-style': 'bezier'
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            cytoscape({
                container: disconnectedGraph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#295661',
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
                            'line-color': '#ccc',
                            'curve-style': 'bezier'
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });
        }
    }, []);

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.introduction.graphConnectivity.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.introduction.graphConnectivity.description')}
                </StyledText>
                <Grid container spacing={4} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.introduction.graphConnectivity.connectedGraph')}</StyledText>
                        <StyledGraphContainer ref={connectedGraph} style={{height: '200px'}}/>
                        <StyledExplanation>
                            {t('graphTheory.introduction.graphConnectivity.connectedExplanation')}
                        </StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.introduction.graphConnectivity.disconnectedGraph')}</StyledText>
                        <StyledGraphContainer ref={disconnectedGraph} style={{height: '200px'}}/>
                        <StyledExplanation>
                            {t('graphTheory.introduction.graphConnectivity.disconnectedExplanation')}
                        </StyledExplanation>
                    </Grid>
                </Grid>
                <StyledText style={{marginTop: '20px'}}>
                    {t('graphTheory.introduction.graphConnectivity.additionalInfo')}
                </StyledText>
            </StyledCard>
        </SubContent>
    );
};

export default SimpleGraphConnectivity;
