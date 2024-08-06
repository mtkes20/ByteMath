import React, {useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
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
import {useTranslation} from "react-i18next";

const GraphDefinition = () => {
    const {t} = useTranslation()
    const graph = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (graph.current) {
            cytoscape({
                container: graph.current,
                elements: [
                    {data: {id: 'A'}},
                    {data: {id: 'B'}},
                    {data: {id: 'C'}},
                    {data: {id: 'D'}},
                    {data: {id: 'E'}},
                    {data: {id: 'F'}},
                    {data: {id: 'AB', source: 'A', target: 'B'}},
                    {data: {id: 'BC', source: 'B', target: 'C'}},
                    {data: {id: 'CD', source: 'C', target: 'D'}},
                    {data: {id: 'DE', source: 'D', target: 'E'}},
                    {data: {id: 'EF', source: 'E', target: 'F'}},
                    {data: {id: 'FA', source: 'F', target: 'A'}},
                    {data: {id: 'FB', source: 'F', target: 'B'}},
                    {data: {id: 'FD', source: 'F', target: 'D'}},
                    {data: {id: 'BD', source: 'B', target: 'D'}},
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': 'cadetblue',
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
                            'width': 3,
                            'line-color': 'white',
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
            <Subtitle>{t('graphTheory.introduction.graphDefinition.title')}</Subtitle>
            <StyledCard>
                <StyledText>
                    {t('graphTheory.introduction.graphDefinition.definition')}
                    <StyledList>
                        <StyledListItem>{t('graphTheory.introduction.graphDefinition.vertices')}</StyledListItem>
                        <StyledListItem>{t('graphTheory.introduction.graphDefinition.edges')}</StyledListItem>
                    </StyledList>
                </StyledText>
                <StyledGraphContainer ref={graph}/>
                <StyledExplanation>
                    {t('graphTheory.introduction.graphDefinition.explanation')}
                </StyledExplanation>
                <StyledInteractionPrompt>
                    {t('graphTheory.introduction.graphDefinition.interactionPrompt')}
                </StyledInteractionPrompt>
            </StyledCard>
        </SubContent>
    );
};

export default GraphDefinition;
