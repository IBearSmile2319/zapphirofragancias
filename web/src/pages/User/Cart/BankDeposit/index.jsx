import { LeftOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UploadZFOne from '../../../../components/UploadZFOne'
import checkPayment from '../../../../helpers/PaymentMethod'
import { useForm } from 'react-hook-form'
import InputZF from '@components/InputZF'
import './BanckDeposit.css'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
const BankDeposit = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [image, setImage] = useState('')
  const { cartItems } = useSelector(state => state.cart)
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(FormProductValidate)
  })
  const verifyLocalStorage = async () => {
    const paymentName = localStorage.getItem('paymentMethod')
    if (paymentName) {
      checkPayment.map((item, index) => {
        if (item.name === paymentName) {
          setPaymentMethod(item)
          if (item.name === 'Efectivo') {
            setValue('operationNumber', "Pago en tienda")
            setValue('paymentNote', `Pagare en tienda la cantidad de S/.${Object.keys(cartItems).reduce((acc, key) => {
              // numeros con 2 decimales
              return acc + parseFloat(cartItems[key]?.subtotal.toFixed(2))
            }, 0)} SOLES a ${item.person} en ${item.name}`)
            setValue('paymentMount', Object.keys(cartItems).reduce((acc, key) => {
              // numeros con 2 decimales
              return acc + parseFloat(cartItems[key]?.subtotal.toFixed(2))
            }, 0))
          }
        }
      })
    } else {
      navigate('/cart')
    }
  }
  useEffect(() => {
    verifyLocalStorage()
  }, [])
  return (
    <>
      <header className="cart-payment-header">
        <div className="payment-header-content">
          <p>
            <Link to="/cart">
              <LeftOutlined />
            </Link>
            {
              paymentMethod?.name
            }</p>
          <img src={paymentMethod?.icon} alt="paymentMethod" />
        </div>
      </header>
      <form className="resume-cart"
        onSubmit={handleSubmit(async (data) => {
          console.log(data)
        } 
        )}
      >
        <p className="description">
          Para finalizar tu compra, debes realizar la transferencia bancaria a la siguiente cuenta y subir tu conprobante de pago.
        </p>
        <div className="card-pago">
          <label htmlFor="" className="bank-item">
            <div className="left">
              <p className="mb-2">{paymentMethod?.name}</p>
              <p className="mb-0">{paymentMethod?.number}</p>
              <p className="mb-0">{paymentMethod?.person}</p>
            </div>
            <div className="right">
              <img src={paymentMethod?.icon} alt="paymentMethod" />
            </div>
          </label>
        </div>
        <div className="bank-img">
          <p className="title">Adjunta tu comprobante</p>
          <div className="upload">
            <UploadZFOne
              fileList={image}
              setFileList={setImage}
            />
          </div>
          {
            !image &&
              <p className="info">El camprobante es requerido</p>
          }
          <InputZF
            label="Numero de Operación"
            name="operationNumber"
            register={register}
            placeholder=""
            errors={errors}
            type="text"
            required={false}
            disabled={false}
          />
          <InputZF
            label={paymentMethod?.name === 'Efectivo' ? 'Monto' : 'Monto de la transferencia'}
            name="paymentMount"
            register={register}
            placeholder=""
            errors={errors}
            type="text"
            required={false}
            disabled={false}
          />
          <InputZF
            label="Nota"
            name="paymentNote"
            register={register}
            placeholder=""
            errors={errors}
            type="text"
            required={false}
            disabled={false}
          />
        </div>
        <div className="bank-btn">
        <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%',
              height: '40px',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: '600',
              marginTop: '1rem'
            }}
          >
            Finalizar compra
          </Button>
        </div>
      </form>
    </>
  )
}

export default BankDeposit
