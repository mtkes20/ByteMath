import React from 'react';
import {CoursePageMainContainer, Title} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";
import GraphIsomorphism from "./GraphIsomorphism";
import GraphSpanningTree from "./GraphSpanningTree";
import GraphColoring from "./GraphColoring";
import Quiz from "../../quiz/Quiz";

const GraphAlgorithms = () => {
    const {i18n} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.graphAlgorithms.title')}</Title>

            <GraphIsomorphism/>
            <GraphSpanningTree/>
            <GraphColoring/>

            <Quiz identifier={"GRAPH_THEORY_ALGORITHMS"}/>
        </CoursePageMainContainer>
    );
};

export default GraphAlgorithms;
