import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import ModalFormCombo from '../ModalFormCombo'

const NavCombo = () => {
  const [open, setOpen] = useState(false)
  const handleOk = () => {
    setOpen(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <div className="combo-list__nav">
        <Button 
          onClick={() => setOpen(true)}
        className="btn-add" variant="outline-primary">
            <PlusCircleOutlined />
            Add Combo
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
