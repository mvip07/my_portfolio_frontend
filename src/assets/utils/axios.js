import axios from 'axios';
import { host } from './api';

const containsFiles = (data) => {
    if (typeof data !== 'object' || data === null) return false;

    for (let key in data) {
        if (data[key] instanceof File || data[key] instanceof Blob) {
            return true;
        }
    }
    return false;
};


const defaultOptions = {
    baseURL: host,
};

const API = axios.create(defaultOptions);

API.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('portfolio'))?.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    if (containsFiles(config.data)) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

API.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default API;