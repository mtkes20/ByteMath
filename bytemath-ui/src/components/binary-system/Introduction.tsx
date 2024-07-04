import {styled, Typography} from "@mui/material";
import BinaryVisualization from "./BinaryVisualization";
import {QuestionType, TakeQuiz} from "../../types/TakeQuiz";
import {QuizAnswers} from "../../types/QuizAnswers";
import Quiz from "../quizz/Quiz";


const Introduction = () => {

    const quiz : TakeQuiz = {
        id: 123,
        title: "საცდელი ქუიზი",
        questions: [
            {
                id: 1,
                questionText: "რა არის თქვენი გენ გეგმა?",
                questionType: QuestionType.SINGLE_CHOICE,
                possibleAnswers: [
                    {
                        id: 1,
                        answerText: "თავის მოკვლა"
                    },
                    {
                        id: 2,
                        answerText: "უნივერსიტეტის დამთავრება"
                    }
                ]
            },
            {
                id: 2,
                questionText: "რა არის თქვენი ფერარი?",
                questionType: QuestionType.SINGLE_CHOICE,
                possibleAnswers: [
                    {
                        id: 1,
                        answerText: "უბერავს უკიდეგანო ქარი"
                    },
                    {
                        id: 2,
                        answerText: "არ მყავს ფერარი"
                    }
                ]
            },
            {
                id: 3,
                questionText: "რა არის თქვენი სახელი?",
                questionType: QuestionType.TEXT
            }
        ]
    }

    const handleQuizSubmit = (answers: QuizAnswers) => {
        // Send answers to the backend
        console.log(answers);
    };


    return (
        <div style={{
            height: "100%",
            width: "100%",
            padding: "50px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1a"
        }}>
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
            <Quiz quiz={quiz} onSubmit={handleQuizSubmit} />;
        </div>
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