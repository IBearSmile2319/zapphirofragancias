import React, { useState } from 'react'
import checkPayment from '../../../../helpers/PaymentMethod'
import './PaymentMethod.css'
import { useNavigate } from 'react-router-dom'
const PaymentMethod = () => {
  const navigate = useNavigate()
  const handleChange = (value) => {
    localStorage.setItem('paymentMethod', value)
    navigate('/cart/deposit')
  }
  return (
    <>
      <header className="cart-payment-header">
        <div className="payment-header-content">
          <p>Método de pago en Soles</p>
        </div>
      </header>
      <ul className="payment-method-list">
        {
          checkPayment.map((item, index) => (
            <li className="payment-item" key={index}
              onClick={() => handleChange(item.name)}
            >
              <p>
                {item.name}
              </p>
              <img src={item.icon} alt="" />
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default PaymentMethod
