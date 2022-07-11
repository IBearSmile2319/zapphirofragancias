import { LeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import checkPayment from '../../../../helpers/PaymentMethod'
const BankDeposit = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState(null)
  useEffect(() => {
    const paymentName = localStorage.getItem('paymentMethod')
    if (paymentName) {
      checkPayment.map((item, index) => {
        if (item.name === paymentName) {
          setPaymentMethod(item)
        }
      })
    } else {
      navigate('/cart')
    }
  }, [])
  return (
    <>
      <header className="cart-payment-header">
        <div className="payment-header-content"
          onClick={() => navigate('/cart')}
        >
          <p>
            <Link to="/cart">
              <LeftOutlined />
            </Link>
            {
              paymentMethod ? paymentMethod.name : 'Selecciona un método de pago'
            }</p>
          {
            paymentMethod ?
              <img src={paymentMethod.icon} alt="paymentMethod" />
              :
              <img src="https://app.ed.team/static/images/utils/edy/edy-shopping.svg" alt="shopping" />
          }
        </div>
      </header>
    </>
  )
}

export default BankDeposit
