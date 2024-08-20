import BinaryCalculator from "./BinaryCalculator";
import {
        CoursePageMainContainer,
        Example,
        StyledList,
        StyledListItem,
        StyledText,
        Subtitle,
        Title
} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";
import BinaryTable from "./quizz/BinaryTable";


const Arithmetic = () => {
    const { t } = useTranslation()

    //TODO examples require alignment or another component
    return (
        <CoursePageMainContainer>
            <Title>{t('binarySystem.binaryArithmetic.title')}</Title>
            <StyledText>{t('binarySystem.binaryArithmetic.introduction')}</StyledText>

            <Subtitle>{t('binarySystem.binaryArithmetic.addition.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.addition.description')}</StyledText>
            <BinaryTable operation="addition"/>
            <Example>{t('binarySystem.binaryArithmetic.addition.example')}</Example>

            <Subtitle>{t('binarySystem.binaryArithmetic.subtraction.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.subtraction.description')}</StyledText>
            <BinaryTable operation="subtraction"/>
            <Example>{t('binarySystem.binaryArithmetic.subtraction.example')}</Example>

            <Subtitle>{t('binarySystem.binaryArithmetic.multiplication.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.multiplication.description')}</StyledText>
            <BinaryTable operation="multiplication"/>
            <Example>{t('binarySystem.binaryArithmetic.multiplication.example')}</Example>

            <Subtitle>{t('binarySystem.binaryArithmetic.division.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.division.description')}</StyledText>
            <Example>{t('binarySystem.binaryArithmetic.division.example')}</Example>

            <Subtitle>{t('binarySystem.binaryArithmetic.advancedTopics.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.advancedTopics.description')}</StyledText>
            <StyledList sx={{ listStyleType: "disc" }}>
                {(t('binarySystem.binaryArithmetic.advancedTopics.list', {returnObjects: true}) as string[]).map((item, index) => (
                    <StyledListItem key={index}>{item}</StyledListItem>
                ))}
            </StyledList>

            <Subtitle>{t('binarySystem.binaryArithmetic.applications.title')}</Subtitle>
            <StyledText>{t('binarySystem.binaryArithmetic.applications.description')}</StyledText>
            <StyledList sx={{ listStyleType: "disc"}}>
                {(t('binarySystem.binaryArithmetic.applications.list', {returnObjects: true}) as string[]).map((item, index) => (
                    <StyledListItem key={index}>{item}</StyledListItem>
                ))}
            </StyledList>
            <BinaryCalculator/>
        </CoursePageMainContainer>
    )
}

export default Arithmetic;