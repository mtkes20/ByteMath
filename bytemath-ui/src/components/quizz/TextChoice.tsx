import {Typography} from "@mui/material";
import React from "react";
import {TakeQuizQuestion} from "../../types/TakeQuiz";
import {SelectedAnswer} from "../../types/QuizAnswers";


const TextChoice = ({question, answers, handleAnswerChange, index} : {
    question: TakeQuizQuestion,
    handleAnswerChange: (questionId: number, answer: string) => void,
    answers: SelectedAnswer,
    index: number
}) => {


    return (
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <Typography
                style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Roboto",
                    fontWeight: "bold"
                }}
                variant="h6">{`${index}. ${question.questionText}`}</Typography>
            <input
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    fontFamily: "Roboto",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "500px"
                }}
                type="text"
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                value={answers[question.id] || ''}
            />
        </div>
    )
}

export default TextChoice;