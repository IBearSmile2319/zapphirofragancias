import { ComboProducts } from "../action/constants"


const initialState = {
    listCombos: [],
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // admin Combo
        case ComboProducts.COMBO_ADMIN_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ComboProducts.COMBO_ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                listCombos: action.payload,
            }
        case ComboProducts.COMBO_ADMIN_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state

    }
}

