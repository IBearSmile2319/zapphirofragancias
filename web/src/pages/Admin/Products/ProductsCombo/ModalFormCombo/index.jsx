import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, InputNumber, Space, Upload } from 'antd';
import ModalDraggable from '../../../../../components/ModalDraggable';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { AddComboAdmin } from '../../../../../action/combo.action';
import { api } from '././../../../../../helpers/axios'

import InputZF from '@components/InputZF'
import TextAreaZF from '@components/TextAreaZF'
import UploadZFOne from '../../../../../components/UploadZFOne';

const ModalFormCombo = ({ open, handleOk, handleCancel }) => {
  const dispatch = useDispatch()
  const [image, setImage] = useState('')
  const [icon, setIcon] = useState('')

  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(FormProductValidate)
  })

  const reloadData=()=>{
    setValue('name', '')
    setValue('price', '')
    setValue('description', '')
    setValue('imagen', '')
    setValue('icon', '')
  }

  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name', values.name)
    formData.append('price', values.price)
    formData.append('icon', icon)
    formData.append('imagen', image)
    formData.append('description', values.description)
    dispatch(AddComboAdmin(formData))
    handleOk()
    reloadData()
  };

  return (
    <ModalDraggable
      open={open}
      handleOk={handleOk}
      handleCancel={handleCancel}
      footer={null}
      title="Add Combo"
    >
      <form onSubmit={handleSubmit(onFinish)} >
        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%' }}
        >
          <InputZF
            label="Nombre del Producto"
            name="name"
            register={register}
            placeholder=""
            errors={errors}
            type="text"
            required={true}
            disabled={false}
          />
          <TextAreaZF
            label="Descripción"
            // labelClass="zf-label"
            name="description"
            register={register}
            errors={errors}
            required={false}
          />
          <InputZF
            label="Precio"
            name="price"
            register={register}
            placeholder=""
            errors={errors}
            type="number"
            required={true}
            disabled={false}
          />
          <h3>Icono del combo</h3>
          <UploadZFOne
            fileList={icon}
            setFileList={setIcon}
          />
          <h3>Imagen del combo</h3>
          <UploadZFOne
            fileList={image}
            setFileList={setImage}
          />
        </Space>
        {/* bottom */}
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: '600',
            marginTop: '1rem'
          }}
        >
          enviar
        </Button>
      </form>
      {/* icon */}
      {/* <Form.Item
        label="Icono del combo"
        name="icon"
      >
        <Space
          direction="vertical"
          onChange={e => setIcon(e.target.files[0])}
        >

          <Upload
            listType="picture"
            maxCount={1}
            accept="image/png, image/jpeg"
            action={`${api}/upload`}
          >
            <Button icon={
              <UploadOutlined />
            }>
              Subir Imagen
            </Button>
          </Upload>
        </Space>
      </Form.Item>
      <Form.Item
        label="Imagen del combo"
        name="image"
      >
        <Space
          direction="vertical"
          // onChange={e => setImage(e.target.files[0])}
        >

          <Upload
            listType="picture"
            maxCount={1}
            accept="image/png, image/jpeg"
            action={`${api}/upload`}
          >
            <Button icon={
              <UploadOutlined />
            }>
              Subir Imagen
            </Button>
          </Upload>
        </Space>
      </Form.Item> */}
    </ModalDraggable>

  )
}

export default ModalFormCombo
