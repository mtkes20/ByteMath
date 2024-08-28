import React, {ReactNode, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {CoursePageMainContainer, Title} from "../../styles/StyledComponents";
import {countEdgesProblem} from "./problems/CountEdges";
import Problem from "../../problem/Problem";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled} from '@mui/material';

const GraphTheoryProblems: React.FC = () => {
    const {i18n} = useTranslation();

    const problems = [countEdgesProblem];
    const [selectedProblem, setSelectedProblem] = useState(problems[0]);

    const handleProblemChange = (event: SelectChangeEvent<unknown>, child: ReactNode) => {
        const selectedProblemId = event.target.value as string;
        const problem = problems.find(p => p.id === selectedProblemId);
        if (problem) {
            setSelectedProblem(problem);
        }
    };

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.graphProblems.title')}</Title>

            <StyledFormControl>
                <StyledInputLabel
                    id="problem-select-label"
                    sx={{
                        color: 'white',
                        '&.Mui-disabled': {
                            color: 'white',
                            '-webkit-text-fill-color': 'white',
                            opacity: 0.7
                        }
                    }}
                >Select a Problem</StyledInputLabel>
                <StyledSelect
                    labelId="problem-select-label"
                    id="problem-select"
                    value={selectedProblem.id}
                    label="Select a Problem"
                    onChange={handleProblemChange}
                    // disabled={problems.length < 2}
                    sx={{
                        color: 'white',
                        '.MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
                        '&.Mui-disabled': {
                            color: 'white',
                            '-webkit-text-fill-color': 'white',
                            opacity: 0.7,
                            '.MuiOutlinedInput-notchedOutline': {borderColor: 'rgba(255, 255, 255, 0.3)'}
                        }
                    }}
                >
                    {problems.map((problem) => (
                        <StyledMenuItem key={problem.id} value={problem.id}>
                            {problem.title}
                        </StyledMenuItem>
                    ))}
                </StyledSelect>
            </StyledFormControl>

            <Problem problem={selectedProblem}/>
        </CoursePageMainContainer>
    );
};

const StyledFormControl = styled(FormControl)({
    width: '300px',
});

const StyledInputLabel = styled(InputLabel)(({theme}) => ({
    color: 'white !important',
    '-webkit-text-fill-color': 'white !important',
    '&.Mui-focused': {
        color: 'white !important',
        '-webkit-text-fill-color': 'white !important',
    },
    '&.Mui-disabled': {
        color: 'white !important',
        '-webkit-text-fill-color': 'white !important',
        opacity: 0.7,
    },
    '& .MuiInputLabel-root': {
        color: 'white !important',
        '-webkit-text-fill-color': 'white !important',
    },
}));

const StyledSelect = styled(Select)(({theme}) => ({
    color: 'white !important',
    '-webkit-text-fill-color': 'white !important',
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white !important',
    },
    '&.Mui-disabled': {
        color: 'white !important',
        '-webkit-text-fill-color': 'white !important',
        opacity: 0.7,
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3) !important',
    },
    '.MuiSvgIcon-root': {
        color: 'white !important',
    },
}));

const StyledMenuItem = styled(MenuItem)({
    '&.Mui-selected': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});

export default GraphTheoryProblems;
