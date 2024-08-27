import axios from "axios";
import {QuizResponse, QuizType} from "../types/QuizType";
import {SubmittedQuiz} from "../types/SubmittedQuiz";
import {GradedQuiz} from "../types/GradedQuiz";


const getQuiz = async (identifier: string, language: string, userToken?: string): Promise<QuizResponse> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/quiz/`,
        headers: headers,
    }).get(`${identifier}?language=${language}`);

    return response.data;
}

const submitQuiz = async (identifier: string, answers: SubmittedQuiz, language: string, userToken?: string): Promise<GradedQuiz> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/quiz/`,
        headers: headers
    }).post(`${identifier}/submit?language=${language}`, answers);

    return response.data;
}

const deleteQuiz = async (identifier: string, userToken: string): Promise<void> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
    };

    await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/quiz/`,
        headers: headers
    }).delete(identifier);
}

const QuizApi = {
    getQuiz,
    submitQuiz,
    deleteQuiz
};


export default QuizApi;
