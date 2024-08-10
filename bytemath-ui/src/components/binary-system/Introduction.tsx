import {styled, Typography} from "@mui/material";
import BinaryVisualization from "./BinaryVisualization";
import {QuizType} from "../../types/QuizType";
import {SubmittedQuiz} from "../../types/SubmittedQuiz";
import Quiz from "../quizz/Quiz";
import {useQuery} from "@tanstack/react-query";
import QuizApi from "../../api/quiz-api";
import {useTranslation} from "react-i18next";
import {
    CoursePageMainContainer,
    StyledList,
    StyledListItem,
    StyledText,
    Subtitle,
    Title
} from "../styles/StyledComponents";


const Introduction = () => {
    const {i18n, t} = useTranslation()

    const fetchQuiz = async () => {
        return await QuizApi.getQuiz("BINARY_SYSTEM_INTRO", i18n.resolvedLanguage == 'en' ? "ENG" : "GEO")
    }

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
        refetch: refetchQuiz
    } = useQuery<QuizType | undefined>({
        queryKey: ["quiz"],
        queryFn: fetchQuiz
    })


    return (
        <CoursePageMainContainer>
            <Title>{t('binarySystem.title')}</Title>
            <StyledText>{t('binarySystem.introduction')}</StyledText>

            <Subtitle>{t('binarySystem.fundamentals.title')}</Subtitle>
            <StyledText>{t('binarySystem.fundamentals.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.fundamentals.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.whyBinary.title')}</Subtitle>
            <StyledText>{t('binarySystem.whyBinary.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.whyBinary.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.binaryNumbers.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryNumbers.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.binaryNumbers.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.binaryOperations.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryOperations.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.binaryOperations.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.applications.title')}</Subtitle>
            <StyledText>{t('binarySystem.applications.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.applications.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>
            <BinaryVisualization/>
            {!!quizData &&
                <Quiz
                    refetchQuiz={refetchQuiz}
                    quizz={quizData}
                    identifier={"BINARY_SYSTEM_INTRO"}
                />
            }
        </CoursePageMainContainer>
    )
}

export default Introduction;