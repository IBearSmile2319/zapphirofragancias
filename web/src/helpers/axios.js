import axios from 'axios';
import store from '../store'
//export const api = `http://141.148.147.25/api`
export const api = "http://localhost:8080/api"
// export const api = process.env.API_URL;

const token = window.localStorage.getItem('token')
const tokenAdmin = window.localStorage.getItem('admin-token')

const axiosInstance = axios.create({
    baseURL: `${api}`,
});

const axiosUserInstance = axios.create({
    baseURL: `${api}/user`,
    headers: {
        'x-access-token': `Bearer ${token ? token : null}`
    }
});

const axiosAdminInstance = axios.create({
    baseURL: `${api}/admin`,
    headers: {
        'x-access-token': `Bearer ${tokenAdmin ? tokenAdmin : null}`
    }
});

axiosAdminInstance.interceptors.request.use((req) => {
        const token = store.getState().auth.admin.token
        if(token){
            req.headers['x-access-token'] = `Bearer ${token ? token : null}`
        }
        return req
    }
)

axiosUserInstance.interceptors.request.use((req) => {
        const token = store.getState().auth.user.token
        if(token){
            req.headers['x-access-token'] = `Bearer ${token ? token : null}`
        }
        return req
    }
)


export {
    axiosInstance,
    axiosUserInstance,
    axiosAdminInstance
}