import { message } from 'antd'
import { axiosAdminInstance } from '../helpers/axios'
import { ComboProducts } from './constants'



export const AllComboAdmin = () => {
    return (dispatch) => {
        dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_REQUEST })
        axiosAdminInstance.get('/combo')
            .then(res => {
                dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}