import React, { useRef, useState } from 'react'
import { Modal, Button } from 'antd';
import Draggable from 'react-draggable';
import ModalDraggable from '../../../../../components/ModalDraggable';
const ModalFormCombo = ({ open, handleOk, handleCancel }) => {

  return (
    <ModalDraggable
      open={open}
      handleOk={handleOk}
      handleCancel={handleCancel}
      footer={null}
      title="Add Combo"
    >
      
    </ModalDraggable>

  )
}

export default ModalFormCombo
