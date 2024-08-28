import {useTranslation} from "react-i18next";
import {
    CoursePageMainContainer,
    StyledList,
    StyledListItem,
    StyledText,
    Subtitle,
    Title
} from "../styles/StyledComponents";
import QuizApi from "../../api/quiz-api";
import {useQuery} from "@tanstack/react-query";
import {QuizResponse} from "../../types/QuizType";
import {SubmittedQuiz} from "../../types/SubmittedQuiz";
import Quiz from "../quiz/Quiz";

const Introduction = () => {
    const { t, i18n } = useTranslation();

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
            <Quiz  identifier={"LOGICAL_OPERANDS_INTRO"}/>
        </CoursePageMainContainer>
    );
}

export default Introduction;
