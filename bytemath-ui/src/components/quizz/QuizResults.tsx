import React, {useTransition} from 'react';
import {GradedQuiz} from "../../types/GradedQuiz";
import {QuizType} from "../../types/QuizType";
import {styled, Typography} from "@mui/material";
import {Title} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";

interface QuizResultsProps {
    gradedQuiz: GradedQuiz;
    quiz: QuizType;
    onTryAgain: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({gradedQuiz, quiz, onTryAgain}) => {
    const { t } = useTranslation()

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            className="quiz-results"
        >
            <QuizResultsTitle>{t("quizResults")}</QuizResultsTitle>
            {gradedQuiz.results.map((result, index) => {
                const question = quiz.questions.find(q => q.id === result.questionId);
                return (
                    <QuestionResult key={result.questionId} className="question-result">
                        <Title>{`${t("question")} ${index + 1}`}</Title>
                        <QuestionText>{question?.questionText}</QuestionText>
                        <QuestionText>{`${t("yourAnswer")}:`}
                            <QuestionAnswerText
                                style={{color: result.correct ? '#2e7d32' : '#CD5C5C',}}
                            >
                                {result.userAnswer}
                            </QuestionAnswerText>
                        </QuestionText>
                        {!result.correct &&
                            <QuestionText>{`${t("correctAnswer")}:`}
                                <QuestionAnswerText
                                    style={{color: '#2e7d32'}}
                                >
                                    {result.correctAnswer}
                                </QuestionAnswerText>
                            </QuestionText>
                        }
                        <Typography
                            style={{
                                color: result.correct ? '#2e7d32' : '#CD5C5C',
                                fontWeight: 'bold'}}
                        >
                            {result.correct ? `${t("correct")}!` : t("incorrect")}
                        </Typography>
                    </QuestionResult>
                );
            })}

            <div style={{marginTop: '20px', textAlign: 'center'}}>
                <TotalScoreText>{t("totalScore")}</TotalScoreText>
                <TotalScoreText>
                    {gradedQuiz.correctAnswers} / {gradedQuiz.totalQuestions}
                </TotalScoreText>
                <TryAgainButton onClick={onTryAgain}>
                    {t("tryAgain")}
                </TryAgainButton>
            </div>
        </div>
    );
};

const QuizResultsTitle = styled(Typography)(() => ({
    color: "#FAFAFA",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "24px",
    variant: "h4",
    alignSelf: "center"
}))

const QuestionResult = styled('div')(() => ({
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '5px'
}))

const QuestionText = styled(Typography)(() => ({
    color: "#E0E0E0",
    fontFamily: "Roboto",
    fontSize: "16px",
    variant: "body1",
    display: "flex",
    flexDirection: "row",
    gap: "10px"
}))

const QuestionAnswerText = styled(Typography)(() => ({
    fontWeight: 'bold'
}))

const TotalScoreText = styled(Typography)(() => ({
    color: "#FAFAFA",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "24px",
    variant: "h4"
}))

const TryAgainButton = styled('button')(() => ({
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#FAFAFA',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}))

export default QuizResults;