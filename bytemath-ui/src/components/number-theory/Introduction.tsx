import {
    CoursePageMainContainer,
    StyledList,
    StyledListItem,
    StyledText,
    SubContent,
    Title
} from "../styles/StyledComponents";
import {useTranslation} from "react-i18next";


const Introduction = () => {
    const { t } = useTranslation()

    return (
        <CoursePageMainContainer>
            <SubContent>
                <Title>{t('numberTheory.introduction.title')}</Title>
                <StyledText>{t('numberTheory.introduction.description')}</StyledText>
            </SubContent>
            <SubContent>
                <Title>{t('numberTheory.introduction.keyConcepts.title')}</Title>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.introduction.keyConcepts.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <SubContent>
                <Title>{t('numberTheory.introduction.applications.title')}</Title>
                <StyledList sx={{listStyleType: 'disc'}}>
                    {(t('numberTheory.introduction.applications.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <StyledListItem key={index}>{item}</StyledListItem>
                    ))}
                </StyledList>
            </SubContent>
            <StyledText>{t('numberTheory.introduction.conclusion')}</StyledText>
        </CoursePageMainContainer>
    )
}



export default Introduction;