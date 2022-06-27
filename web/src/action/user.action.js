import { message } from "antd"
import { axiosUserInstance } from "../helpers/axios"
import { UserUpdateType } from "./constants"

export const userUpdatePut = (data) => {
    return (dispatch) => {
        dispatch({ type: UserUpdateType.USER_UPDATE_REQUEST })
        axiosUserInstance.put('/update', data)
            .then(res => {
                message.success(res.data.message)
                dispatch({ type: UserUpdateType.USER_UPDATE_SUCCESS, payload: res.data.user })
            })
            .catch(err => {
                message.error(err.response.data.error)
                dispatch({ type: UserUpdateType.USER_UPDATE_FAILURE, payload: err.response.data.error })
            })
    }
}