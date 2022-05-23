import React, { useCallback, useContext, useEffect } from 'react'
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
import { useSelector } from 'react-redux';
import AuthContext from '../auth/AuthContext';
import Products from '../pages/Admin/Products';
import Orders from '../pages/Admin/Orders';
import { LinksAdmin } from './Links';
const AppRouter = () => {
    const { verifyToken } = useContext(AuthContext);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        verifyToken();
    }, [verifyToken])
    return (
        <BrowserRouter>
            <Routes>
                {/* public and private routes */}
                <Route path="/" element={<Landing />} />
                <Route path="sign-in" element={<Login />} />
                <Route path="sign-up" element={<Register />} />
                <Route element={<UserPrivateRouter user={auth.user.logged} />}>
                    <Route path="home" element={<Home />} />
                </Route>
                <Route path="/admin/sign-in" element={<AdminLogin />} />
                <Route path="admin" element={<AdminPrivateRouter admin={auth.admin.logged} />}>
                    <Route index element={<Navigate to="/admin/dashboard" />} />
                    {
                        LinksAdmin.map((item, index) => {
                            if (item.submenu) {
                                return (
                                    <Route path={item.path} element={<item.element />}>
                                        <Route index element={<item.subElement />} />
                                        {
                                            item.submenu.map((subItem, subIndex) => {
                                                return (
                                                    <Route path={subItem.path} element={<subItem.element />}  key={subIndex} />
                                                )
                                            })
                                        }
                                    </Route>
                                )
                            } else {
                                return (
                                    <Route key={index} path={item.path} element={<item.element />} />
                                )
                            }
                        })
                    }
                    {/* <Route path="dashboard" element={<Dashboard />} />
                    <Route path="order" element={<Orders />} />
                    <Route path="product" element={<Products />} /> */}
                </Route>
            </Routes>
            {/* <Route element={<UserPublicRouter user={auth.user.logged} />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                </Route>
                <Route element={<UserPrivateRouter user={auth.user.logged} />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route element={<AdminPublicRouter admin={auth.admin.logged} />}>
                    <Route path="/admin/sign-in" element={<AdminLogin />} />
                </Route>
                <Route element={<AdminPrivateRouter admin={auth.admin.logged} />}>
                    <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/order" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes> */}
        </BrowserRouter>
    )
}

export default AppRouter