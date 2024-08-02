import React from 'react';
import ModularArithmeticCalculator from "./ModularArithmeticCalculator";
import {useTranslation} from "react-i18next";
import {
    CoursePageMainContainer,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title
} from "../styles/StyledComponents";

const ModularArithmetic: React.FC = () => {
    const { t } = useTranslation()

    return (
        <CoursePageMainContainer>
            <Title>{t('numberTheory.modularArithmetic.title')}</Title>
            <StyledCard>
                <SubContent>
                    <Subtitle>{t('numberTheory.modularArithmetic.introduction.title')}</Subtitle>
                    <StyledText>{t('numberTheory.modularArithmetic.introduction.description')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.keyConcepts.title')}</Subtitle>
                <StyledList>
                    {(t('numberTheory.modularArithmetic.keyConcepts.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.applications.title')}</Subtitle>
                <StyledText>{t('numberTheory.modularArithmetic.applications.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    <StyledList sx={{listStyleType: 'disc'}}>
                        {(t('numberTheory.modularArithmetic.applications.list', { returnObjects: true }) as string[]).map((item, index) => (
                            <StyledListItem key={index}>{item}</StyledListItem>
                        ))}
                    </StyledList>
                </StyledList>
            </SubContent>
            <ModularArithmeticCalculator/>
        </CoursePageMainContainer>
    );
};

export default ModularArithmetic;