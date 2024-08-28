import React from 'react';
import {CoursePageMainContainer, StyledCard, Title} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";

import BreadthFirstSearch from "./BreadthFirstSearch";
import DepthFirstSearch from "./DepthFirstSearch";
import Quiz from "../../quiz/Quiz";

const GraphTraversals = () => {
    const {i18n} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.graphTraversals.title')}</Title>
            <BreadthFirstSearch/>
            <DepthFirstSearch/>
            {/*<DijkstrasAlgorithm />*/}

            <StyledCard>
                <Quiz identifier={"GRAPH_TRAVERSALS"}/>
            </StyledCard>
        </CoursePageMainContainer>
    );
};

export default GraphTraversals;
