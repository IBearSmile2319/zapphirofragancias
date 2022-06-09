import { InfoCircleOutlined } from '@ant-design/icons'
import React from 'react'
import './InputZF.css'
const InputZF = ({
  register,
  required,
  label,
  name,
  placeholder,
  errors,
  type,
  ...props
}) => {
  return (
    <div className="inputzf">
        <label className="inputzf-label">{label}</label>
        <div className="inputzf-input">
            <input
            {...props}
            {...register(name, { required: required ? required : false })}
            placeholder={placeholder}
            type={type}
            />
        </div>
        {errors ? errors[name] && <span className="inputzf__msg-error"><InfoCircleOutlined /> {errors[name].message?.includes("number") ? "Solo se permiten numeros!" : errors[name].message}</span> : null}
    </div>
  )
}

export default InputZF
