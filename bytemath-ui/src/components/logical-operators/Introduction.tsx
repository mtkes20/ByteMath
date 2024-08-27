import {useTranslation} from "react-i18next";
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
import {useQuery} from "@tanstack/react-query";
import {QuizResponse} from "../../types/QuizType";
import {SubmittedQuiz} from "../../types/SubmittedQuiz";

const Introduction = () => {

    const { i18n } = useTranslation()

    const fetchQuiz = async () => {
        return await QuizApi.getQuiz("LOGICAL_OPERANDS_INTRO", i18n.resolvedLanguage == 'en' ? "ENG" : "GEO")
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

    //TODO add submit handler
    const handleQuizSubmit = (answers: SubmittedQuiz) => {
        // Send answers to the backend
        console.log(answers);
    };


    return (
        <CoursePageMainContainer>
            <Title>Introduction to Logical Operators</Title>
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
            { !!quizData && <Quiz
                quizResponse={quizData}
                identifier={"LOGICAL_OPERANDS_INTRO"}
            /> }
        </CoursePageMainContainer>
    );
}

export default Introduction;
