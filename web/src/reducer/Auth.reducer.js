import { AdminSignIn, UserSignIn, UserUpdateType } from '../action/constants'

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
        // ------------ //
        // USER LOGIN //
        // ------------//
        case UserSignIn.USER_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
                user: {
                    logged: false,
                    error: null,
                }
            }
        case UserSignIn.USER_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    ...action.payload,
                    logged: true,
                    error: null,
                }
            }
        case UserSignIn.USER_SIGNIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: {
                    logged: false,
                    error: action.payload,
                }
            }
        // ------------ //
        // USER UPDATE //
        // ------------//
        case UserUpdateType.USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                user: {
                    ...state.user,
                    error: null,
                }
            }
        case UserUpdateType.USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    ...action.payload,
                    logged: true,
                    error: null,
                }
            }
        case UserUpdateType.USER_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    error: action.payload,
                }
            }
        // ------------ //
        // ADMIN LOGIN //
        // ------------//
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


