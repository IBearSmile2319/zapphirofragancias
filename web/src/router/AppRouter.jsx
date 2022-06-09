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
import Combo from '../pages/Combo';
import ListCombo from '../pages/Combo/ListCombo';
import CartCombo from '../pages/Combo/CartCombo';
import PaymentCombo from '../pages/Combo/PaymentCombo';
import FormPayment from '../pages/Combo/PaymentCombo/FormPayment';
import InfoCheckout from '../pages/Combo/PaymentCombo/InfoCheckout';
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
                <Route path="combo" element={<Combo/>} >
                    <Route index element={<ListCombo/>} />
                    <Route path="cart" element={<CartCombo/>} />
                    <Route path="payment" element={<PaymentCombo/>} >
                        <Route index element={<FormPayment/>} />
                        <Route path="checkout" element={<InfoCheckout/>} />
                    </Route>
                </Route>
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
                                    <Route key={index} path={item.path} element={<item.element />}>
                                        <Route index element={<item.subElement />} />
                                        {
                                            item.submenu.map((subItem, subIndex) => {
                                                if (subItem.path !== "") {
                                                    return <Route path={subItem.path} key={subIndex} element={<subItem.element />} />
                                                }
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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter