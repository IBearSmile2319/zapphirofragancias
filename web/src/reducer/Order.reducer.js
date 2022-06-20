import { AdminOrder } from '../action/constants.js'

const initialState = {
    orders: [],
    order: {},
    orderById: {},
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        // admin order
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
        //admin By id
        case AdminOrder.ADMIN_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case AdminOrder.ADMIN_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                orderById: action.payload,
                loading: false,
                error: null
            }
        case AdminOrder.ADMIN_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


