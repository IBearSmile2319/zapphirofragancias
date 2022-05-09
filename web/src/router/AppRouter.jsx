import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Admin/Dashboard'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/User/Home'
// user 
import UserPrivateRouter from './UserPrivateRouter'
import UserPublicRouter from './UserPublicRouter'
// admin
import AdminPrivateRouter from './AdminPrivateRouter'
import AdminPublicRouter from './AdminPublicRouter'
import AdminLogin from '../pages/AdminLogin';

const AppRouter = () => {
    const auth = {
        user: {
            logged: false
        },
        admin: {
            logged: false
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<UserPublicRouter user={auth.user.logged} />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<UserPrivateRouter user={auth.user.logged} />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route element={<AdminPublicRouter admin={auth.admin.logged} />}>
                    <Route path="/admin/login" element={<AdminLogin />} />
                </Route>
                <Route element={<AdminPrivateRouter admin={auth.admin.logged} />}>
                    <Route path="/admin" element={<Navigate to="/admin/dashboard"/>} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />

                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter