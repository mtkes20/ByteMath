import React from 'react';
import {Button, styled, Typography} from "@mui/material";
import SingleChoice from "./SingleChoice";
import TextChoice from "./TextChoice";
import QuizResults from "./QuizResults";
import {Question, QuestionType, QuizResponse} from "../../types/QuizType";
import {useQuiz} from "../../hooks/useQuiz";
import QuizApi from "../../api/quiz-api";
import {useKeycloak} from "../../context/KeycloakProvider";

interface QuizProps {
    quizResponse: QuizResponse;
    identifier: string;
}

const Quiz: React.FC<QuizProps> = ({
                                       quizResponse: initialQuizResponse,
                                       identifier,
                                   }) => {
    const { keycloak, isAuthenticated } = useKeycloak();
    const {
        quizResponse,
        answers,
        setAnswers,
        gradedQuiz,
        submitQuiz,
        resetQuiz
    } = useQuiz(initialQuizResponse, identifier);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitQuiz();
    };

    const handleTryAgain = async () => {
        if (keycloak?.token) {
            await QuizApi.deleteQuiz(identifier, keycloak?.token!).then(() => {
                resetQuiz();
            })
        } else {
            resetQuiz();
        }
    };


    if (quizResponse.graded && quizResponse.gradedQuiz) {
        return (
            <QuizResults
                gradedQuiz={quizResponse.gradedQuiz}
                quiz={quizResponse.quiz}
                onTryAgain={handleTryAgain}
            />
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <MainContainer>
                <QuizTitle>
                    {quizResponse.quiz.title}
                </QuizTitle>
                <Questions>
                    {quizResponse.quiz.questions.map((question : Question, index : number) => (
                        <StyledQuestion key={question.id}>
                            <QuestionTitle>{`${index + 1}. ${question.questionText}`}</QuestionTitle>
                            {question.questionType === QuestionType.SINGLE_CHOICE ? (
                                <SingleChoice
                                    question={question}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                />
                            ) : (
                                <TextChoice
                                    question={question}
                                    answers={answers}
                                    setAnswers={setAnswers}
                                />
                            )}
                        </StyledQuestion>
                    ))}
                </Questions>
                <div style={{display: "flex"}}>
                    <SubmitButton type="submit">Submit Quiz</SubmitButton>
                </div>
            </MainContainer>
        </form>
    );
};

const MainContainer = styled('div')(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}))

const QuizTitle = styled(Typography)(() => ({
    color: "white",
    fontSize: "24px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    variant: "h4"
}))

const QuestionTitle = styled(Typography)(() => ({
    color: "white",
    fontSize: "20px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    variant: "h6"
}))

const Questions = styled('div')(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
}))


const StyledQuestion = styled('div')(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px"
}))

const SubmitButton = styled(Button)(() => ({
    backgroundColor: "#800080",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "16px",
    variant: "contained"
}))


export default Quiz;
