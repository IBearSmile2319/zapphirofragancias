import React, { useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import './Orders.css'
import OrderItem from './OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { userOrderGet } from '../../../action/order.action'
import { motion } from 'framer-motion'
import { Spin } from 'antd'
const Orders = () => {
  const dispatch = useDispatch()
  const { orders, loading } = useSelector(state => state.order)
  useEffect(() => {
    dispatch(userOrderGet())
  }, [])
  return (
    <>
      <SearchBar />
      <Spin spinning={loading}>
        <motion.div className="orders-grid-layout"
          initial={{ width: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
          {orders && orders.map(order => (
              <OrderItem key={order._id} order={order} />
            ))
          }
        </motion.div>
      </Spin>
    </>
  )
}

export default Orders