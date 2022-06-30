import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './ListProducts.css'
import TableProduct from './TableProduct'
import {motion} from 'framer-motion'
const ListProducts = () => {
  return (
    <motion.main className='admin-products__list'
    initial={{ width: 0 }}
    animate={{ width: '100%', opacity: 1 }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <BreadCrumb />
      <TableProduct 
        className='table-product'
      />
    </motion.main>
  )
}

export default ListProducts
