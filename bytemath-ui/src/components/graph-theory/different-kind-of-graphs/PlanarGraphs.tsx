import React, {useEffect, useRef, useState} from 'react';
import cytoscape from 'cytoscape';
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const PlanarGraphs: React.FC = () => {
    const planarGraph = useRef<HTMLDivElement>(null);
    const nonPlanarGraph = useRef<HTMLDivElement>(null);
    const [, setCy] = useState<cytoscape.Core | null>(null);
    const {t} = useTranslation();

    useEffect(() => {
        if (planarGraph.current && nonPlanarGraph.current) {
            cytoscape({
                container: planarGraph.current,
                elements: [
                    {data: {id: 'a'}},
                    {data: {id: 'b'}},
                    {data: {id: 'c'}},
                    {data: {id: 'd'}},
                    {data: {id: 'e'}},
                    {data: {id: 'ab', source: 'a', target: 'b'}},
                    {data: {id: 'bc', source: 'b', target: 'c'}},
                    {data: {id: 'cd', source: 'c', target: 'd'}},
                    {data: {id: 'de', source: 'd', target: 'e'}},
                    {data: {id: 'ae', source: 'a', target: 'e'}},
                    {data: {id: 'be', source: 'b', target: 'e'}},
                    {data: {id: 'ce', source: 'c', target: 'e'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#75af55',
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

            const nonPlanarCy = cytoscape({
                container: nonPlanarGraph.current,
                elements: [
                    {data: {id: 'a'}},
                    {data: {id: 'b'}},
                    {data: {id: 'c'}},
                    {data: {id: 'd'}},
                    {data: {id: 'e'}},
                    {data: {id: 'ab', source: 'a', target: 'b'}},
                    {data: {id: 'ac', source: 'a', target: 'c'}},
                    {data: {id: 'ad', source: 'a', target: 'd'}},
                    {data: {id: 'ae', source: 'a', target: 'e'}},
                    {data: {id: 'bc', source: 'b', target: 'c'}},
                    {data: {id: 'bd', source: 'b', target: 'd'}},
                    {data: {id: 'be', source: 'b', target: 'e'}},
                    {data: {id: 'cd', source: 'c', target: 'd'}},
                    {data: {id: 'ce', source: 'c', target: 'e'}},
                    {data: {id: 'de', source: 'd', target: 'e'}},
                ],
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

            setCy(nonPlanarCy);
        }
    }, [t]);

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
            </StyledCard>
        </SubContent>
    );
};

export default PlanarGraphs;
