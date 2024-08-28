import {StyledCard, Title} from "../styles/StyledComponents";
import {Grid} from "@mui/material";
import React from "react";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";
import {ProblemType} from "../../types/ProblemType";


const Problem = ({problem}: { problem: ProblemType }) => {

    return (
        <StyledCard>
            <Title>{problem.title}</Title>
            <Grid container spacing={3}>
                <ProblemDescription problem={problem}/>
                <CodeEditor problem={problem}/>
            </Grid>
        </StyledCard>
    )
}

export default Problem
