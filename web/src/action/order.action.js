import { axiosInstance } from "../helpers/axios"
import { message } from "antd"

// register first order
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