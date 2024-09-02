import React from "react";
import {CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from "@mui/material";
import Problem from "./Problem";
import {useProblems} from "../../hooks/useProblem";
import {useTranslation} from "react-i18next";
import {ProblemDifficulty} from "../../types/ProblemType";
import {useKeycloak} from "../../context/KeycloakProvider";
import Prompt from "../utils/Prompt";

const ProblemsPage = ({course}: { course: string }) => {
    const {i18n, t} = useTranslation();
    const {problems, selectedProblem, loading, selectProblem, refetchSelectedProblem} = useProblems(course, i18n.language);
    const {isAuthenticated} = useKeycloak();

    const handleProblemChange = (event: SelectChangeEvent<unknown>) => {
        const selectedProblemId = event.target.value as number;
        selectProblem(selectedProblemId);
    };

    const getDifficultyColor = (difficulty: ProblemDifficulty) => {
        switch (difficulty) {
            case ProblemDifficulty.EASY:
                return "green";
            case ProblemDifficulty.MEDIUM:
                return "orange";
            case ProblemDifficulty.HARD:
                return "red";
            default:
                return "white";
        }
    };

    const getDifficultyLabel = (difficulty: ProblemDifficulty) => {
        switch (difficulty) {
            case ProblemDifficulty.EASY:
                return t('easy');
            case ProblemDifficulty.MEDIUM:
                return t('medium');
            case ProblemDifficulty.HARD:
                return t('hard');
            default:
                return difficulty;
        }
    };

    return (
        !isAuthenticated ?
            <div style={{
                display: "flex",
                height: "calc(100vh - 70px)",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Prompt title={t("wantToSolveProblems")}/>
            </div> :
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px"
            }}>
                <StyledFormControl>
                    <StyledInputLabel id="problem-select-label">
                        {t('problems.selectProblem')}
                    </StyledInputLabel>
                    <StyledSelect
                        size="small"
                        labelId="problem-select-label"
                        id="problem-select"
                        value={selectedProblem?.id || ''}
                        label={t('selectProblem')}
                        onChange={handleProblemChange}
                    >
                        {problems.map((problem) => (
                            <StyledMenuItem key={problem.id} value={problem.id}>
                                <span>{problem.title}</span>
                                <StyledDifficulty color={getDifficultyColor(problem.difficulty)}>
                                    {getDifficultyLabel(problem.difficulty)}
                                </StyledDifficulty>
                            </StyledMenuItem>
                        ))}
                    </StyledSelect>
                </StyledFormControl>

                {loading ? (
                    <CircularProgress/>
                ) : (
                    selectedProblem && <Problem problem={selectedProblem} refetchProblem={refetchSelectedProblem}/>
                )}
            </div>
    );
}

const StyledFormControl = styled(FormControl)({
    width: '100%',
    maxWidth: '400px',
});

const StyledInputLabel = styled(InputLabel)(({theme}) => ({
    color: 'white !important',
    '&.Mui-focused': {
        color: 'white !important',
    },
}));

const StyledSelect = styled(Select)(({theme}) => ({
    color: 'white !important',
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '.MuiSvgIcon-root': {
        color: 'white !important',
    },
    '.MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));

const StyledMenuItem = styled(MenuItem)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&.Mui-selected': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});

const StyledDifficulty = styled('span')<{ color: string }>(({color}) => ({
    fontWeight: 'bold',
    color: color,
}));

export default ProblemsPage;
