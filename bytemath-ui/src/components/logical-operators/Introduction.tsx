import { useTranslation } from "react-i18next";
import {
    CoursePageMainContainer,
    StyledList,
    StyledListItem,
    StyledText,
    Subtitle,
    Title
} from "../styles/StyledComponents";
import Quiz from "../quizz/Quiz";
import QuizApi from "../../api/quiz-api";
import { useQuery } from "@tanstack/react-query";
import { QuizResponse } from "../../types/QuizType";
import { SubmittedQuiz } from "../../types/SubmittedQuiz";

const Introduction = () => {
    const { t, i18n } = useTranslation();

    const fetchQuiz = async () => {
        return await QuizApi.getQuiz("LOGICAL_OPERANDS_INTRO", i18n.resolvedLanguage === 'en' ? "ENG" : "GEO");
    };

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
        refetch: refetchQuiz
    } = useQuery<QuizResponse | undefined>({
        queryKey: ["quiz"],
        queryFn: fetchQuiz
    });

    // TODO: add submit handler
    const handleQuizSubmit = (answers: SubmittedQuiz) => {
        // Send answers to the backend
        console.log(answers);
    };

    return (
        <CoursePageMainContainer>
            <Title>{t('logicalOperands.introduction.title')}</Title>
            <StyledText>
                {t('logicalOperands.introduction.description')}
            </StyledText>
            <Subtitle>{t('logicalOperands.introduction.moduleExploration.header')}</Subtitle>
            <StyledList>
                <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.0')}</StyledListItem>
                <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.1')}</StyledListItem>
                <StyledListItem>{t('logicalOperands.introduction.moduleExploration.items.2')}</StyledListItem>
            </StyledList>
            <StyledText>
                {t('logicalOperands.introduction.understandingImportance.header')}
            </StyledText>
            <StyledList>
                <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.0')}</StyledListItem>
                <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.1')}</StyledListItem>
                <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.2')}</StyledListItem>
                <StyledListItem>{t('logicalOperands.introduction.understandingImportance.items.3')}</StyledListItem>
            </StyledList>
            <StyledText>
                {t('logicalOperands.introduction.progressNote')}
            </StyledText>
            { !!quizData && <Quiz
                quizResponse={quizData}
                identifier={"LOGICAL_OPERANDS_INTRO"}
            /> }
        </CoursePageMainContainer>
    );
}

export default Introduction;
