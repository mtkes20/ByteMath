import {Grid} from "@mui/material";
import {StyledExplanation, StyledText, SubContent, Subtitle} from "../styles/StyledComponents";
import React from "react";
import {ProblemType} from "../../types/ProblemType";
import {useTranslation} from "react-i18next";


const ProblemDescription = ({problem}: {
    problem: ProblemType
}) => {
    const {t} = useTranslation();


    return (
        <Grid item xs={12} md={6}>
            <SubContent>
                <Subtitle>{t('problems.description')}</Subtitle>
                <StyledText>{problem.description}</StyledText>

                <Subtitle>{t('problems.task')}</Subtitle>
                <StyledText>{problem.task}</StyledText>

                <Subtitle>{t('problems.inputFormat')}</Subtitle>
                <StyledText>{problem.inputFormat}</StyledText>

                <Subtitle>{t('problems.outputFormat')}</Subtitle>
                <StyledText>{problem.outputFormat}</StyledText>

                <Subtitle>{t('problems.example')}</Subtitle>
                <StyledText>{problem.example}</StyledText>

                {problem.note && (
                    <>
                        <Subtitle>{t('problems.note')}</Subtitle>
                        <StyledExplanation>{problem.note}</StyledExplanation>
                    </>
                )}
            </SubContent>
        </Grid>
    )
}

export default ProblemDescription
