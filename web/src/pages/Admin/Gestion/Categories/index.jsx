import { PlusCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb'
import './Categories.css'
const Categories = () => {
  return (
    <main className="admin-category__list">
      <BreadCrumb />
      <div className="category-list__nav">
        <Button className="btn-add" variant="outline-primary">
          <PlusCircleOutlined />
          Add Category
        </Button>
      </div>
    </main>
  )
}

export default Categories