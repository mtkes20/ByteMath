import React, {useState} from 'react';
import {QuestionType, QuizResponse} from "../../types/QuizType";
import {SubmittedAnswer, SubmittedQuiz} from "../../types/SubmittedQuiz";
import {Button, styled, Typography} from "@mui/material";
import SingleChoice from "./SingleChoice";
import TextChoice from "./TextChoice";
import {GradedQuiz} from "../../types/GradedQuiz";
import QuizResults from "./QuizResults";
import QuizApi from "../../api/quiz-api";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";
import {useTranslation} from "react-i18next";
import {useKeycloak} from "../../context/KeycloakProvider";

interface QuizProps {
    quizResponse: QuizResponse;
    identifier: string,
    refetchQuiz: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<QuizResponse | undefined, Error>>
}

const Quiz: React.FC<QuizProps> = ({
                                       quizResponse,
                                       identifier,
                                       refetchQuiz
                                   }) => {
    const [answers, setAnswers] = useState<SubmittedAnswer[]>([]);
    const [gradedQuiz, setGradedQuiz] = useState<GradedQuiz | null>(null);
    const {i18n} = useTranslation();
    const { keycloak } = useKeycloak();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submittedQuiz: SubmittedQuiz = {
            id: quizResponse.quiz.id,
            answers: answers
        };
        handleQuizSubmit(submittedQuiz);
    };

    const handleQuizSubmit = async (submittedQuiz: SubmittedQuiz) => {
        await QuizApi.submitQuiz(
            identifier,
            submittedQuiz,
            i18n.resolvedLanguage === 'en' ? "ENG" : "GEO",
            keycloak?.token
        )
            .then((gradedQuiz) => {
                setGradedQuiz(gradedQuiz);

            }).catch((error) => {
                console.error('Error grading quiz:', error);
            });
    };

    const handleTryAgain = () => {
        setGradedQuiz(null);
        refetchQuiz();
    };

    return (
        <>
            {quizResponse.graded && !!quizResponse.gradedQuiz &&
                <QuizResults
                    gradedQuiz={quizResponse.gradedQuiz}
                    quiz={quizResponse.quiz}
                    onTryAgain={handleTryAgain}
                />
            }
            {gradedQuiz &&
                <QuizResults
                    gradedQuiz={gradedQuiz}
                    quiz={quizResponse.quiz}
                    onTryAgain={handleTryAgain}
                />
            }
            {!gradedQuiz && !quizResponse.graded && !!quizResponse.quiz && (
                <form onSubmit={handleSubmit}>
                    <MainContainer>
                        <QuizTitle>
                            {quizResponse.quiz.title}
                        </QuizTitle>
                        <Questions>
                            {quizResponse.quiz.questions.map((question, index) => (
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
                        <div style={{display: "flex"}}>
                            <SubmitButton type="submit">Submit Quiz</SubmitButton>
                        </div>
                    </MainContainer>
                </form>
            )}
        </>
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
