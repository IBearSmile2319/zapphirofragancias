import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './ListProducts.css'
import TableProduct from './TableProduct'
import { motion } from 'framer-motion'
import NavProduct from './NavProduct'
import { useDispatch, useSelector } from 'react-redux'
import { AllProductAdmin } from '../../../../action/product.action'
import { Spin } from 'antd'
import DrawerProduct from './DrawerProduct'
const ListProducts = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [selectProduct, setSelectProduct] = useState([])
  const { loading, listProducts, changeNumber } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(AllProductAdmin())
  }, [changeNumber])
  const showDrawer = (item) => {
    setSelectProduct(item)
    setVisible(true)

  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <Spin spinning={loading}>
      <motion.main className='admin-products__list'
        initial={{ width: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <BreadCrumb />
        <NavProduct />
        <TableProduct
          data={listProducts && listProducts.length > 0 ? listProducts : []}
          className='table-product'
          showDrawer={showDrawer}
        />
        {listProducts ?
          <DrawerProduct
            visible={visible}
            onClose={onClose}
            item={selectProduct}
          />
          : null
        }
      </motion.main>
    </Spin>
  )
}

export default ListProducts
