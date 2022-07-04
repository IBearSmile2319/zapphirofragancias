import React, { useEffect, useState } from 'react'
import InputZF from '@components/InputZF'
import SelectZF from '@components/SelectZF'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormPaymentValidate } from '../FormPayment.validate'
import { Button, message, Space, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerFirstOrder } from '@action/order.action'
import { api } from '../../../../helpers/axios'

const checkPayment = [
  {
    name: 'Efectivo',
    person: 'ZAPPHIRO COMPANY',
    number: 'Pago en Tienda',
  },
  {
    name: 'YAPE',
    person: "IRENIA SABINA GARAY LAZO",
    number: "951-762-095",
  },
  {
    name: 'PLIN',
    person: "RONALD JHUVER MONTES",
    number: "980-525-605",
  },
  {
    name: 'INTERBANK CTA, CTE',
    person: "ZAPPHIRO COMPANY",
    number: "011-3003042621"
  },
  {
    name: 'BBVA AHORROS',
    person: "RONALD JHUVER MONTES",
    number: "0011-0169-020036583",
  },
  {
    name: 'BCP AHORROS',
    person: "IRENIA SABINA GARAY LAZO",
    number: "194-30044964047",
  },
  {
    name: 'MI BANCO AHORROS',
    person: "IRENIA SABINA GARAY LAZO",
    number: "6008866447",
  }
]


const InfoCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const { combos } = useSelector(state => state.combo)
  const { promotor } = useSelector(state => state.promotor)
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(FormPaymentValidate)
  })



  useEffect(() => {
    verifyLocalStorage()
  }, [combos])
  const verifyLocalStorage = async () => {
    if (!localStorage.getItem('formPayment')) {
      navigate('/combo/payment')
    }
    if (!localStorage.getItem('comboSelect')) {
      navigate('/combo')
    }
    changeMethod(getValues('paymentMethod'))
  }

  // cambiar el metodo de pago
  const changeMethod = (value) => {
    // comprobar si el value es igual al name de checkPayment
    const comboId = window.localStorage.getItem('comboSelect')
    const method = checkPayment.filter(method => method.name === value)
    const combols = combos?.find(combo => combo._id === comboId)?.price
    setValue('ownerPersonDeposit', method[0].person)
    setValue('ownerNumberDeposit', method[0].number)
    setValue('operationNumber', `${method[0].name === 'Efectivo'
        ?
        'Pago en Tienda'
        :
        getValues('operationNumber') === 'Pago en Tienda'
          ?
          ""
          :
          getValues('operationNumber')
      }`)
    // setValue('paymentComission', "0")
    setValue('paymentNote', `${method[0].name === 'Efectivo'
        ?
        `Pagare en cede la cantidad de S/.${combols} a ${method[0].person} en ${method[0].name}`
        :
        getValues('paymentNote').includes('Pagare en cede la cantidad de S/.')
          ?
          ""
          :
          getValues('paymentNote')
      }`)
    setValue('paymentMount', combols)

  }



  // enviar formulario
  const onSubmit = (data) => {
    if (data.paymentMethod === 'Efectivo') {

    } else {
      if (!image) {
        message.error('La imagen es requerida')
        return
      }
    }
    verifyLocalStorage()
    const InfoUser = JSON.parse(window.localStorage.getItem('formPayment'))
    const InfoCombo = window.localStorage.getItem('comboSelect')
    const form = new FormData()
    form.append('firstName', InfoUser.firstName)
    form.append('lastName', InfoUser.lastName)
    form.append('email', InfoUser.email)
    form.append('phone', InfoUser.phone)
    form.append('nDocument', InfoUser.nDocument)
    // payment
    form.append('ownerPersonDeposit', data.ownerPersonDeposit)
    form.append('ownerNumberDeposit', data.ownerNumberDeposit)
    form.append('paymentMethod', data.paymentMethod)
    form.append('paymentComission', data.paymentComission)
    form.append('operationNumber', data.operationNumber)
    form.append('paymentNote', data.paymentNote)
    form.append('paymentMount', data.paymentMount)
    form.append('img', image)
    // combo
    form.append('combo', InfoCombo)
    form.append('promotion', promotor.uid ? promotor.uid : '')

    dispatch(registerFirstOrder(form))

  }

  const onPreview = async (file) => {
    let src = file.url;

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
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
            values={
              Object.keys(checkPayment).map(key => {
                return checkPayment[key].name
              })
            }
            onChange={(e) => changeMethod(e.target.value)}
          />
          {/* numero de deposito */}
          <InputZF
            label="Numero a depositar"
            name="ownerNumberDeposit"
            register={register}
            placeholder="Número de Operación"
            errors={errors}
            type="text"
            required={true}
            disabled={true}
          />
          <InputZF
            label="Propietario"
            name="ownerPersonDeposit"
            register={register}
            placeholder="Número de Operación"
            errors={errors}
            type="text"
            required={true}
            disabled={true}
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
              action={`${api}/upload`}
              showUploadList={false}
              onPreview={onPreview}
            >
              {image ? <img
                src={URL.createObjectURL(image)}
                alt="avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
