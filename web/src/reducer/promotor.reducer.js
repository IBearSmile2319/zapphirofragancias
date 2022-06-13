import { PromotorType } from "../action/constants"


const initialState = {
    promotor: {},
    promotors: [],
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PromotorType.PROMOTOR_TYPE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PromotorType.PROMOTOR_TYPE_SUCCESS:
            return {
                ...state,
                promotor: action.payload,
                loading: false,
            }
        case PromotorType.PROMOTOR_TYPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case PromotorType.PROMOTOR_TYPE_RESET:
            return {
                ...state,
                promotor: {},
                loading: false,
                error: null,
            }
        default:
            return state
    }
}
