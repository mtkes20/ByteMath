import axios from "axios";

const getProfilePicture = async (userToken?: string): Promise<Blob> => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const response = await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
        headers: headers,
        responseType: 'blob'
    }).get('profile-picture');

    return response.data;
};

const uploadProfilePicture = async (file: File, userToken?: string): Promise<void> => {
    const headers: Record<string, string> = {
        'Content-Type': 'multipart/form-data',
    };

    if (userToken) {
        headers['Authorization'] = `Bearer ${userToken}`;
    }

    const formData = new FormData();
    formData.append('file', file);

    await axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
        headers: headers,
    }).post('profile-picture', formData);
};

const ProfilePictureApi = {
    getProfilePicture,
    uploadProfilePicture
};

export default ProfilePictureApi;
