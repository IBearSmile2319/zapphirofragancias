import React, { useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import './Orders.css'
import OrderItem from './OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { userOrderGet } from '../../../action/order.action'
const Orders = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.order)
  useEffect(() => {
    dispatch(userOrderGet())
  }, [])
  return (
    <>
      <SearchBar />
      <div className="orders-grid-layout">
        {
          orders.map(order => (
            <OrderItem key={order._id} order={order} />
          ))
        }
      </div>
    </>
  )
}

export default Orders