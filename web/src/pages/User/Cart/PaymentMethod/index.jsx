import React from 'react'
import checkPayment from '../../../../helpers/PaymentMethod'
import './PaymentMethod.css'
// const checkPayment = [
//   {
//     name: 'Efectivo',
//     person: 'ZAPPHIRO COMPANY',
//     number: 'Pago en Tienda',
//   },
//   {
//     name: 'YAPE',
//     person: "IRENIA SABINA GARAY LAZO",
//     number: "951-762-095",
//   },
//   {
//     name: 'PLIN',
//     person: "RONALD JHUVER MONTES",
//     number: "980-525-605",
//   },
//   {
//     name: 'INTERBANK CTA, CTE',
//     person: "ZAPPHIRO COMPANY",
//     number: "011-3003042621"
//   },
//   {
//     name: 'BBVA AHORROS',
//     person: "RONALD JHUVER MONTES",
//     number: "0011-0169-020036583",
//   },
//   {
//     name: 'BCP AHORROS',
//     person: "IRENIA SABINA GARAY LAZO",
//     number: "194-30044964047",
//   },
//   {
//     name: 'MI BANCO AHORROS',
//     person: "IRENIA SABINA GARAY LAZO",
//     number: "6008866447",
//   }
// ]
const PaymentMethod = () => {
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
            <li className="payment-item" key={index}>
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
