import axios from "axios";
import {QuizType} from "../types/QuizType";
import {SubmittedQuiz} from "../types/SubmittedQuiz";
import {GradedQuiz} from "../types/GradedQuiz";


const getQuiz = async (quizId: string): Promise<QuizType> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).get(`${quizId}`);

    return response.data;
}

const submitQuiz = async (quizId: string, answers: SubmittedQuiz): Promise<GradedQuiz> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).post(`${quizId}/submit`, answers);

    return response.data;
}

const QuizApi = {
    getQuiz,
    submitQuiz
};


export default QuizApi;