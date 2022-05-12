import { axiosAdminInstance } from '../helpers/axios'
import { AdminSignIn } from './constants'
export const SignInAdmin = (data) => {
    return (dispatch) => {
        dispatch({ type: AdminSignIn.ADMIN_SIGNIN_REQUEST })
        axiosAdminInstance.post('/login', data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('admin-token', res.data.token)
                dispatch({ type: AdminSignIn.ADMIN_SIGNIN_SUCCESS, payload: res.data.admin })
            })
            .catch(err => {
                dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: err.response.data.error })
            })
    }
}


export const AdminrenewToken = () => {
    return (dispatch) => {
        const token = localStorage.getItem('admin-token')
        if (token) {
            axiosAdminInstance.get('/renewToken', { headers: { 'x-access-token': token } })
                .then(res => {
                    localStorage.setItem('admin-token', res.data.token)
                    dispatch({ type: AdminSignIn.ADMIN_SIGNIN_SUCCESS, payload: res.data.admin })
                }
                )
                .catch(err => {
                    dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: err.response.data.error })
                }
                )
        } else {
            dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: 'No token' })
        }
    }

}