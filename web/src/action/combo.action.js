import { message } from 'antd'
import { axiosAdminInstance, axiosInstance } from '../helpers/axios'
import { ComboProducts } from './constants'

export const AddComboAdmin = (data) => {
    return async (dispatch) => {
        await axiosAdminInstance.post("/combo", data)
            .then(res => {
                message.success(res.data.message)
                dispatch({
                    type: ComboProducts.COMBO_ADMIN_PRODUCTS_CHANGE,
                    payload: 1
                })
            })
            .catch(err => {
                dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_FAILURE, payload: err.response.message })
                message.error(err.response.data.message)
            })
    }
}

export const AllComboAdmin = () => {
    return async (dispatch) => {
        dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_REQUEST })
        await axiosAdminInstance.get('/combo')
            .then(res => {
                res.data.data.map(item => {
                    item.key = item._id
                })
                dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: ComboProducts.COMBO_ADMIN_PRODUCTS_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}


// users

export const getCombos = () => {
    return async (dispatch) => {
        dispatch({ type: ComboProducts.COMBO_LANDING_REQUEST })
        await axiosInstance.get('/combo')
            .then(res => {
                res.data.data.map(item => {
                    item.key = item._id
                })
                dispatch({ type: ComboProducts.COMBO_LANDING_SUCCESS, payload: res.data.data })
            })
            .catch(err => {
                dispatch({ type: ComboProducts.COMBO_LANDING_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}