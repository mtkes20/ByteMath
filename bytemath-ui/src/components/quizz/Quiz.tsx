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

    // const handleAnswerChange = (questionId: number, answer: string | number) => {
    //     setAnswers(prev => {
    //         const existingAnswerIndex = prev.findIndex(a => a.questionId === questionId);
    //         const newAnswer: SubmittedAnswer = {
    //             questionId,
    //             ...(typeof answer === 'number' ? {selectedAnswerId: answer} : {textAnswer: answer})
    //         };
    //
    //         if (existingAnswerIndex !== -1) {
    //             const newAnswers = [...prev];
    //             newAnswers[existingAnswerIndex] = newAnswer;
    //             return newAnswers;
    //         } else {
    //             return [...prev, newAnswer];
    //         }
    //     });
    // };


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
}))

const QuestionTitle = styled(Typography)(() => ({
    color: "white",
    fontSize: "20px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    variant: "h6"
}))

const Question = styled('div')(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px"
}))

const SubmitButton = styled(Button)(() => ({
    margin: "10px",
    backgroundColor: "#800080",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "16px",
    variant: "contained"
}))


export default Quiz;


