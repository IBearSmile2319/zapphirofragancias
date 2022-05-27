import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './ListProducts.css'
import TableProduct from './TableProduct'
const ListProducts = () => {
  return (
    <main className='admin-products__list'>
      <BreadCrumb />
      <TableProduct 
        className='table-product'
      />
    </main>
  )
}

export default ListProducts
