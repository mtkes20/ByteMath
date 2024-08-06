import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Core} from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledButton,
    StyledCard,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Subtitle
} from "../../styles/StyledComponents";
import {useTranslation} from 'react-i18next';

const GraphPathsAndCycles: React.FC = () => {
    const {t} = useTranslation();
    const graph = useRef<HTMLDivElement>(null);
    const [cy, setCy] = useState<Core | null>(null);
    const [explanation, setExplanation] = useState<string>("");

    useEffect(() => {
        if (graph.current) {
            const cy = cytoscape({
                container: graph.current,
                elements: [
                    {data: {id: 'a'}},
                    {data: {id: 'b'}},
                    {data: {id: 'c'}},
                    {data: {id: 'd'}},
                    {data: {id: 'e'}},
                    {data: {id: 'f'}},
                    {data: {id: 'g'}},
                    {data: {id: 'ab', source: 'a', target: 'b'}},
                    {data: {id: 'bc', source: 'b', target: 'c'}},
                    {data: {id: 'cd', source: 'c', target: 'd'}},
                    {data: {id: 'ef', source: 'e', target: 'f'}},
                    {data: {id: 'fg', source: 'f', target: 'g'}},
                    {data: {id: 'ga', source: 'g', target: 'a'}},
                    {data: {id: 'fc', source: 'f', target: 'c'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#75bd4e',
                            'label': 'data(id)',
                            'color': 'white',
                            'text-valign': 'center',
                            'text-halign': 'center',
                            'width': 40,
                            'height': 40,
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 4,
                            'line-color': '#ccc',
                            'curve-style': 'bezier'
                        }
                    },
                    {
                        selector: '.highlighted',
                        style: {
                            'background-color': '#c6471a',
                            'line-color': '#a53f19',
                            'transition-property': 'background-color, line-color',
                            'transition-duration': 300
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });

            setCy(cy);
        }
    }, []);

    const highlightPath = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            const path = cy.$('#e, #f, #g, #a, #b, #c, #d, #ab, #bc, #cd, #ef, #ga, #fg');
            path.addClass('highlighted');
            setExplanation(t('graphTheory.pathsAndCycles.pathExplanation'));
        }
    };

    const highlightCycle = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            const cycle = cy.$('#a, #b, #c, #f, #g, #a, #ab, #bc, #fc, #fg, #ga');
            cycle.addClass('highlighted');
            setExplanation(t('graphTheory.pathsAndCycles.cycleExplanation'));
        }
    };

    const resetGraph = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            setExplanation("");
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.pathsAndCycles.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.pathsAndCycles.description')}
                </StyledText>
                <StyledGraphContainer ref={graph} style={{height: '300px'}}/>
                <Grid container spacing={2} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item>
                        <StyledButton onClick={highlightPath}>
                            {t('graphTheory.pathsAndCycles.showPathButton')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={highlightCycle}>
                            {t('graphTheory.pathsAndCycles.showCycleButton')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={resetGraph}>
                            {t('graphTheory.pathsAndCycles.resetButton')}
                        </StyledButton>
                    </Grid>
                </Grid>
                <StyledText>
                    {explanation}
                </StyledText>
                <StyledInteractionPrompt>
                    {t('graphTheory.pathsAndCycles.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default GraphPathsAndCycles;
