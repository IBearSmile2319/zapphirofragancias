import React, { useEffect, useState } from 'react'
import './PaymentCombo.css'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FormCodeInvite from './FormCodeInvite'
const PaymentCombo = () => {
  const [combo, setCombo] = useState([])
  const { combos, loading } = useSelector(state => state.combo)
  const LoadCombo = () => {
    const select = window.localStorage.getItem('comboSelect')
    combos?.filter(combo => combo._id === select).map(combo => setCombo(combo))
  }
  useEffect(() => {
    LoadCombo()
  }, [loading,combo])
  return (
    <>
      <main className="combo-payment__main">
        <section>
          <h1>Resumen de compra</h1>
        </section>
        <div className="combo-payment">
          <div className="combo-card-cols-1">
            <div className="card-payment">
              <Outlet/>
            </div>
          </div>
          <div className="combo-card-cols-2">
            <section className="shopping-cart">
              <div className="shopping-cart__content">
                <article className="cart-item">
                  <div className="cart-item-grid">
                    <Link to="/combo">
                        <img src={`${combo.imagen}`} alt="combo" type="img/svg" />
                    </Link>
                    <div className="cart-item_col-3">
                      <div className="info">
                        <h3>{combo.name}</h3>
                      </div>
                      <p>
                        {combo.description}
                      </p>
                    </div>
                    <div className="cart-item_col-2">
                        <div className="cross-center">
                          <div className="price">
                            S/{combo.price} SOLES
                          </div>
                        </div>
                    </div>
                  </div>
                </article>
              </div>
              <footer>
                <div className="promotor-show">
                  <FormCodeInvite/>
                </div>
                <div className="total">
                  <h3>
                    Total: S/{combo.price} SOLES
                  </h3>
                </div>
              </footer>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default PaymentCombo
