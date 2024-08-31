import BinaryConverter from "./BinaryConverter";
import {
    CoursePageMainContainer,
    Example, StyledCard,
    StyledList,
    StyledListItem,
    StyledText, SubContent,
    Subtitle,
    Title
} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";


const Converting = () => {
    const { t } = useTranslation()

    return (
        <CoursePageMainContainer>
            <StyledCard>
                <SubContent>
                    <Title>{t('binarySystem.binaryConversion.title')}</Title>
                    <StyledText>{t('binarySystem.binaryConversion.introduction')}</StyledText>
                </SubContent>
            </StyledCard>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.binaryToDecimal.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.binaryToDecimal.description')}</StyledText>
                <Example>{t('binarySystem.binaryConversion.binaryToDecimal.example')}</Example>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.decimalToBinary.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.decimalToBinary.description')}</StyledText>
                <Example>{t('binarySystem.binaryConversion.decimalToBinary.example')}</Example>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.fractions.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.fractions.description')}</StyledText>
                <Example>{t('binarySystem.binaryConversion.fractions.example')}</Example>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.negativeNumbers.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.negativeNumbers.description')}</StyledText>
                <Example>{t('binarySystem.binaryConversion.negativeNumbers.example')}</Example>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.applications.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.applications.description')}</StyledText>
                <StyledList sx={{ listStyleType: "disc"}}>
                    {(t('binarySystem.binaryConversion.applications.list', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Subtitle>{t('binarySystem.binaryConversion.advancedTopics.title')}</Subtitle>
                <StyledText>{t('binarySystem.binaryConversion.advancedTopics.description')}</StyledText>
                <StyledList sx={{ listStyleType: "disc"}}>
                    {(t('binarySystem.binaryConversion.advancedTopics.list', {returnObjects: true}) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <BinaryConverter/>
        </CoursePageMainContainer>
    )
}

export default Converting;