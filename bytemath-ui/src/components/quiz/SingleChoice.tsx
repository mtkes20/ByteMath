import {Question} from "../../types/QuizType";
import {SubmittedAnswer} from "../../types/SubmittedQuiz";
import React from "react";

const SingleChoice = ({question, answers, setAnswers}:
                            {
                                question: Question,
                                answers: SubmittedAnswer[],
                                setAnswers: React.Dispatch<React.SetStateAction<SubmittedAnswer[]>>,
                            }
) => {

    const handleMultipleChoiceAnswerChange = (questionId: number, answerId: number) => {
        setAnswers(prev => {
            const existingAnswerIndex = prev.findIndex(a => a.questionId === questionId);
            const newAnswer: SubmittedAnswer = {
                questionId,
                selectedAnswerId: answerId
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
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                {
                    question.answers?.map(answer => (
                        <label
                            key={answer.id}
                            style={{
                                color: "white",
                                fontSize: "16px",
                                fontFamily: "Roboto",
                            }}
                        >
                            <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={answer.id}
                                onChange={(e) => handleMultipleChoiceAnswerChange(question.id, parseInt(e.target.value))}
                                checked={answers.find(a => a.questionId === question.id)?.selectedAnswerId === answer.id}
                            />
                            {answer.answerText}
                        </label>
                    ))
                }
        </div>
    );

}

export default SingleChoice;