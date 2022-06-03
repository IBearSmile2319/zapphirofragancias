import axios from 'axios';
// const api = `http://141.148.147.25/api`
const api = "/api"
export const axiosInstance = axios.create({
    baseURL: `${api}`,
});

export const axiosUserInstance = axios.create({
    baseURL: `${api}/user`,	
    headers: {
        'x-access-token': `Bearer ${localStorage.getItem('token')}`
    }
});

export const axiosAdminInstance = axios.create({
    baseURL: `${api}/admin`,
    headers: {
        'x-access-token': `Bearer ${localStorage.getItem('admin-token')}`
    }
});

