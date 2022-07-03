import { PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AdminProduct } from '../../../../../action/constants'
import ModalFormProduct from '../ModalFormProduct'

import './NavProduct.css'
const NavProduct = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const handleOk = () => {
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
    }
    const onReload = () => {
        dispatch({
            type: AdminProduct.ADMIN_PRODUCT_CHANGE_NUMBER,
            payload: 1
        })
    }
    return (
        <div className="admin-product-list__nav">
            <Button
                className="btn-add" variant="outline-primary"
                onClick={() => setOpen(true)}
            >
                <PlusCircleOutlined />
                Add Product
            </Button>
            <Button
                onClick={onReload}
                className="btn-add" variant="outline-primary">
                <ReloadOutlined />
                Recargar
            </Button>
            <ModalFormProduct
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}

            />
        </div>
    )
}

export default NavProduct