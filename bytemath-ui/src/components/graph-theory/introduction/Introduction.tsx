import React from 'react';
import {CoursePageMainContainer, Title} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";

import GraphDefinition from "./GraphDefinition";
import GraphVerticesAndEdges from "./GraphVerticesAndEdges";
import GraphDirectedness from "./GraphDirectedness";
import GraphVertexDegree from "./GraphVertexDegree";
import GraphPathsAndCycles from "./GraphPathsAndCycles";
import Connectivity from "./GraphConnectivity";
import GraphSubgraphs from "./GraphSubgraphs";
import Quiz from "../../quiz/Quiz";

const Introduction = () => {
    const {i18n} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.introduction.title')}</Title>
            <GraphDefinition/>
            <GraphVerticesAndEdges/>
            <GraphDirectedness/>
            <GraphVertexDegree/>
            <GraphPathsAndCycles/>
            <Connectivity/>
            <GraphSubgraphs/>
            <Quiz identifier={"GRAPH_THEORY_INTRO"}/>
        </CoursePageMainContainer>
    );
};

export default Introduction;
