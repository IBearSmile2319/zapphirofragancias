import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getCombos } from '../../action/combo.action'
import Header from '../../components/Header'

const Combo = () => {
  let location = useLocation()
  let from = location.state?.from?.pathname || '/home'
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getCombos())
  }, [])
  return (
    <>
      {
        user.logged && <Navigate to={from} replace />
      }
      <Header>
        <Outlet />
      </Header>
    </>
  )
}

export default Combo
