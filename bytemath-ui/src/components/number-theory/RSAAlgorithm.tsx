import RSACalculator from "./RSACalculator";
import {useTranslation} from "react-i18next";
import React from "react";
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
import {Typography} from "@mui/material";


const RSAAlgorithm = () => {
    const {t} = useTranslation()

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Subtitle>{t('numberTheory.rsaAlgorithm.whatIsRSA.title')}</Subtitle>
                    <StyledText>{t('numberTheory.rsaAlgorithm.whatIsRSA.description1')}</StyledText>
                    <StyledText>{t('numberTheory.rsaAlgorithm.whatIsRSA.description2')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('numberTheory.rsaAlgorithm.importance.title')}</Subtitle>
                <StyledList>
                    <StyledList>
                        {(t('numberTheory.rsaAlgorithm.importance.list', {returnObjects: true}) as string[]).map((item, index) => (
                            <StyledListItem key={index}>{item}</StyledListItem>
                        ))}
                    </StyledList>
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('numberTheory.rsaAlgorithm.howItWorks.title')}</Subtitle>
                <StyledText>{t('numberTheory.rsaAlgorithm.howItWorks.keyGeneration.title')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.rsaAlgorithm.howItWorks.keyGeneration.steps', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
                <StyledText>{t('numberTheory.rsaAlgorithm.howItWorks.keyDistribution.title')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.rsaAlgorithm.howItWorks.keyDistribution.steps', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
                <StyledText>{t('numberTheory.rsaAlgorithm.howItWorks.encryption.title')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.rsaAlgorithm.howItWorks.encryption.steps', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
                <StyledText>{t('numberTheory.rsaAlgorithm.howItWorks.decryption.title')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.rsaAlgorithm.howItWorks.decryption.steps', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('numberTheory.rsaAlgorithm.mathematicalFoundation.title')}</Subtitle>
                <StyledText>{t('numberTheory.rsaAlgorithm.mathematicalFoundation.description')}</StyledText>
                <StyledText>{t('numberTheory.rsaAlgorithm.mathematicalFoundation.fact1')}</StyledText>
                <StyledText>{t('numberTheory.rsaAlgorithm.mathematicalFoundation.fact2')}</StyledText>
                <StyledText>{t('numberTheory.rsaAlgorithm.mathematicalFoundation.additional')}</StyledText>
            </SubContent>
            <SubContent>
                <Subtitle>{t('numberTheory.rsaAlgorithm.securityConsiderations.title')}</Subtitle>
                <StyledList>
                    {(t('numberTheory.rsaAlgorithm.securityConsiderations.list', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <Example>
                <SubContent>
                    <Typography>{t('numberTheory.rsaAlgorithm.practicalExample.title')}</Typography>
                    <Typography>{t('numberTheory.rsaAlgorithm.practicalExample.description')}</Typography>
                    <StyledList style={{
                        color: "lightblue",
                    }}>
                        {(t('numberTheory.rsaAlgorithm.practicalExample.steps', {returnObjects: true}) as string[]).map((item, index) => (
                            <Typography  key={index}>{item}</Typography>
                        ))}
                    </StyledList>
                </SubContent>
            </Example>
            <RSACalculator/>
        </CoursePageMainContainer>
    )
}

export default RSAAlgorithm;