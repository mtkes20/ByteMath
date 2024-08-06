import React from 'react';
import {CoursePageMainContainer, Title} from "../../styles/StyledComponents";

import {useTranslation} from "react-i18next";
import GraphDefinition from "./GraphDefinition";
import GraphVerticesAndEdges from "./GraphVerticesAndEdges";
import GraphDirectedness from "./GraphDirectedness";
import GraphVertexDegree from "./GraphVertexDegree";
import GraphPathsAndCycles from "./GraphPathsAndCycles";
import Connectivity from "./GraphConnectivity";
import GraphSubgraphs from "./GraphSubgraphs";


const Introduction = () => {
    const {t} = useTranslation()
    return (
        <CoursePageMainContainer>
            <Title>{t('graphTheory.introduction.title')}</Title>
            <GraphDefinition/>
            <GraphVerticesAndEdges/>
            <GraphDirectedness/>
            <GraphVertexDegree/>
            <GraphPathsAndCycles/>
            <Connectivity/>
            <GraphSubgraphs/>
        </CoursePageMainContainer>
    );
};

export default Introduction;
