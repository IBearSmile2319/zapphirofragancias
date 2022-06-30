
import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './AddProduct.css'
import FormAddProduct from './FormAddProduct'
import {motion} from 'framer-motion'
const AddProduct = () => {
  return (
    <motion.main className="admin-products__add"
    initial={{ width: 0}}
    animate={{ width: '100%', opacity: 1 }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <BreadCrumb />
      <FormAddProduct />
    </motion.main>
  )
}

export default AddProduct
