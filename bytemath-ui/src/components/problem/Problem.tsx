import {StyledCard, Title} from "../utils/StyledComponents";
import {Grid} from "@mui/material";
import React from "react";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";
import {ProblemType} from "../../types/ProblemType";


const Problem = ({problem, refetchProblem}: { problem: ProblemType, refetchProblem: () => Promise<void> }) => {

    return (
        <StyledCard
            style={{
                padding: 0
            }}
        >
            <Grid
                style={{
                    height: "calc(100vh - 180px)",
                    marginLeft: 0,
                    marginTop: 0
                }}
                container>
                <ProblemDescription problem={problem}/>
                <CodeEditor problem={problem} refetchProblem={refetchProblem}/>
            </Grid>
        </StyledCard>
    )
}

export default Problem
