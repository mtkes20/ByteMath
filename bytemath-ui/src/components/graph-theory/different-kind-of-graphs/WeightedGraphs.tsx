import React from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer, StyledCard, Title} from '../../styles/StyledComponents';

const WeightedGraphs = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{t('graphTheory.differentGraphs.weightedGraphs.title')}</Title>
            <StyledCard>

            </StyledCard>
        </CoursePageMainContainer>
    );
};

export default WeightedGraphs;
