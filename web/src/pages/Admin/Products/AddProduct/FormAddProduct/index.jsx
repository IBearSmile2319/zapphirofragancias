import React from 'react'
import { Form, Input } from 'antd'
import './FormAddProduct.css'
const FormAddProduct = () => {
  return (
    <div className="add-product__form">
      <Form
        layout="vertical"
        name="basic"
        autoComplete="off"
      >
        {/* nombre del producto */}
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Ingrese el nombre del producto',
            },
          ]}
        >
          <Input
            placeholder="Nombre del producto"
          />
        </Form.Item>
        {/* descripción */}
        <Form.Item

          label="descripción"
          name="description"
          rules={[
            {
              required: true,
              message: 'Ingrese la descripción del producto',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Descripción del producto"
          />
        </Form.Item>
        {/* precio y stock */}
          {/* precio */}
          <Form.Item
            label="precio"
            name="price"
            rules={[
              {
                required: true,
                message: 'Ingrese el precio del producto',
              },
            ]}
          >
            <Input
              placeholder="Precio del producto"
            />
          </Form.Item>
          {/* stock */}
          <Form.Item
            label="stock"
            name="stock"
            rules={[
              {
                required: true,
                message: 'Ingrese el stock del producto',
              },
            ]}
          >
            <Input
              placeholder="Stock del producto"
            />
          </Form.Item>
      </Form>

    </div>
  )
}

export default FormAddProduct
