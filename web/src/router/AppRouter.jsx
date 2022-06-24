import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing'
import Login from '../pages/Login'
// user 
import UserPrivateRouter from './UserPrivateRouter'
// admin
import AdminPrivateRouter from './AdminPrivateRouter'
import AdminLogin from '../pages/AdminLogin';
import { useSelector } from 'react-redux';
import AuthContext from '../auth/AuthContext';
import { LinksAdmin } from './Links';
import Combo from '../pages/Combo';
import ListCombo from '../pages/Combo/ListCombo';
import PaymentCombo from '../pages/Combo/PaymentCombo';
import FormPayment from '../pages/Combo/PaymentCombo/FormPayment';
import InfoCheckout from '../pages/Combo/PaymentCombo/InfoCheckout';
import LinksUser from './LinksUser';
const AppRouter = () => {
    const { verifyToken } = useContext(AuthContext);
    const auth = useSelector(state => state.auth);
    useEffect(() => {
        verifyToken();
    }, [verifyToken])

    const renderRoutes = (item, index) => {
        if (item.submenu) {
            if (item.path === "") {
            } else {
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
            }
        } else {
            return (
                <Route key={index} path={item.path} element={<item.element />} />
            )
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* public and private routes */}
                {/* <Route path="/" element={<Landing />} /> */}
                <Route path="/" element={<Navigate to="combo" />} />
                {/* <Route path="sign-up" element={<Register />} /> */}
                <Route path="combo" element={<Combo />} >
                    <Route index element={<ListCombo />} />
                    <Route path="payment" element={<PaymentCombo />} >
                        <Route index element={<FormPayment />} />
                        <Route path="checkout" element={<InfoCheckout />} />
                    </Route>
                </Route>
                <Route path="sign-in" element={<Login />} />
                <Route element={<UserPrivateRouter user={auth.user.logged} />}>
                    {
                        LinksUser.map((item, index) => {
                            return renderRoutes(item, index)
                        })
                    }
                </Route>
                <Route path="/admin/sign-in" element={<AdminLogin />} />
                <Route path="admin" element={<AdminPrivateRouter admin={auth.admin.logged} />}>
                    <Route index element={<Navigate to="/admin/dashboard" />} />
                    {
                        LinksAdmin.map((item, index) => {
                            return renderRoutes(item, index)
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter