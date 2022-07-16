import { UserAffiliatesType } from '../action/constants';
const initialState = {
    affiliates: [],
    loading: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UserAffiliatesType.USER_AFFILIATES_REQUEST:
            return {
                ...state,
                affiliates: [],
                loading: true,
                error: null,
            }
        case UserAffiliatesType.USER_AFFILIATES_SUCCESS:
            return {
                ...state,
                affiliates: action.payload,
                loading: false,
                error: null,
            }
        case UserAffiliatesType.USER_AFFILIATES_FAILURE:
            return {
                ...state,
                loading: false,
                affiliates: [],
                error: action.payload,
            }
        default:
            return state;
    }
}
