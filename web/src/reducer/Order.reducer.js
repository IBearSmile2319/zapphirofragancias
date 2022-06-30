import { AdminOrder, UserOrderType } from '../action/constants.js'

const initialState = {
    orders: [],
    order: {},
    orderById: {},
    changeNumber: 0,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        // change num load
        case AdminOrder.ADMIN_ORDER_CHANGE_NUMBER:
            return {
                ...state,
                changeNumber: action.payload
            }
        // admin order
        case AdminOrder.ADMIN_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                changeNumber: 0,
            }
        case AdminOrder.ADMIN_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null,
                changeNumber: 0,
            }
        case AdminOrder.ADMIN_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                changeNumber: 0,
            }
        //admin By id
        case AdminOrder.ADMIN_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                changeNumber: 0,

            }
        case AdminOrder.ADMIN_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                orderById: action.payload,
                loading: false,
                error: null,
                changeNumber: 0,
                
            }
        case AdminOrder.ADMIN_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                changeNumber: 0,
            }
        // User order
        case UserOrderType.USER_ORDER_CHANGE_NUMBER:
            return {
                ...state,
                changeNumber: action.payload
            }
        // user order
        case UserOrderType.USER_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                changeNumber: 0,
            }

        case UserOrderType.USER_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                loading: false,
                error: null,
                changeNumber: 0,
            }
        case UserOrderType.USER_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                changeNumber: 0,
            }
        // order by id
        case UserOrderType.USER_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                changeNumber: 0,
            }
        case UserOrderType.USER_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                orderById: action.pay,
                loading: false,
                error: null,
                changeNumber: 0,
            }
        case UserOrderType.USER_ORDER_BY_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                changeNumber: 0,
            }

        default:
            return state
    }
}


