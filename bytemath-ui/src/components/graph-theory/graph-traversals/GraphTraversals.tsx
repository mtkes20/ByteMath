import React from 'react';
import {CoursePageMainContainer, StyledCard, Title} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";
import QuizApi from "../../../api/quiz-api";
import {QuizResponse} from "../../../types/QuizType";
import Quiz from "../../quizz/Quiz";

import BreadthFirstSearch from "./BreadthFirstSearch";
import DepthFirstSearch from "./DepthFirstSearch";

const GraphTraversals = () => {
    const {i18n} = useTranslation();

    const fetchQuiz = async (identifier: string) => {
        return await QuizApi.getQuiz(identifier, i18n.resolvedLanguage === 'en' ? "ENG" : "GEO");
    }

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
        refetch: refetchQuiz
    } = useQuery<QuizResponse | undefined>({
        queryKey: ["quiz", "GRAPH_TRAVERSALS"],
        queryFn: () => fetchQuiz("GRAPH_TRAVERSALS")
    });

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.graphTraversals.title')}</Title>
            <BreadthFirstSearch/>
            <DepthFirstSearch/>
            {/*<DijkstrasAlgorithm />*/}

            <StyledCard>
                {!!quizData && !isQuizLoading && !quizError && (
                    <Quiz
                        quizResponse={quizData}
                        identifier={"GRAPH_TRAVERSALS"}
                    />
                )}
                {isQuizLoading && <p>Loading quiz...</p>}
                {quizError && <p>Error loading quiz.</p>}
            </StyledCard>
        </CoursePageMainContainer>
    );
};

export default GraphTraversals;
