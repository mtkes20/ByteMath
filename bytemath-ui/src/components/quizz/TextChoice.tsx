import React from "react";
import {Question} from "../../types/QuizType";
import {SubmittedAnswer} from "../../types/SubmittedQuiz";


const TextChoice = ({question, answers, setAnswers} : {
    question: Question,
    answers: SubmittedAnswer[],
    setAnswers: React.Dispatch<React.SetStateAction<SubmittedAnswer[]>>
}) => {

    const handleTextChoiceAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prev => {
            const existingAnswerIndex = prev.findIndex(a => a.questionId === questionId);
            const newAnswer: SubmittedAnswer = {
                questionId,
                textAnswer: answer
            };

            if (existingAnswerIndex !== -1) {
                const newAnswers = [...prev];
                newAnswers[existingAnswerIndex] = newAnswer;
                return newAnswers;
            } else {
                return [...prev, newAnswer];
            }
        });
    }

    return (
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
            onChange={(e) => handleTextChoiceAnswerChange(question.id, e.target.value)}
            value={answers.find(a => a.questionId === question.id)?.textAnswer || ""}
        />
    )
}

export default TextChoice;