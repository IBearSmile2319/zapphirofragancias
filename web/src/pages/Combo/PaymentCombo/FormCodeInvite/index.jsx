import { Button, Input, Spin } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PromotorCodeInvite, PromotorReset } from '@action/promotor.action'
import './FormCodeInvite.css'
const FormCodeInvite = () => {
    const [code, setCode] = useState('')
    const dispatch = useDispatch()
    const { promotor, loading } = useSelector(state => state.promotor)
    const submit = (e) => {
        dispatch(PromotorCodeInvite({
            code_invite: code
        }))
    }
    const reset = (e) => {
        dispatch(PromotorReset())
        setCode('')
    }
    return (
        <Spin spinning={loading}>
            <div className="form-promotor">
                <div className="form-promotor__content">
                    <Input
                        placeholder="Ingrese el código de invitación"
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                        disabled={promotor?.uid ? true : false}
                    />
                    {promotor?.uid ?
                        <Button type="ghost" onClick={reset}>
                            Reiniciar
                        </Button>
                        :
                        <Button type="primary" onClick={submit}>
                            Validar
                        </Button>
                    }
                </div>
                {promotor?.uid ? 
                    <div className="promotor-fullname">
                        su nombre es: {promotor.firstName} {promotor.lastName}
                    </div>
                    : 
                    null
                }
            </div>
        </Spin>
    )
}

export default FormCodeInvite
