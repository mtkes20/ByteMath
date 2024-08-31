import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    CoursePageMainContainer,
    StyledCard,
    StyledText,
    SubContent,
    Subtitle,
    Title,
    Example,
    StyledList,
    StyledListItem
} from "../styles/StyledComponents";
import ModularArithmeticCalculator from "./ModularArithmeticCalculator";

const ModularArithmetic = () => {
    const { t } = useTranslation();

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('numberTheory.modularArithmetic.title')}</Title>
                    <StyledText>{t('numberTheory.modularArithmetic.description')}</StyledText>
                </SubContent>
            </StyledCard>

            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.basics.title')}</Subtitle>
                <StyledText>{t('numberTheory.modularArithmetic.basics.description')}</StyledText>
                <Example>{t('numberTheory.modularArithmetic.basics.example')}</Example>
            </SubContent>

            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.operations.title')}</Subtitle>
                <StyledText>{t('numberTheory.modularArithmetic.operations.description')}</StyledText>
                <StyledList>
                    {(t('numberTheory.modularArithmetic.operations.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
                <Example>{t('numberTheory.modularArithmetic.operations.example')}</Example>
            </SubContent>

            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.properties.title')}</Subtitle>
                <StyledText>{t('numberTheory.modularArithmetic.properties.description')}</StyledText>
                <StyledList>
                    {(t('numberTheory.modularArithmetic.properties.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>

            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.applications.title')}</Subtitle>
                <StyledText>{t('numberTheory.modularArithmetic.applications.description')}</StyledText>
                <StyledList>
                    {(t('numberTheory.modularArithmetic.applications.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>

            <SubContent>
                <Subtitle>{t('numberTheory.modularArithmetic.realLifeExamples.title')}</Subtitle>
                {(t('numberTheory.modularArithmetic.realLifeExamples.examples', { returnObjects: true }) as string[]).map((example, index) => (
                    <Example key={index}>{example}</Example>
                ))}
            </SubContent>

            <SubContent>
                <StyledText>{t('numberTheory.modularArithmetic.calculator.description')}</StyledText>
                <ModularArithmeticCalculator/>
            </SubContent>
        </CoursePageMainContainer>
    );
};

export default ModularArithmetic