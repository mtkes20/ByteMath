import React from 'react';
import {CoursePageMainContainer, Title} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import GraphIsomorphism from "./GraphIsomorphism";
import Quiz from "../../quiz/Quiz";

const GraphTraversals = () => {
    const {i18n} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.graphAlgorithms.title')}</Title>

            <GraphIsomorphism/>

            <Quiz identifier={"GRAPH_THEORY_ALGORITHMS"}/>
        </CoursePageMainContainer>
    );
};

export default GraphTraversals;
