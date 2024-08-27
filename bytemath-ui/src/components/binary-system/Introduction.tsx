import BinaryVisualization from "./BinaryVisualization";
import {QuizResponse} from "../../types/QuizType";
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
import {useKeycloak} from "../../context/KeycloakProvider";


const Introduction = () => {
    const {i18n, t} = useTranslation()
    const {keycloak} = useKeycloak();

    const fetchQuiz = async () => {
        return await QuizApi.getQuiz(
            "BINARY_SYSTEM_INTRO",
            i18n.resolvedLanguage == 'en' ? "ENG" : "GEO",
            keycloak?.token
        )
    }

    const {
        data: quizData,
        error: quizError,
        isLoading: isQuizLoading,
        refetch: refetchQuiz
    } = useQuery<QuizResponse | undefined>({
        queryKey: ["quiz"],
        queryFn: fetchQuiz
    })


    return (
        <CoursePageMainContainer>
            <Title>{t('binarySystem.introduction.title')}</Title>
            <StyledText>{t('binarySystem.introduction.introduction')}</StyledText>

            <Subtitle>{t('binarySystem.introduction.fundamentals.title')}</Subtitle>
            <StyledText>{t('binarySystem.introduction.fundamentals.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.introduction.fundamentals.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.introduction.whyBinary.title')}</Subtitle>
            <StyledText>{t('binarySystem.introduction.whyBinary.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.introduction.whyBinary.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.introduction.binaryNumbers.title')}</Subtitle>
            <StyledText>{t('binarySystem.introduction.binaryNumbers.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.introduction.binaryNumbers.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.introduction.binaryOperations.title')}</Subtitle>
            <StyledText>{t('binarySystem.introduction.binaryOperations.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.introduction.binaryOperations.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.introduction.applications.title')}</Subtitle>
            <StyledText>{t('binarySystem.introduction.applications.description')}</StyledText>
            <StyledList sx={{listStyleType: 'disc'}}>
                {(t('binarySystem.introduction.applications.points', {returnObjects: true}) as string[]).map((point, index) => (
                    <StyledListItem key={index}>{point}</StyledListItem>
                ))}
            </StyledList>
            <BinaryVisualization/>
            {
                !!quizData && <Quiz
                    quizResponse={quizData}
                    identifier={"BINARY_SYSTEM_INTRO"}
                />
            }
        </CoursePageMainContainer>
    )
}

export default Introduction;