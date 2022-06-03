import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, Space, Upload } from 'antd';
import ModalDraggable from '../../../../../components/ModalDraggable';
import { UploadOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { AddComboAdmin } from '../../../../../action/combo.action';
const ModalFormCombo = ({ open, handleOk, handleCancel }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [image, setImage] = useState('')
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append('name', values.name)
    formData.append('price', values.price)
    formData.append('icon', image)
    formData.append('description', values.description)
    dispatch(AddComboAdmin(formData))
    handleOk()
  };
  useEffect(() => {
    form.resetFields();
  }, [open]);

  return (
    <ModalDraggable
      open={open}
      handleOk={handleOk}
      handleCancel={handleCancel}
      footer={null}
      title="Add Combo"
    >
      <Form
        layout="vertical"
        autoComplete='off'
        onFinish={onFinish}
        form={form}
      >
        {/* nombre del combo */}
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Ingrese el nombre del combo',
            },
          ]}
        >
          <Input
            placeholder="Nombre del combo"
          />
        </Form.Item>
        {/* descripción */}
        <Form.Item
          label="descripción"
          name="description"
          rules={[
            {
              required: true,
              message: 'Ingrese la descripción del combo',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Descripción del combo"
          />
        </Form.Item>
        {/* precio */}
        <Form.Item
          label="precio"
          name="price"
          rules={[
            {
              required: true,
              message: 'Ingrese el precio del combo',
            },
          ]}
        >
          <InputNumber
            placeholder="Precio del combo"
          />
        </Form.Item>
        {/* icon */}
        <Form.Item
          label="Imagen del combo"
          name="icon"
        >
          <Space
            direction="vertical"
            onChange={e => setImage(e.target.files[0])}
          >

            <Upload
              listType="picture"
              maxCount={1}
              accept="image/png, image/jpeg"
              action="http://localhost:8080/api/upload"
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
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </ModalDraggable>

  )
}

export default ModalFormCombo
