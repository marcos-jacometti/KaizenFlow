import axios from "axios";

export const handleLogin = async () => {
    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/token/login`, {
            username,
            password
        });

        if (response.status === 200) {
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            window.location.href = '/home';
        } else {
            throw new Error('Login failed');
        }
    } catch (err) {
        console.error('Login error:', err);
        throw new Error('Login failed');
    }
}