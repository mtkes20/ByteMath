import axios from "axios";
import {ProblemSummaryType, ProblemType} from "../types/ProblemType";

const getProblemsByCourse = async (courseIdentifier: string, language: string = "ENG", token: string): Promise<ProblemSummaryType[]> => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/problems/course/${courseIdentifier}`,
        {
            params: {language},
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );

    return response.data;
};

const getProblemById = async (id: number, token: string): Promise<ProblemType> => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/problems/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );

    return response.data;
};

const ProblemApi = {
    getProblemsByCourse,
    getProblemById
};

export default ProblemApi;
