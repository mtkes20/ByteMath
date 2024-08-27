import axios from "axios";

const getReadPages = async (token: string): Promise<string[]> => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/pages/read`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    )

    return response.data;
}

const markPageAsRead = async (pageId: string, token: string) => {
    await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/pages/read/${pageId}`,
        {},
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
    );
}

const PageApi = {
    getReadPages,
    markPageAsRead
};

export default PageApi;