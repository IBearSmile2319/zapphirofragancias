import { PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const NavOrders = () => {
  return (
    <div className="order-list__nav">
      {/* <Button
        // onClick={() => setOpen(true)}
        className="btn-add" variant="outline-primary">
        <PlusCircleOutlined />
        Add Order
      </Button> */}
      <Button
        // onClick={onReload}
        className="btn-add" variant="outline-primary">
        <ReloadOutlined />
        Recargar
      </Button>
    </div>
  )
}

export default NavOrders