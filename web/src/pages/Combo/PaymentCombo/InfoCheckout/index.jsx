import React, { useEffect } from 'react'
import InputZF from '../../../../components/InputZF'
import SelectZF from '../../../../components/SelectZF'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormPaymentValidate } from '../FormPayment.validate'
import { Button, message, Space, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerFirstOrder } from '../../../../action/order.action'
const InfoCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [image, setImage] = React.useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(FormPaymentValidate)
  })
  const onSubmit = (data) => {
    if (!image) {
      message.error('La imagen es requerida')
      return
    }
    verifyLocalStorage()
    const InfoUser=JSON.parse(window.localStorage.getItem('formPayment'))
    const InfoCombo=window.localStorage.getItem('comboSelect')
    const form = new FormData()
    form.append('firstName', InfoUser.firstName)
    form.append('lastName', InfoUser.lastName)
    form.append('email', InfoUser.email)
    form.append('phone', InfoUser.phone)
    form.append('nDocument', InfoUser.nDocument)
    form.append('promotion', InfoUser.promotion)
    // payment
    form.append('paymentMethod', data.paymentMethod)
    form.append('paymentComission', data.paymentComission)
    form.append('operationNumber', data.operationNumber)
    form.append('paymentNote', data.paymentNote)
    form.append('paymentMount', data.paymentMount)
    form.append('img', image)
    // combo
    form.append('combo', InfoCombo)
    console.log(form)
    dispatch(registerFirstOrder(form))
    
  }
  const verifyLocalStorage = () => {
    if (!localStorage.getItem('formPayment')) {
      navigate('/combo/payment')
    }
    if (!localStorage.getItem('comboSelect')) {
      navigate('/combo')
    }
  }
  useEffect(() => {
    verifyLocalStorage()
  }, [])

  return (
    <>
      <header>
        <div className="cross-center">
          <p>
            Información de pago
          </p>
        </div>
      </header>
      <div className="card-payment-content">
        <form
          className="form-payment-info"
          onSubmit={handleSubmit(onSubmit)}
        >
          <SelectZF
            label="Tipo de Pago"
            {...register("paymentMethod")}
            values={[
              "Efectivo",
              "Tarjeta de Crédito",
              "Tarjeta de Débito",
              "Transferencia Bancaria",
              "Cheque",
              "Otro"
            ]}
          />
          {/* operationNumber */}
          <InputZF
            label="Número de Operación"
            name="operationNumber"
            register={register}
            placeholder="Número de Operación"
            errors={errors}
            type="text"
            required={true}
          />
          {/* paymentNote */}
          <InputZF
            label="Nota de Pago"
            name="paymentNote"
            register={register}
            placeholder="Nota de Pago"
            errors={errors}
            type="text"
            required={true}
          />
          {/* paymentMount */}
          <InputZF
            label="Monto"
            name="paymentMount"
            register={register}
            placeholder="Monto"
            errors={errors}
            type="text"
            required={true}
          />
          {/* paymentImg */}
          <Space
            direction="vertical"
            onChange={e => {
              const file = e.target.files[0]
              // type file jpg and png
              const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
              if (!isJpgOrPng) {
                message.error('Solo se permiten archivos JPG o PNG')
                return
              }
              const isLt2M = file.size / 1024 / 1024 < 2
              if (!isLt2M) {
                message.error('El archivo debe ser menor a 2MB')
                return
              }
              return setImage(e.target.files[0])
            }}
          >

            <Upload
              listType="picture-card"
              maxCount={1}
              accept="image/png, image/jpeg"
              action="http://localhost:8080/api/upload"
              showUploadList={false}

            >
              {image ? <img
                src={URL.createObjectURL(image)}
                alt="avatar"
                style={{ width: '100%' }}
              /> : <UploadOutlined />}
              {/* <Button icon={
                <UploadOutlined />
              }>
                Subir Imagen
              </Button> */}
            </Upload>
          </Space>
          {/* bottom */}
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
            enviar
          </Button>

        </form>
      </div>
    </>
  )
}

export default InfoCheckout
