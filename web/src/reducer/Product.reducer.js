import { AdminProduct } from "../action/constants"


const initialState = {
    products: [],
    listProducts: [],
    changeNumber: 0,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // change num load
        case AdminProduct.ADMIN_PRODUCT_CHANGE_NUMBER:
            return {
                ...state,
                changeNumber: action.payload
            }
        // admin Product
        case AdminProduct.ADMIN_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                changeNumber: 0,
            }
        case AdminProduct.ADMIN_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                listProducts: action.payload,
                changeNumber: 0,
            }
        case AdminProduct.ADMIN_PRODUCT_FAILURE:
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