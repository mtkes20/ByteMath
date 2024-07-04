import {TakePossibleAnswer, TakeQuizQuestion} from "../../types/TakeQuiz";
import {Typography} from "@mui/material";
import {SelectedAnswer} from "../../types/QuizAnswers";
import React from "react";

const MultipleChoice = ({question, possibleAnswers, handleAnswerChange, answers, index} :
                            {
                                question: TakeQuizQuestion,
                                possibleAnswers: TakePossibleAnswer[],
                                handleAnswerChange: (questionId: number, answer: string) => void,
                                answers: SelectedAnswer,
                                index: number
                            }
) => {


    return (
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <Typography variant="h6" style={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Roboto",
                fontWeight: "bold"
            }}>
                {`${index}. ${question.questionText}`}
            </Typography>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                {
                    possibleAnswers.map(possibleAnswer => (
                        <label
                            style={{
                                color: "white",
                                fontSize: "16px",
                                fontFamily: "Roboto",
                            }}
                            key={possibleAnswer.id}>
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={possibleAnswer.id.toString()}
                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                                checked={answers[question.id] === possibleAnswer.id.toString()}
                            />
                            {possibleAnswer.answerText}
                        </label>
                    ))
                }
            </div>
        </div>
    );

}

export default MultipleChoice;