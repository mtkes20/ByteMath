import React from 'react';
import {CoursePageMainContainer, StyledCard, Title} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";

import GraphDefinition from "./GraphDefinition";
import GraphVerticesAndEdges from "./GraphVerticesAndEdges";
import GraphDirectedness from "./GraphDirectedness";
import GraphVertexDegree from "./GraphVertexDegree";
import GraphPathsAndCycles from "./GraphPathsAndCycles";
import Connectivity from "./GraphConnectivity";
import GraphSubgraphs from "./GraphSubgraphs";
import QuizApi from "../../../api/quiz-api";
import {QuizResponse} from "../../../types/QuizType";
import Quiz from "../../quizz/Quiz";

const Introduction = () => {
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
        queryKey: ["quiz", "GRAPH_THEORY_INTRO"],
        queryFn: () => fetchQuiz("GRAPH_THEORY_INTRO")
    });

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.introduction.title')}</Title>
            <GraphDefinition/>
            <GraphVerticesAndEdges/>
            <GraphDirectedness/>
            <GraphVertexDegree/>
            <GraphPathsAndCycles/>
            <Connectivity/>
            <GraphSubgraphs/>
            <StyledCard>
                {!!quizData && !isQuizLoading && !quizError && (
                    <Quiz
                        refetchQuiz={refetchQuiz}
                        quizResponse={quizData}
                        identifier={"GRAPH_THEORY_INTRO"}
                    />
                )}
                {isQuizLoading && <p>Loading quiz...</p>}
                {quizError && <p>Error loading quiz.</p>}
            </StyledCard>
        </CoursePageMainContainer>
    );
};

export default Introduction;
