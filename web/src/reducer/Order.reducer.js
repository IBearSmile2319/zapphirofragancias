import {AdminOrder} from '../action/constants.js'

const initialState = {
    orders: [],
    order: {},
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AdminOrder.ADMIN_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case AdminOrder.ADMIN_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null
            }
        case AdminOrder.ADMIN_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


