import { PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ComboProducts } from '../../../../../action/constants'
import ModalFormCombo from '../ModalFormCombo'

const NavCombo = () => {
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
      type: ComboProducts.COMBO_ADMIN_PRODUCTS_CHANGE,
      payload: 1
    })
  }
  return (
    <div className="combo-list__nav">
      <Button
        onClick={() => setOpen(true)}
        className="btn-add" variant="outline-primary">
        <PlusCircleOutlined />
        Add Combo
      </Button>
      <Button
        onClick={onReload}
        className="btn-add" variant="outline-primary">
        <ReloadOutlined />
        Recargar
      </Button>
      <ModalFormCombo
        open={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title="Add Combo"
      >

      </ModalFormCombo>
    </div>
  )
}

export default NavCombo
