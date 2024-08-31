import BinaryVisualization from "./BinaryVisualization";
import {useTranslation} from "react-i18next";
import {
    CoursePageMainContainer, StyledCard,
    StyledList,
    StyledListItem,
    StyledText, SubContent,
    Subtitle,
    Title
} from "../styles/StyledComponents";
import {useKeycloak} from "../../context/KeycloakProvider";
import Quiz from "../quiz/Quiz";


const Introduction = () => {
    const { t} = useTranslation()

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.introduction.title')}</Title>
                    <StyledText>{t('binarySystem.introduction.introduction')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.fundamentals.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.fundamentals.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.fundamentals.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.whyBinary.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.whyBinary.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.whyBinary.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.binaryNumbers.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.binaryNumbers.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.binaryNumbers.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.binaryOperations.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.binaryOperations.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.binaryOperations.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.applications.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.applications.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.applications.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <BinaryVisualization/>
            <Quiz identifier={"BINARY_SYSTEM_INTRO"}/>
        </CoursePageMainContainer>
    )
}

export default Introduction;