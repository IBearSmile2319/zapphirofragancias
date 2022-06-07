import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getCombos } from '../../action/combo.action'

const Combo = () => {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCombos())
    }, [])
  return (
    <>
      <Outlet />
    </>
  )
}

export default Combo
