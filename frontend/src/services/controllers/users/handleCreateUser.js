import axios from "axios";

export const handleCreateUser = async (username, email, password, profilePictureFile) => {
    try {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profilePicture', profilePictureFile);

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/createUser`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status !== 200) {
            throw new Error("Failed to create user");
        }
    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
};