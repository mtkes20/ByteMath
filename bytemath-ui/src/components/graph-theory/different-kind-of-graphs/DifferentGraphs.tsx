import React from 'react';
import {CoursePageMainContainer, Title} from "../../utils/StyledComponents";
import {useTranslation} from "react-i18next";
import WeightedGraphs from "./WeightedGraphs";
import PlanarGraphs from "./PlanarGraphs";
import BipartiteGraphs from "./BipartiteGraphs";
import RegularGraphs from "./RegularGraphs";
import CompleteGraphs from "./CompleteGraphs";
import TreeGraphs from "./TreeGraphs";
import Quiz from "../../quiz/Quiz";

const DifferentGraphs = () => {
    const {i18n} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.differentGraphs.title')}</Title>
            <WeightedGraphs/>
            <PlanarGraphs/>
            <BipartiteGraphs/>
            <RegularGraphs/>
            <CompleteGraphs/>
            <TreeGraphs/>
            <Quiz identifier={"GRAPH_THEORY_DIFFERENT_GRAPHS"}/>
        </CoursePageMainContainer>
    );
};

export default DifferentGraphs;
