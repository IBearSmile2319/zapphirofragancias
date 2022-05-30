
import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './AddProduct.css'
import FormAddProduct from './FormAddProduct'
const AddProduct = () => {
  return (
    <main className="admin-products__add">
      <BreadCrumb />
      <FormAddProduct />
    </main>
  )
}

export default AddProduct
