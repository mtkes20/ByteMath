import React, {useState} from 'react';
import {QuestionType, QuizType} from "../../types/QuizType";
import {SubmittedAnswer, SubmittedQuiz} from "../../types/SubmittedQuiz";
import {Button, styled, Typography} from "@mui/material";
import SingleChoice from "./SingleChoice";
import TextChoice from "./TextChoice";

interface QuizProps {
    quiz: QuizType;
    onSubmit: (submittedQuiz: SubmittedQuiz) => void;
}

const Quiz: React.FC<QuizProps> = ({quiz, onSubmit}) => {
    const [answers, setAnswers] = useState<SubmittedAnswer[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submittedQuiz: SubmittedQuiz = {
            id: quiz.id,
            answers: answers
        };
        onSubmit(submittedQuiz);
    };

    return (
        <form onSubmit={handleSubmit}>
            <MainContainer>
                <Typography variant="h4" style={{color: "white", fontFamily: "Roboto", fontWeight: "bold"}}>
                    {quiz.title}
                </Typography>
                <Questions>
                    {quiz.questions.map((question, index) => (
                        <Question>
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
                            )
                            }
                        </Question>
                    ))}
                </Questions>
                <div style={{ display: "flex" }}>
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
    // alignItems: "center"
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


const Question = styled('div')(() => ({
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


