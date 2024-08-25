import axios from "axios";
import {QuizResponse, QuizType} from "../types/QuizType";
import {SubmittedQuiz} from "../types/SubmittedQuiz";
import {GradedQuiz} from "../types/GradedQuiz";


const getQuiz = async (quizId: string, language: string, userToken?: string): Promise<QuizResponse> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/quiz/`,
        headers: headers,
    }).get(`${quizId}?language=${language}`);

    return response.data;
}

const submitQuiz = async (quizId: string, answers: SubmittedQuiz, language: string, userToken?: string): Promise<GradedQuiz> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/quiz/`,
        headers: headers
    }).post(`${quizId}/submit?language=${language}`, answers);

    return response.data;
}

const QuizApi = {
    getQuiz,
    submitQuiz
};


export default QuizApi;
