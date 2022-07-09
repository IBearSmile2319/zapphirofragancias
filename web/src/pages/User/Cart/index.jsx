import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'
import { Steps } from 'antd'
import { useSelector } from 'react-redux'
import CartEmpty from '../../../assets/img/icons/IconZFCombo'
const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
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
                    {
                         Object.keys(cartItems).length  ?
                            <>
                                <div className="step">
                                    <Steps
                                        current={0}
                                        size='small'
                                        direction='horizontal'
                                        responsive={false}
                                        className="step-item"
                                    >
                                        <Steps.Step />
                                        <Steps.Step />
                                        <Steps.Step />
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
                                                {
                                                    Object.keys(cartItems).map(key => {
                                                        return <CartItem key={key} item={cartItems[key]} />
                                                    })
                                                }

                                            </div>
                                            <footer className="cart-footer">
                                                <div className="footer-content">
                                                    <h3>
                                                        Total: S/ {
                                                            Object.keys(cartItems).reduce((acc, key) => {
                                                                // numeros con 2 decimales
                                                                return acc + parseFloat(cartItems[key].subtotal.toFixed(2))
                                                            }, 0)
                                                        } SOLES
                                                    </h3>
                                                </div>
                                            </footer>
                                        </section>
                                    </div>
                                </div>
                            </> :
                            <div className="cart-empty">
                                <h1>Carrito de compra</h1>
                                {/* <img src="https://app.ed.team/static/images/utils/edy/edy-shopping.svg" alt="shopping" /> */}
                                {/* <img src={cartEmpty} alt="cart-empty" /> */}
                                <CartEmpty
                                className="cart-empty-img"
                                />
                                <p>Tu carrito está vacío</p>
                                <Link to="/home">
                                    Sigue comprando
                                </Link>
                            </div>
                    }
                </section>
            </main>
        </>
    )
}

export default Cart
