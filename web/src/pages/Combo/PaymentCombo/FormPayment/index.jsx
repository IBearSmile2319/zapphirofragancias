import { Button, Form, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import './FormPayment.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInfoPersonValidate} from '../FormPayment.validate'
import InputZF from '../../../../components/InputZF'
import { useNavigate } from 'react-router-dom'

const FormPayment = () => {
    const navigate = useNavigate()
    const { register, handleSubmit,setValue, formState: { errors } } = useForm({
        resolver: yupResolver(FormInfoPersonValidate),
    })
    const onSubmit = (data) => {
        // save local storage
        localStorage.setItem('formPayment', JSON.stringify(data))
        // redirect to info checkout
        navigate('/combo/payment/checkout')
    }
    useEffect(() => {
        if (localStorage.getItem('formPayment')) {
            const data = JSON.parse(localStorage.getItem('formPayment'))
            console.log(data)
            Object.keys(data).forEach(key => {
                setValue(key, data[key])
            })
        }
        if (!localStorage.getItem('comboSelect')) {
            navigate('/combo')
        }
    }, [])
    return (
        <>
            <header>
                <div className="cross-center">
                    <p>
                        Informacion personal
                    </p>
                </div>
            </header>
            <div className="card-payment-content">
                <form 
                className="form-payment-info"
                onSubmit={handleSubmit(onSubmit)}
                >
                    <InputZF
                        label="Nombres"
                        name="firstName"
                        register={register}
                        placeholder="Nombres"
                        errors={errors}
                        type="text"
                        required={true}
                    />
                    <InputZF
                        label="Apellidos"
                        name="lastName"
                        register={register}
                        placeholder="Apellidos"
                        errors={errors}
                        type="text"
                        required={true}
                    />
                    <InputZF
                        label="Correo electrónico"
                        name="email"
                        register={register}
                        placeholder="Correo electrónico"
                        errors={errors}
                        type="email"
                        required={true}
                    />
                    {/* nDocument */}
                    <InputZF
                        label="Numero de documento"
                        name="nDocument"
                        register={register}
                        placeholder="Numero de documento"
                        errors={errors}
                        type="text"
                        required={true}
                        maxLength={8}
                    />
                    <InputZF
                        label="Telefono/Celular"
                        name="phone"
                        register={register}
                        placeholder="Teléfono"
                        errors={errors}
                        type="text"
                        required={true}
                    />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="btn-payment-info"
                        style={{
                            width: '100%',
                            height: '40px',
                            borderRadius: '5px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            marginTop: '1rem'
                        }}
                    >
                        Continuar
                    </Button>
                </form>
            </div>
        </>
    )
}

export default FormPayment