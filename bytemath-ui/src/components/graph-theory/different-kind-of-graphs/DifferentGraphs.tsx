import React from 'react';
import {CoursePageMainContainer, StyledCard, Title} from "../../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";
import QuizApi from "../../../api/quiz-api";
import {QuizType} from "../../../types/QuizType";
import Quiz from "../../quizz/Quiz";
import WeightedGraphs from "./WeightedGraphs";
import PlanarGraphs from "./PlanarGraphs";

const DifferentGraphs = () => {
    const {i18n} = useTranslation();

    const fetchQuiz = async (identifier: string) => {
        return await QuizApi.getQuiz(identifier, i18n.resolvedLanguage === 'en' ? "ENG" : "GEO");
    }

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
        refetch: refetchQuiz
    } = useQuery<QuizType | undefined>({
        queryKey: ["quiz", "DIFFERENT_GRAPHS"],
        queryFn: () => fetchQuiz("DIFFERENT_GRAPHS")
    });

    return (
        <CoursePageMainContainer>
            <Title>{i18n.t('graphTheory.differentGraphs.title')}</Title>
            {/*<WeightedGraphs/>*/}
            <PlanarGraphs/>
            {/*<BipartiteGraphs />*/}
            {/*<RegularGraphs />*/}
            {/*<CompleteGraphs />*/}
            {/*<TreeGraphs />*/}

            <StyledCard>
                {!!quizData && !isQuizLoading && !quizError && (
                    <Quiz
                        refetchQuiz={refetchQuiz}
                        quizz={quizData}
                        identifier={"DIFFERENT_GRAPHS"}
                    />
                )}
                {isQuizLoading && <p>Loading quiz...</p>}
                {quizError && <p>Error loading quiz.</p>}
            </StyledCard>
        </CoursePageMainContainer>
    );
};

export default DifferentGraphs;
