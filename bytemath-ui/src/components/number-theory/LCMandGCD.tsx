import React from 'react';
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
import LCMandGCDCalculator from "./LCMandGCDCalculator";
import {useTranslation} from "react-i18next";

const LCMandGCD = () => {
    const { t } = useTranslation()

    return (
        <CoursePageMainContainer>
            <Title>{t('numberTheory.lcmAndGcd.title')}</Title>
            <StyledCard>
                <StyledText>{t('numberTheory.lcmAndGcd.whatAre.title')}</StyledText>
                <Subtitle>{t('numberTheory.lcmAndGcd.whatAre.lcm.title')}</Subtitle>
                <StyledText>{t('numberTheory.lcmAndGcd.whatAre.lcm.description')}</StyledText>
                <Subtitle>{t('numberTheory.lcmAndGcd.whatAre.gcd.title')}</Subtitle>
                <StyledText>{t('numberTheory.lcmAndGcd.whatAre.gcd.description')}</StyledText>
            </StyledCard>
            <div>
                <Title style={{fontWeight: "normal"}}>{t('numberTheory.lcmAndGcd.importance.title')}</Title>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.lcmAndGcd.importance.list', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </div>

            <SubContent>
                <Title style={{fontWeight: "normal"}}>{t('numberTheory.lcmAndGcd.calculation.title')}</Title>
                <SubContent>
                    <Subtitle>{t('numberTheory.lcmAndGcd.calculation.gcd.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.gcd.description')}</StyledText>
                    <StyledList>
                        {(t('numberTheory.lcmAndGcd.calculation.gcd.steps', { returnObjects: true }) as string[]).map((step, index) => (
                            <StyledListItem key={index}>{step}</StyledListItem>
                        ))}
                    </StyledList>
                </SubContent>
                <SubContent>
                    <Subtitle>{t('numberTheory.lcmAndGcd.calculation.lcm.title')}</Subtitle>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.description')}</StyledText>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.formula')}</StyledText>
                    <StyledText>{t('numberTheory.lcmAndGcd.calculation.lcm.note')}</StyledText>
                </SubContent>
            </SubContent>

            <StyledCard>
                <Subtitle>{t('numberTheory.lcmAndGcd.examples.title')}</Subtitle>
                <div>
                    <Title>{t('numberTheory.lcmAndGcd.examples.gcd.title')}</Title>
                    <StyledList>
                        {(t('numberTheory.lcmAndGcd.examples.gcd.steps', { returnObjects: true }) as string[]).map((step, index) => (
                            <StyledListItem key={index}>{step}</StyledListItem>
                        ))}
                    </StyledList>
                </div>
                <div>
                    <Title>{t('numberTheory.lcmAndGcd.examples.lcm.title')}</Title>
                    <StyledList>
                        {(t('numberTheory.lcmAndGcd.examples.lcm.steps', { returnObjects: true }) as string[]).map((step, index) => (
                            <StyledListItem key={index}>{step}</StyledListItem>
                        ))}
                    </StyledList>
                </div>
            </StyledCard>
            <LCMandGCDCalculator/>
        </CoursePageMainContainer>
    );
};

export default LCMandGCD;