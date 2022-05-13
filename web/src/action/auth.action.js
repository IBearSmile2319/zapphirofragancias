import { axiosAdminInstance, axiosUserInstance } from '../helpers/axios'
import { AdminSignIn, UserSignIn } from './constants'
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
            axiosAdminInstance.get('/renewToken')
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


// user signin

export const SignIn = (data) => {
    return (dispatch) => {
        dispatch({ type: UserSignIn.USER_SIGNIN_REQUEST })
        axiosUserInstance.post('/sign-in', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch({ type: UserSignIn.USER_SIGNIN_SUCCESS, payload: res.data.user })
            })
            .catch(err => {
                dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: err.response.data.error })
            })
    }
}

export const UserrenewToken = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosUserInstance.get('/renewToken')
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type: UserSignIn.USER_SIGNIN_SUCCESS, payload: res.data.user })
                }
                )
                .catch(err => {
                    dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: err.response.data.error })
                }
                )
        } else {
            dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: 'No token' })
        }
    }
}
