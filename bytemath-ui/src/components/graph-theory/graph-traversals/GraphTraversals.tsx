import React from 'react';
import {CoursePageMainContainer, Title} from "../../utils/StyledComponents";
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
            <Quiz identifier={"GRAPH_THEORY_GRAPH_TRAVERSALS"}/>
        </CoursePageMainContainer>
    );
};

export default GraphTraversals;
