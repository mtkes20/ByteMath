import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import {Grid} from "@mui/material";
import {
    StyledCard,
    StyledExplanation,
    StyledGraphContainer,
    StyledInteractionPrompt,
    StyledText,
    SubContent,
    Title
} from "../../utils/StyledComponents";
import {useTranslation} from 'react-i18next';

const TreeGraphs: React.FC = () => {
    const {t} = useTranslation();
    const tree1 = useRef<HTMLDivElement>(null);
    const tree2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tree1.current && tree2.current) {
            cytoscape({
                container: tree1.current,
                elements: generateTree1(),
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#2475d5',
                            'label': 'data(id)',
                            'color': 'white',
                            'text-valign': 'center',
                        }

                    }
                ],
                layout: {
                    name: 'breadthfirst',
                    directed: true,
                    spacingFactor: 1.1,
                    roots: ['0']
                },
                zoomingEnabled: false
            });

            cytoscape({
                container: tree2.current,
                elements: generateTree2(),
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#cf4839',
                            'label': 'data(id)',
                            'color': 'white',
                            'text-valign': 'center',
                        }
                    }
                ],
                layout: {
                    name: 'breadthfirst',
                    directed: true,
                    spacingFactor: 1.1,
                    roots: ['a']
                },
                zoomingEnabled: false
            });
        }
    }, []);

    const generateTree1 = () => {
        const nodes = [
            {data: {id: '0'}},
            {data: {id: '1'}},
            {data: {id: '2'}},
            {data: {id: '3'}},
            {data: {id: '4'}},
            {data: {id: '5'}},
            {data: {id: '6'}}
        ];
        const edges = [
            {data: {id: '01', source: '0', target: '1'}},
            {data: {id: '02', source: '0', target: '2'}},
            {data: {id: '13', source: '1', target: '3'}},
            {data: {id: '14', source: '1', target: '4'}},
            {data: {id: '25', source: '2', target: '5'}},
            {data: {id: '26', source: '2', target: '6'}}
        ];
        return [...nodes, ...edges];
    };

    const generateTree2 = () => {
        const nodes = [
            {data: {id: 'a'}},
            {data: {id: 'b'}},
            {data: {id: 'c'}},
            {data: {id: 'd'}},
            {data: {id: 'e'}},
            {data: {id: 'f'}},
            {data: {id: 'g'}},
            {data: {id: 'h'}},
            {data: {id: 'i'}},
            {data: {id: 'j'}},
            {data: {id: 'k'}},
            {data: {id: 'l'}},
            {data: {id: 'm'}},
            {data: {id: 'n'}}
        ];
        const edges = [
            {data: {id: 'ab', source: 'a', target: 'b'}},
            {data: {id: 'ac', source: 'a', target: 'c'}},
            {data: {id: 'ad', source: 'a', target: 'd'}},
            {data: {id: 'ae', source: 'a', target: 'e'}},
            {data: {id: 'bf', source: 'b', target: 'f'}},
            {data: {id: 'bg', source: 'b', target: 'g'}},
            {data: {id: 'bh', source: 'b', target: 'h'}},
            {data: {id: 'ci', source: 'c', target: 'i'}},
            {data: {id: 'cj', source: 'c', target: 'j'}},
            {data: {id: 'dk', source: 'd', target: 'k'}},
            {data: {id: 'el', source: 'e', target: 'l'}},
            {data: {id: 'em', source: 'e', target: 'm'}},
            {data: {id: 'en', source: 'e', target: 'n'}}
        ];
        return [...nodes, ...edges];
    };


    return (
        <SubContent>
            <Title>{t('graphTheory.differentGraphs.trees.title')}</Title>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.differentGraphs.trees.description')}
                </StyledText>
                <Grid container spacing={4} justifyContent="center" style={{marginTop: '20px'}}>
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.differentGraphs.trees.tree1')}</StyledText>
                        <StyledGraphContainer ref={tree1} style={{height: '400px'}}/>
                        <StyledExplanation>
                            {t('graphTheory.differentGraphs.trees.tree1Explanation')}
                        </StyledExplanation>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledText>{t('graphTheory.differentGraphs.trees.tree2')}</StyledText>
                        <StyledGraphContainer ref={tree2} style={{height: '400px'}}/>
                        <StyledExplanation>
                            {t('graphTheory.differentGraphs.trees.tree2Explanation')}
                        </StyledExplanation>
                    </Grid>
                </Grid>
                <StyledInteractionPrompt>
                    {t('graphTheory.differentGraphs.trees.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default TreeGraphs;
