import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavProduct from './NavProduct'
import './Products.css'
const Products = () => {
  return (
    <>
      <NavProduct />
      <Outlet />
    </>
  )
}

export default Products