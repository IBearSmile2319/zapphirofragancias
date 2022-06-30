import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import NavOrders from './NavOrders'
import './ListOrders.css'
import { useDispatch, useSelector } from 'react-redux'
import { adminListOrder } from '../../../../action/order.action'
import TableOrders from './TableOrders'
import DrawerOrder from './DrawerOrder'
import {motion} from 'framer-motion'
const ListOrders = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [selectOrder, setSelecteOrder] = useState([])
  const [changeTable, setChangeTable] = useState(0)
  const { orders, loading } = useSelector(state => state.order)
  const showDrawer = (item) => {
    setVisible(true)
    setSelecteOrder(item)
  }
  const onClose = () => {
    setVisible(false)
  }
  useEffect(() => {
    dispatch(adminListOrder(changeTable))
  }, [changeTable])
  
  return (
    <motion.main className='admin-order__list'
    initial={{ width: 0 }}
    animate={{ width: '100%', opacity: 1 }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <BreadCrumb />
      <NavOrders 
        changeTable={changeTable}
        setChangeTable={setChangeTable}
      />
      <TableOrders
        data={orders}
        className="table-order"
        showDrawer={showDrawer}
      />
      {orders ?
        <DrawerOrder
          visible={visible}
          onClose={onClose}
          item={selectOrder}
        />
        : null
      }
    </motion.main>
  )
}

export default ListOrders