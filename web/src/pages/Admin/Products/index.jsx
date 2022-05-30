import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../../../components/MainNav'
const Products = () => {
  return (
    <>
      <MainNav path="products"/>
      <Outlet />
    </>
  )
}

export default Products