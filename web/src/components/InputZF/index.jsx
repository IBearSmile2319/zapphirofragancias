import { EyeInvisibleOutlined, EyeOutlined, InfoCircleOutlined } from '@ant-design/icons'
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
  labelClass,
  labelExtra,
  ...props
}) => {
  const [typeInput, setTypeInput] = React.useState(type)
  return (
    <div className="inputzf">
      <label className={`inputzf-label ${labelClass}`}>
        {label}
        {labelExtra}
      </label>
      <div className="inputzf-input">
        <input
          {...props}
          {...register(name, { required: required ? required : false })}
          placeholder={placeholder}
          type={typeInput}
        />
        {type === 'password' && (
          <div className="inputzf-icon">
            {
              typeInput === 'password' ? (
                <EyeOutlined className="icon" onClick={() => setTypeInput('text')} />
              ) : (
                <EyeInvisibleOutlined className="icon" onClick={() => setTypeInput('password')} />
              )
            }
          </div>
        )}
      </div>
      {errors ? errors[name] && <span className="inputzf__msg-error"><InfoCircleOutlined /> {errors[name].message?.includes("number") ? "Solo se permiten numeros!" : errors[name].message}</span> : null}
    </div>
  )
}

export default InputZF
