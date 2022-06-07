import { ComboProducts } from "../action/constants"


const initialState = {
    combos: [],
    listCombos: [],
    changeNumber: 0,
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // change num load
        case ComboProducts.COMBO_ADMIN_PRODUCTS_CHANGE:
            return {
                ...state,
                changeNumber: action.payload
            }
        // admin Combo
        case ComboProducts.COMBO_ADMIN_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                changeNumber: 0,
            }
        case ComboProducts.COMBO_ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                listCombos: action.payload,
                changeNumber: 0,
            }
        case ComboProducts.COMBO_ADMIN_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                changeNumber: 0,
            }

        // user interactive combo
        case ComboProducts.COMBO_LANDING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ComboProducts.COMBO_LANDING_SUCCESS:
            return {
                ...state,
                loading: false,
                combos: action.payload,
            }
        case ComboProducts.COMBO_LANDING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state

    }
}

