import { axiosUserInstance } from '../helpers/axios'
import {UserAffiliatesType} from './constants'

export const GetAffiliates = () => {
    return (dispatch)=>{
        dispatch({type: UserAffiliatesType.USER_AFFILIATES_REQUEST})
        axiosUserInstance.get('/affiliates')
            .then(res=>{
                dispatch({type: UserAffiliatesType.USER_AFFILIATES_SUCCESS, payload: res.data.affiliates})
            }).catch(err=>{
                dispatch({type: UserAffiliatesType.USER_AFFILIATES_FAILURE, payload: err.response.data.error})
            }
        )
    }
}