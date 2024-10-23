import axios from 'axios';

const API_BASE_URL = 'https://phanison-social-media-rest-api.onrender.com/api'; // Update with your actual API URL

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('AuthToken'); // Retrieve token from storage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the Authorization header
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
