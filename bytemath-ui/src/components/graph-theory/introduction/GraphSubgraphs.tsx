import React, {useEffect, useRef, useState} from 'react';
import cytoscape, {Core} from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledButton,
    StyledCard,
    StyledGraphContainer,
    StyledText,
    SubContent,
    Subtitle
} from "../../utils/StyledComponents";
import {useTranslation} from 'react-i18next';

const GraphSubgraphs: React.FC = () => {
    const {t} = useTranslation();
    const graph = useRef<HTMLDivElement>(null);
    const [cy, setCy] = useState<Core | null>(null);
    const [explanation, setExplanation] = useState<string>("");

    useEffect(() => {
        if (graph.current) {
            const cy = cytoscape({
                container: graph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'E'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                    {data: {id: 'DE', source: 'D', target: 'E'}},
                    {data: {id: 'EA', source: 'E', target: 'A'}},
                    {data: {id: 'AC', source: 'A', target: 'C'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#45B7D1',
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
                    },
                    {
                        selector: '.highlighted',
                        style: {
                            'background-color': '#ff7f50',
                            'line-color': '#ff7f50',
                        }
                    },
                    {
                        selector: '.faded',
                        style: {
                            'background-color': '#B0C4DE',
                            'line-color': '#B0C4DE',
                        }
                    }
                ],
                layout: {name: 'circle'},
                zoomingEnabled: false
            });
            setCy(cy);
        }
    }, []);

    const highlightSubgraph = (nodes: string[], edges: string[]) => {
        if (cy) {
            cy.elements().removeClass('highlighted faded');
            cy.elements().addClass('faded');
            cy.$(nodes.map(n => `#${n}`).join(', ')).removeClass('faded').addClass('highlighted');
            cy.$(edges.map(e => `#${e}`).join(', ')).removeClass('faded').addClass('highlighted');
        }
    };

    const showFullGraph = () => {
        if (cy) {
            cy.elements().removeClass('highlighted faded');
        }
        highlightSubgraph(['A', 'B', 'C', 'D', 'E'], ['AB', 'BC', 'AC', 'CD', 'DE', 'DA', 'EA']);

        setExplanation(t('graphTheory.introduction.subgraphs.fullGraphExplanation'));
    };

    const showTriangle = () => {
        highlightSubgraph(['A', 'B', 'C'], ['AB', 'BC', 'AC']);
        setExplanation(t('graphTheory.introduction.subgraphs.triangleExplanation'));
    };

    const showPath = () => {
        highlightSubgraph(['B', 'C', 'D', 'E'], ['BC', 'CD', 'DE']);
        setExplanation(t('graphTheory.introduction.subgraphs.pathExplanation'));
    };

    const resetGraph = () => {
        if (cy) {
            cy.elements().removeClass('highlighted');
            cy.elements().removeClass('faded');
            setExplanation("");
        }
    };

    return (
        <SubContent>
            <Subtitle>{t('graphTheory.introduction.subgraphs.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.introduction.subgraphs.description')}
                </StyledText>
                <StyledGraphContainer ref={graph} style={{height: '300px'}}/>
                <Grid container spacing={2} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item>
                        <StyledButton onClick={showFullGraph}>
                            {t('graphTheory.introduction.subgraphs.showFullGraph')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={showTriangle}>
                            {t('graphTheory.introduction.subgraphs.showTriangle')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={showPath}>
                            {t('graphTheory.introduction.subgraphs.showPath')}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={resetGraph}>
                            {t('graphTheory.introduction.subgraphs.resetButton')}
                        </StyledButton>
                    </Grid>
                </Grid>
                <StyledText>
                    {explanation}
                </StyledText>
            </StyledCard>
        </SubContent>
    );
};

export default GraphSubgraphs;
