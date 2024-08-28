import React from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer, Title} from "../../styles/StyledComponents";
import ProblemsPage from "../../problem/ProblemsPage";

const GraphTheoryProblems: React.FC = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{t('graphTheory.graphProblems.title')}</Title>
            <ProblemsPage/>
        </CoursePageMainContainer>
    );
};


export default GraphTheoryProblems;
