import { message } from 'antd'
import { axiosUserInstance } from '../helpers/axios'
import store from '../store'
import { UserCartType } from './constants'

export const GetCart = () => {
    return async dispatch => {
        dispatch({
            type: UserCartType.USER_CART_ADD_REQUEST,
        })
        try {
            axiosUserInstance.get('/cart')
                .then(res => {
                    const { cartItems } = res.data
                    dispatch({
                        type: UserCartType.USER_CART_ADD_SUCCESS,
                        payload: cartItems,
                    })
                })
                .catch(err => {
                    message.error(err.response.data.message)
                    dispatch({
                        type: UserCartType.USER_CART_ADD_FAILURE,
                        payload: err.response.data.message,
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }
}

export const AddToCart = (product,newQty=1) => {
    return async dispatch => {
        dispatch({
            type: UserCartType.USER_CART_ADD_REQUEST,
        })
        try {
            const { cart: {cartItems}}= store.getState()
            const quantity = cartItems[product._id] ?
                parseInt(cartItems[product._id].quantity + newQty) 
                : newQty
            const payload = {
                cartItems: [
                    {
                        product: product._id,
                        quantity,
                    }
                ]
            }
            axiosUserInstance.post('/cart', payload)
                .then(res => {
                    dispatch(GetCart())
                })
                .catch(err => {
                    message.error(err.response.data.message)
                    dispatch({
                        type: UserCartType.USER_CART_ADD_FAILURE,
                        payload: err.response.data.message,
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }
}

export const RemoveCartItem = (data) => {
    return async dispatch => {
        try{
            dispatch({
                type: UserCartType.USER_CART_DELETE_REQUEST,
            })
            await axiosUserInstance.post("/cart/removeItem", data)
                .then(res => {
                    dispatch({
                        type: UserCartType.USER_CART_DELETE_SUCCESS,
                    })
                    dispatch(GetCart())
                    
                    message.success(res.data.message)
                }).catch(err=>{
                    message.error(err.response.data.message)
                    dispatch({
                        type: UserCartType.USER_CART_DELETE_FAILURE,
                        payload: err.response.data.message,
                    })
                })
        }catch(error){
            console.error(error)
        }
    }
}