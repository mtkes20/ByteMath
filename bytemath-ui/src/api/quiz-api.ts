import axios from "axios";
import {QuizType} from "../types/QuizType";
import {SubmittedQuiz} from "../types/SubmittedQuiz";


const getQuiz = async (quizId: string): Promise<QuizType> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).get(`${quizId}`);

    return response.data;
}

const submitQuiz = async (quizId: string, answers: SubmittedQuiz) => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).post(`${quizId}`, answers);

    return response.data;
}

const QuizApi = {
    getQuiz,
    submitQuiz
};


export default QuizApi;