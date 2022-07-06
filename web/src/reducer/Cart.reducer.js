import { UserCartType } from '../action/constants'

const initialState = {
    cartItems: [],
    updatingCart: false,
    error:null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UserCartType.USER_CART_ADD_REQUEST:
            return {
                ...state,
                updatingCart: true,
            }
        case UserCartType.USER_CART_ADD_SUCCESS:
            return {
                ...state,
                updatingCart: false,
                error: null,
                cartItems: action.payload,
            }
        case UserCartType.USER_CART_ADD_FAILURE:
            return {
                ...state,
                updatingCart: false,
                error: action.payload,
            }
        default:
            return state
    }

}