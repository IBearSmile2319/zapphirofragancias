import React from 'react'
import './TextAreaZF.css'
const TextAreaZF = ({
    label,
    labelClass,
    register,
    name,
    required,
    placeholder
}) => {
    return (
        <div className="textareazf">
            <label htmlFor="" className={`textareazf-label ${labelClass}`}>{label}</label>
            <textarea
                cols="30"
                rows="10"
                {...register(name, { required: required ? required : false })}
                placeholder={placeholder}
            >

            </textarea>
        </div>
    )
}

export default TextAreaZF
