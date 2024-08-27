import { useState, useEffect, useCallback } from 'react';
import { SubmittedAnswer, SubmittedQuiz } from "../types/SubmittedQuiz";
import { GradedQuiz } from "../types/GradedQuiz";
import { QuizResponse } from "../types/QuizType";
import QuizApi from "../api/quiz-api";
import { useKeycloak } from "../context/KeycloakProvider";
import { useTranslation } from "react-i18next";

export const useQuiz = (initialQuizResponse: QuizResponse, identifier: string) => {
    const [quizResponse, setQuizResponse] = useState<QuizResponse>(initialQuizResponse);
    const [answers, setAnswers] = useState<SubmittedAnswer[]>([]);
    const [gradedQuiz, setGradedQuiz] = useState<GradedQuiz | null>(quizResponse.gradedQuiz || null);
    const { keycloak } = useKeycloak();
    const { i18n } = useTranslation();

    useEffect(() => {
        const savedAnswers = sessionStorage.getItem(`quiz_${identifier}_answers`);
        if (savedAnswers) {
            setAnswers(JSON.parse(savedAnswers));
        }
    }, [identifier]);

    useEffect(() => {
        sessionStorage.setItem(`quiz_${identifier}_answers`, JSON.stringify(answers));
    }, [answers, identifier]);

    const submitQuiz = useCallback(async () => {
        const submittedQuiz: SubmittedQuiz = {
            id: quizResponse.quiz.id,
            answers: answers
        };
        try {
            const gradedQuiz = await QuizApi.submitQuiz(
                identifier,
                submittedQuiz,
                i18n.language === 'en' ? "ENG" : "GEO",
                keycloak?.token
            );
            setGradedQuiz(gradedQuiz);
            setQuizResponse(prev => ({ ...prev, graded: true, gradedQuiz }));
            return gradedQuiz;
        } catch (error) {
            console.error('Error grading quiz:', error);
            return null;
        }
    }, [quizResponse.quiz.id, answers, identifier, i18n.language, keycloak?.token]);

    const resetQuiz = useCallback(async () => {
        setAnswers([]);
        setGradedQuiz(null);
        sessionStorage.removeItem(`quiz_${identifier}_answers`);
        try {
            const newQuizResponse = await QuizApi.getQuiz(
                identifier,
                i18n.language === 'en' ? "ENG" : "GEO",
                keycloak?.token
            );
            setQuizResponse(newQuizResponse);
        } catch (error) {
            console.error('Error fetching new quiz:', error);
        }
    }, [identifier, i18n.language, keycloak?.token]);

    return {
        quizResponse,
        answers,
        setAnswers,
        gradedQuiz,
        submitQuiz,
        resetQuiz
    };
};