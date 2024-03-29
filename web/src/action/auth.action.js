import { message } from 'antd'
import { axiosAdminInstance, axiosUserInstance } from '../helpers/axios'
import { AdminSignIn, UserSignIn } from './constants'
export const SignInAdmin = (data) => {
    return (dispatch) => {
        dispatch({ type: AdminSignIn.ADMIN_SIGNIN_REQUEST })
        axiosAdminInstance.post('/login', data)
            .then(res => {
                localStorage.setItem('admin-token', res.data.token)
                dispatch({ type: AdminSignIn.ADMIN_SIGNIN_SUCCESS, payload: {...res.data.admin,token:res.data.token} })
            })
            .catch(err => {
                dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}


export const AdminrenewToken = () => {
    return (dispatch) => {
        dispatch({ type: AdminSignIn.ADMIN_SIGNIN_REQUEST })
        const token = localStorage.getItem('admin-token')
        // undefined or null
        // if (token === undefined || token === null) {
        //     dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: 'Token is not valid' })
        //     localStorage.removeItem('admin-token')
        // }
        if (token) {
            axiosAdminInstance.get('/renewToken')
                .then(res => {
                    localStorage.setItem('admin-token', res.data.token)
                    dispatch({ type: AdminSignIn.ADMIN_SIGNIN_SUCCESS, payload: {...res.data.admin,token:res.data.token }})
                }
                )
                .catch(err => {
                    dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: err.response.data.error })
                    localStorage.removeItem('admin-token')
                }
                )
        } else {
            dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: 'No token' })
            localStorage.removeItem('admin-token')
        }
    }

}
export const AdminLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem('admin-token')
        dispatch({ type: AdminSignIn.ADMIN_SIGNIN_FAILURE, payload: 'Logout successfully' })
    }
}

// ........................ //
//       USER LOGIN       //
// ........................ //

export const SignIn = (data) => {
    return (dispatch) => {
        dispatch({ type: UserSignIn.USER_SIGNIN_REQUEST })
        axiosUserInstance.post('/sign-in', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                dispatch({ type: UserSignIn.USER_SIGNIN_SUCCESS, payload: {...res.data.user,token:res.data.token} })
            })
            .catch(err => {
                message.error(err.response.data.error)
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
                    dispatch({ type: UserSignIn.USER_SIGNIN_SUCCESS, payload: {...res.data.user,token:res.data.token} })
                }
                )
                .catch(err => {
                    localStorage.removeItem('token')
                    dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: err.response.data.error })
                }
                )
        } else {
            dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: 'No token' })
            localStorage.removeItem('token')
        }
    }
}




export const UserLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch({ type: UserSignIn.USER_SIGNIN_FAILURE, payload: 'Logout successfully' })
    }
}