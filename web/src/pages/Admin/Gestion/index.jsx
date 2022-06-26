import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '@components/MainNav'

const Gestion = () => {
    return (
        <>
            <MainNav path="gestion" />
            <Outlet />
        </>
    )
}

export default Gestion