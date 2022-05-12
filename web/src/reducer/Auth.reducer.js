import { AdminSignIn } from '../action/constants'

const initialState = {
    user: {
        logged: false,
        error: null,
    },
    admin: {
        logged: false,
        error: null,
    },
    loading: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // User Login

        // admin login
        case AdminSignIn.ADMIN_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case AdminSignIn.ADMIN_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                admin: {
                    ...action.payload,
                    logged: true,
                    error: null,
                }
            }
        case AdminSignIn.ADMIN_SIGNIN_FAILURE:
            return {
                ...state,
                loading: false,
                admin: {
                    logged: false,
                    error: action.payload,
                }
            }
        default:
            return state
    }
}


