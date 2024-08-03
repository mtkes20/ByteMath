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

    const {t} = useTranslation();

    return (
        <CoursePageMainContainer>
            <Title>{t("introduction_to_logical_operators_title")}</Title>
            <StyledText>
                Logical operators are fundamental concepts in discrete mathematics and computer science.
                They allow us to create complex conditions, make decisions in programming, and form the basis of boolean
                algebra.
            </StyledText>
            <Subtitle>In this module, you'll explore:</Subtitle>
            <StyledList>
                <StyledListItem>Basic Logical Operators</StyledListItem>
                <StyledListItem>Advanced Logical Operators</StyledListItem>
                <StyledListItem>Truth Tables</StyledListItem>
            </StyledList>
            <StyledText>
                Understanding logical operators is crucial for several reasons:
            </StyledText>
            <StyledList>
                <StyledListItem>They are essential in programming for creating conditional statements and controlling
                    program
                    flow.</StyledListItem>
                <StyledListItem>They form the basis of digital circuit design in computer hardware.</StyledListItem>
                <StyledListItem>They are used extensively in database systems for constructing complex
                    queries.</StyledListItem>
                <StyledListItem>They play a key role in artificial intelligence, particularly in decision-making
                    algorithms.</StyledListItem>
            </StyledList>
            <StyledText>
                As you progress through this module, you'll gain a solid foundation in logical operators,
                preparing you for more advanced topics in computer science and discrete mathematics.
            </StyledText>
        </CoursePageMainContainer>
    );
}

export default Introduction;
