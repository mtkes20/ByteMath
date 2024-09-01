import axios from "axios";
import {ProblemCompletionStatsType, ProblemSummaryType, ProblemType} from "../types/ProblemType";

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

const getProblemById = async (id: number, token?: string, language: string = "ENG"): Promise<ProblemType> => {
    if (!token) {
        return {} as ProblemType;
    }
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/problems/${id}`,
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

const markProblemAsCompleted = async (id: number, token?: string): Promise<void> => {
    if (!token) {
        return;
    }
    await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/problems/${id}/complete`,
        {},
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );
};

const getProblemCompletionStats = async (token: string): Promise<ProblemCompletionStatsType> => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/problems/completion-stats`,
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
    getProblemById,
    markProblemAsCompleted,
    getProblemCompletionStats
};

export default ProblemApi;
