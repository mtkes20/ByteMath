import axios from "axios";
import {QuizType} from "../types/QuizType";
import {SubmittedQuiz} from "../types/SubmittedQuiz";
import {GradedQuiz} from "../types/GradedQuiz";


const getQuiz = async (quizId: string, language: string): Promise<QuizType> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        },
    }).get(`${quizId}?language=${language}`);

    return response.data;
}

//TODO pass correct language
const submitQuiz = async (quizId: string, answers: SubmittedQuiz): Promise<GradedQuiz> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).post(`${quizId}/submit?language=GEO`, answers);

    return response.data;
}

const QuizApi = {
    getQuiz,
    submitQuiz
};


export default QuizApi;