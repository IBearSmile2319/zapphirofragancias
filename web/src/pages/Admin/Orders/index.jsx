import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../../../components/MainNav'

const Orders = () => {
  return (
    <>
      <MainNav path="orders" />
      <Outlet />
    </>
  )
}

export default Orders
