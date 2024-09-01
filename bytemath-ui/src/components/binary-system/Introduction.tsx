import BinaryVisualization from "./BinaryVisualization";
import {useTranslation} from "react-i18next";
import {
    CoursePageMainContainer,
    Example,
    StyledCard,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Subtitle,
    Title
} from "../utils/StyledComponents";
import Quiz from "../quiz/Quiz";

const Introduction = () => {
    const { t } = useTranslation()

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.introduction.title')}</Title>
                    <StyledText>{t('binarySystem.introduction.welcome')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.whatIs.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.whatIs.description')}</StyledText>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.whyImportant.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.whyImportant.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.whyImportant.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.introduction.realLifeExamples.title')}</Subtitle>
                <StyledText>{t('binarySystem.introduction.realLifeExamples.description')}</StyledText>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('binarySystem.introduction.realLifeExamples.points', {returnObjects: true}) as string[]).map((point, index) => (
                        <StyledListItem key={index}>{point}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Example>{t('binarySystem.introduction.conclusion')}</Example>
            </SubContent>
            <BinaryVisualization/>
            <Quiz identifier={"BINARY_SYSTEM_INTRO"}/>
        </CoursePageMainContainer>
    )
}

export default Introduction;