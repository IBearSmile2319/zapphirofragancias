import { DatePicker } from 'antd'
import moment from 'moment'
import React from 'react'
import './DatePickerZF.css'
const DatePickerZF = ({
    label,
    labelClass,
    setDate,
    date
}) => {
    return (
        <div className="datepickerzf">
            <label className={`datepickerzf-label ${labelClass}`}>{label}</label>
            <div className="datepickerzf-group">
                <DatePicker
                    defaultValue={date ? moment(date, 'YYYY-MM-DD') : null}
                    onChange={setDate}
                    className="datepickerzf-input"
                    format={'YYYY-MM-DD'}
                    disabledDate={(current) => {
                        return current && current > moment().subtract(18, 'years')
                    }}
                    
                />
            </div>
        </div>
    )
}

export default DatePickerZF
