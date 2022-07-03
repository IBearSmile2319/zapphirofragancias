import { message } from 'antd'
import { axiosAdminInstance } from '../helpers/axios'
import { AdminProduct } from './constants'

export const AddProductAdmin = (data) => {
    return async (dispatch) => {
        await axiosAdminInstance.post('/product', data)
            .then(res => {
                message.success(res.data.message)
                dispatch({
                    type: AdminProduct.ADMIN_PRODUCT_CHANGE_NUMBER,
                    payload: 1
                })
            })
            .catch(err => {
                dispatch({ type: AdminProduct.ADMIN_PRODUCT_FAILURE, payload: err.response.message })
                message.error(err.response.data.message)
            })
    }
}

export const AllProductAdmin = () => {
    return async (dispatch) => {
        dispatch({ type: AdminProduct.ADMIN_PRODUCT_REQUEST })
        await axiosAdminInstance.get('/product')
            .then(res => {
                res.data.data.map(item => {
                    item.key = item._id
                })
                dispatch({ type: AdminProduct.ADMIN_PRODUCT_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: AdminProduct.ADMIN_PRODUCT_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}