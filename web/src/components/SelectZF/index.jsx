import React, { forwardRef } from 'react'
import './SelectZF.css'
const SelectZF = forwardRef(({
    onChange,
    onBlur,
    name,
    label,
    values,
    labelClass
}, ref) => {
    return (
        <div className="selectZF">
            <label className={`selectZF__label ${labelClass}`} >{label}</label>
            <select
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
            >
                {values.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </div>
    )
})

export default SelectZF
