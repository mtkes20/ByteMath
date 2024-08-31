import React from 'react';
import {
    CoursePageMainContainer, Example,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title
} from "../styles/StyledComponents";
import LCMandGCDCalculator from "./LCMandGCDCalculator";
import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";

const LCMandGCD = () => {
    const {t} = useTranslation()

    return (
        <CoursePageMainContainer>
            <Title>{t('numberTheory.lcmAndGcd.title')}</Title>
            <StyledCard>
                <SubContent>
                    <StyledText>{t('numberTheory.lcmAndGcd.whatAre.title')}</StyledText>
                    <Subtitle>{t('numberTheory.lcmAndGcd.whatAre.lcm.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.whatAre.lcm.description')}</StyledText>
                    <Subtitle>{t('numberTheory.lcmAndGcd.whatAre.gcd.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.whatAre.gcd.description')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <StyledCard>
                    <Title style={{fontWeight: "normal"}}>{t('numberTheory.lcmAndGcd.importance.title')}</Title>
                    <StyledList sx={{listStyleType: 'disc'}}>
                        {(t('numberTheory.lcmAndGcd.importance.list', {returnObjects: true}) as string[]).map((item, index) => (
                            <StyledListItem key={index}>{item}</StyledListItem>
                        ))}
                    </StyledList>
                </StyledCard>
            </SubContent>

            <SubContent>
                <Title style={{fontWeight: "normal"}}>{t('numberTheory.lcmAndGcd.calculation.title')}</Title>
                <SubContent>
                    <Subtitle>{t('numberTheory.lcmAndGcd.calculation.gcd.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.gcd.description')}</StyledText>
                    <StyledList>
                        {(t('numberTheory.lcmAndGcd.calculation.gcd.steps', {returnObjects: true}) as string[]).map((step, index) => (
                            <StyledListItem key={index}>{step}</StyledListItem>
                        ))}
                    </StyledList>
                    <Example>
                        <Typography>{t('numberTheory.lcmAndGcd.examples.gcd.title')}</Typography>
                        {(t('numberTheory.lcmAndGcd.examples.gcd.steps', {returnObjects: true}) as string[]).map((step, index) => (
                            <Typography style={{
                                padding: "10px 0"
                            }} key={index}>{step}</Typography>
                        ))}
                    </Example>
                </SubContent>
                <SubContent>
                    <Subtitle>{t('numberTheory.lcmAndGcd.calculation.lcm.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.description')}</StyledText>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.formula')}</StyledText>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.note')}</StyledText>
                    <Example>
                        <Typography>{t('numberTheory.lcmAndGcd.examples.lcm.title')}</Typography>
                        {(t('numberTheory.lcmAndGcd.examples.lcm.steps', {returnObjects: true}) as string[]).map((step, index) => (
                            <Typography style={{
                                padding: "10px 0"
                            }} key={index}>{step}</Typography>
                        ))}
                    </Example>
                </SubContent>
            </SubContent>
            <LCMandGCDCalculator/>
        </CoursePageMainContainer>
    );
};

export default LCMandGCD;