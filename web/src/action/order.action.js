import { axiosAdminInstance, axiosInstance } from "../helpers/axios"
import { message } from "antd"
import { AdminOrder } from "./constants"

// TODO: Admin List Order first order
export const adminListOrder = () => {
    return async (dispatch) => {
        dispatch({ type: AdminOrder.ADMIN_ORDER_REQUEST })
        await axiosAdminInstance.get('/order')
            .then(res => {
                res.data.orders.map(item => {
                    item.key = item._id
                })
                dispatch({ type: AdminOrder.ADMIN_ORDER_SUCCESS, payload: res.data.orders })
            }).catch(err => {
                dispatch({ type: AdminOrder.ADMIN_ORDER_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}
















//TODO: register first order Public
export const registerFirstOrder = (data) => {
    return async dispatch => {
        await axiosInstance.post("/firstorder", data)
            .then(res => {
                message.success(res.data.message)
                // delete localStorage
                window.localStorage.removeItem("formPayment")
                window.localStorage.removeItem("comboSelect")
                // espera 1 segundo y redirecciona
                setTimeout(() => {
                    window.location.href = "/sign-in"
                }, 1000)
            }
            ).catch(err => {
                message.error(err.response.data.message)
            }
            )
    }
}