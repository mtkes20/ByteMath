import axios from "axios";
import {QuizType} from "../types/QuizType";


const getQuiz = async (quizId: string): Promise<QuizType> => {
    const response = await axios.create({
        baseURL: "/api/v1/quiz/",
        headers: {
            'Content-Type': 'application/json',
        }}).get(`${quizId}`);

    return response.data;
}

const QuizApi = {
    getQuiz
};


export default QuizApi;