import {styled, Typography} from "@mui/material";
import BinaryVisualization from "./BinaryVisualization";
import {QuizType} from "../../types/QuizType";
import {SubmittedQuiz} from "../../types/SubmittedQuiz";
import Quiz from "../quizz/Quiz";
import {useQuery} from "@tanstack/react-query";
import QuizApi from "../../api/quiz-api";
import {useTranslation} from "react-i18next";
import {CoursePageMainContainer} from "../styles/StyledComponents";


const Introduction = () => {
    const { i18n } = useTranslation()

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

    //TODO add submit handler
    const handleQuizSubmit = (answers: SubmittedQuiz) => {
        // Send answers to the backend
        console.log(answers);
    };


    return (
        <CoursePageMainContainer>
            <Title>Understanding the Binary System</Title>
            <Text>The binary system, also known as the base-2 numeral system, is fundamental to computer science and
                digital electronics.
                Unlike the decimal system, which is based on ten digits (0 through 9),
                the binary system uses only two digits: 0 and 1. These digits are known as bits (binary digits).</Text>
            <Title>Why Binary?</Title>
            <Text>Computers operate using electrical signals, which have two states: on and off. These states are
                naturally represented by the binary system. A '1' represents the 'on' state, and a '0' represents the
                'off' state. This simplicity makes binary the perfect language for computers.</Text>
            <Title>Binary Numbers</Title>
            <Text>A binary number is a number expressed in the base-2 numeral system. For example, the binary number
                1011 represents the decimal number 11. Each digit in a binary number is a bit, and each bit represents
                an increasing power of 2, starting from the rightmost bit.</Text>
            <div style={{
                padding: "60px"
            }}>
                <BinaryVisualization/>
            </div>
            {/*<Outlet/>*/}
            { !!quizData && <Quiz
                refetchQuiz={refetchQuiz}
                quizz={quizData}
                //TODO change
                identifier={"BINARY_SYSTEM_INTRO"}
            /> }
        </CoursePageMainContainer>
    )
}

const Title = styled(Typography)(() => ({
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Roboto",
    variant: "h1"
}))

const Text = styled(Typography)(() => ({
    color: "white",
    fontSize: "1rem",
    fontFamily: "Roboto",
}))

export default Introduction;