import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    CoursePageMainContainer,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title,
} from "../styles/StyledComponents";
import ArithmeticVisualizer from "./ArithmeticVisualizer";
import BinaryExampleDisplay from "./BinaryExampleDisplay";

const Arithmetic = () => {
    const {t} = useTranslation();

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.arithmetic.title')}</Title>
                    <StyledText>{t('binarySystem.arithmetic.description')}</StyledText>
                </SubContent>
            </StyledCard>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.addition.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.addition.description')}</StyledText>
                <BinaryExampleDisplay example={t('binarySystem.arithmetic.addition.example')}/>
                <ArithmeticVisualizer operation="addition"/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.subtraction.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.subtraction.description')}</StyledText>
                <BinaryExampleDisplay example={t('binarySystem.arithmetic.subtraction.example')}/>
                <ArithmeticVisualizer operation="subtraction"/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.multiplication.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.multiplication.description')}</StyledText>
                <BinaryExampleDisplay example={t('binarySystem.arithmetic.multiplication.example')}/>
                <ArithmeticVisualizer operation="multiplication"/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.division.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.division.description')}</StyledText>
                <BinaryExampleDisplay example={t('binarySystem.arithmetic.division.example')}/>
                <ArithmeticVisualizer operation="division"/>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.twoComplement.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.twoComplement.description')}</StyledText>
                <StyledList>
                    {(t('binarySystem.arithmetic.twoComplement.steps', {returnObjects: true}) as string[]).map((step, index) => (
                        <StyledListItem key={index}>{step}</StyledListItem>
                    ))}
                </StyledList>
                <BinaryExampleDisplay example={t('binarySystem.arithmetic.twoComplement.example')}></BinaryExampleDisplay>
            </SubContent>

            <SubContent>
                <Subtitle>{t('binarySystem.arithmetic.applications.title')}</Subtitle>
                <StyledText>{t('binarySystem.arithmetic.applications.description')}</StyledText>
                <StyledList>
                    {(t('binarySystem.arithmetic.applications.examples', {returnObjects: true}) as string[]).map((example, index) => (
                        <StyledListItem key={index}>{example}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
        </CoursePageMainContainer>
    );
};

export default Arithmetic;