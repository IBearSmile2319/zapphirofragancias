import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'
import { Steps } from 'antd'
const Cart = () => {
    return (
        <>
            <div
                style={{
                    marginBottom: '2rem',
                    marginTop: 0,
                }}
            ></div>
            <main className="zf-cart-main">
                <section>
                    <div className="step">
                        <Steps 
                        current={0}
                        size='small'
                        direction='horizontal'
                        responsive={false}
                        className="step-item"
                        >
                            <Steps.Step/>
                            <Steps.Step/>
                            <Steps.Step/>
                        </Steps>
                    </div>
                    <h1 className="cart-title">Elige tu método de pago</h1>
                    <div className="cart-pages">
                        <div className="pageOne">
                            <div className="sticky-block">
                                <div className="">
                                    <div className="cart-payment-template">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageTwo">
                            <section className="shopping-cart-template">
                                <div className="cart-body">
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                </div>
                                <footer className="cart-footer">
                                    <div className="footer-content">
                                        <h3>
                                            Total: S/ 140 SOLES
                                        </h3>
                                    </div>
                                </footer>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cart
