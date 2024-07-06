import React, { useState } from 'react';
import {QuizAnswers, SelectedAnswer} from "../../types/QuizAnswers";
import {QuestionType, QuizType} from "../../types/QuizType";
import MultipleChoice from "./MultipleChoice";
import TextChoice from "./TextChoice";
import {Button, Typography} from "@mui/material";

interface QuizProps {
    quiz: QuizType;
    onSubmit: (answers: QuizAnswers) => void;
}

const Quiz = ({ quiz, onSubmit } : QuizProps) => {
    const [answers, setAnswers] = useState<SelectedAnswer>({});

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const quizAnswers: QuizAnswers = {
            id: quiz.id,
            selectedAnswerIds: answers
        };
        onSubmit(quizAnswers);
    };

    return (
        <div style={{
            backgroundColor: "#1a1a1a"
        }}>
            <Typography style={{
                color: "white",
                fontSize: "24px",
                fontFamily: "Roboto",
                fontWeight: "bold",
                padding: "20px",
            }}>
                {quiz.title}
            </Typography>
            <form
                style={{
                    backgroundColor: "transparent"
                }}
                onSubmit={handleSubmit}>
                {quiz.questions.map((question, index) => (
                    <div key={question.id}>
                        {question.questionType === QuestionType.SINGLE_CHOICE && (
                                <MultipleChoice
                                    question={question}
                                    possibleAnswers={question.answers || []}
                                    handleAnswerChange={handleAnswerChange}
                                    answers={answers}
                                    index={index + 1}
                                />
                            )
                        }
                        {
                            question.questionType === QuestionType.TEXT && (
                                <TextChoice
                                    question={question}
                                    handleAnswerChange={handleAnswerChange}
                                    answers={answers}
                                    index={index + 1}
                                />
                            )
                        }
                    </div>
                ))}
                <div style={{
                    display: "flex",
                }}>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            margin: "10px",
                            backgroundColor: "#800080",
                            color: "white",
                            fontFamily: "Roboto",
                            fontSize: "16px",
                        }}
                    >Submit Quiz</Button>
                </div>
            </form>
        </div>
    );
};

export default Quiz;