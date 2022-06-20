import { PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const NavOrders = ({
  changeTable,
  setChangeTable
}) => {
  return (
    <div className="order-list__nav">
      <Button
        onClick={() =>setChangeTable(!changeTable)}
        className="btn-add" variant="outline-primary">
          {
            changeTable ?
            "Pedidos sin validar"
            :
            "Pedidos validados"
          }
      </Button>
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