import React, { useEffect } from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import NavOrders from './NavOrders'
import './ListOrders.css'
import { useDispatch, useSelector } from 'react-redux'
import { adminListOrder } from '../../../../action/order.action'
import TableOrders from './TableOrders'
const ListOrders = () => {
    const dispatch = useDispatch()
    const {orders, loading} = useSelector(state => state.order)
    useEffect(() => {
        dispatch(adminListOrder())
    }, [])
  return (
    <main className='admin-order__list'>
        <BreadCrumb/>
        <NavOrders/>
        <TableOrders
            data={orders}
            className="table-order"
        />
    </main>
  )
}

export default ListOrders