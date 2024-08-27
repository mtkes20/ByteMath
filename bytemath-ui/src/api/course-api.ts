import axios from "axios";


const getCourseProgress = async (name: string, userToken?: string): Promise<number> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/course/`,
        headers: headers,
    }).get(`progress/${name}`);

    return response.data;
}

const CourseApi = {
    getCourseProgress
};


export default CourseApi;