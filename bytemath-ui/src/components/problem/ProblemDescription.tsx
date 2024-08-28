import {Grid} from "@mui/material";
import {StyledExplanation, StyledText, SubContent, Subtitle} from "../styles/StyledComponents";
import React from "react";
import {ProblemType} from "../../types/ProblemType";


const ProblemDescription = ({problem}: {
    problem: ProblemType
}) => {

    return (
        <Grid item xs={12} md={6}>
            <SubContent>
                <Subtitle>Description</Subtitle>
                <StyledText>{problem.description}</StyledText>

                <Subtitle>Task</Subtitle>
                <StyledText>{problem.task}</StyledText>

                <Subtitle>Input Format</Subtitle>
                <StyledText>{problem.inputFormat}</StyledText>

                <Subtitle>Output Format</Subtitle>
                <StyledText>{problem.outputFormat}</StyledText>

                <Subtitle>Example</Subtitle>
                <StyledText>{problem.example}</StyledText>

                {problem.note && (
                    <>
                        <Subtitle>Note</Subtitle>
                        <StyledExplanation>{problem.note}</StyledExplanation>
                    </>
                )}
            </SubContent>
        </Grid>
    )
}

export default ProblemDescription
