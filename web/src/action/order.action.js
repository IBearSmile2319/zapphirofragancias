import { axiosAdminInstance, axiosInstance, axiosUserInstance } from "../helpers/axios"
import { message } from "antd"
import { AdminOrder, UserOrderType } from "./constants"
import { GetCart } from "./cart.action"

// TODO: Admin List Order first order
export const adminListOrder = (valid) => {
    return async (dispatch) => {
        dispatch({ type: AdminOrder.ADMIN_ORDER_REQUEST })
        await axiosAdminInstance.get(`/order/${valid}`)
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

// TODO: Admin List Order by id
export const adminListOrderById = (id) => {
    return async (dispatch) => {
        dispatch({ type: AdminOrder.ADMIN_ORDER_BY_ID_REQUEST })
        await axiosAdminInstance.get(`/order/view/${id}`)
            .then(res => {
                dispatch({ type: AdminOrder.ADMIN_ORDER_BY_ID_SUCCESS, payload: res.data.order })
            }).catch(err => {
                dispatch({ type: AdminOrder.ADMIN_ORDER_BY_ID_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}


// TODO: Admin Accept Order
export const adminAcceptOrder = (orderId, type, typeOrder) => {
    return async (dispatch) => {
        await axiosAdminInstance.put(`/order/accept`, { orderId, type, typeOrder })
            .then(res => {
                message.success(res.data.message)
                dispatch({
                    type: AdminOrder.ADMIN_ORDER_CHANGE_NUMBER,
                    payload: 1
                })
            }).catch(err => {
                dispatch({ type: AdminOrder.ADMIN_ORDER_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            })
    }
}



// User 

export const UserSaveOrder = (order) => {
    return async (dispatch) => {
        dispatch({ type: UserOrderType.USER_ORDER_REQUEST })
        await axiosUserInstance.post(`/saveOrder`, order)
            .then(res => {
                dispatch({ type: UserOrderType.USER_ORDER_SUCCESS, payload: res.data.message })
                message.success(res.data.message)
                setTimeout(() => {
                    window.location.href = "/orders"
                }, 1000)
            }).catch(err => {
                dispatch({ type: UserOrderType.USER_ORDER_FAILURE, payload: err.response.data.error })
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





// user order

export const userOrderGet = () => {
    return async dispatch => {
        dispatch({ type: UserOrderType.USER_ORDER_REQUEST })
        await axiosUserInstance.get("/orders")
            .then(res => {
                dispatch({ type: UserOrderType.USER_ORDER_SUCCESS, payload: res.data.orders })
            }).catch(err => {
                dispatch({ type: UserOrderType.USER_ORDER_FAILURE, payload: err.response.data.error })
                message.error(err.response.data.error)
            }
            )
    }
}