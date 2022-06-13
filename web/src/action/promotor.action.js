import { message } from "antd"
import { axiosInstance } from "../helpers/axios"
import { PromotorType } from "./constants"

export const PromotorCodeInvite = (data) => {
    return async dispatch => {
        dispatch({ type: PromotorType.PROMOTOR_TYPE_REQUEST })
        await axiosInstance.post("/code-invite", data)
            .then(res => {
                dispatch({ type: PromotorType.PROMOTOR_TYPE_SUCCESS, payload: res.data.user })
                message.success("Código validado correctamente")
            }).catch(err => {
                message.error(err.response.data.error)
                dispatch({ type: PromotorType.PROMOTOR_TYPE_FAILURE, payload: err.response.data.error })
            })
    }
}

export const PromotorReset = () => {
    return async dispatch => {
        dispatch({ type: PromotorType.PROMOTOR_TYPE_RESET })
    }
}
