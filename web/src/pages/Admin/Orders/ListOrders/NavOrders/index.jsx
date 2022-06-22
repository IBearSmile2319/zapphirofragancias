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
        type="dashed"
        className="btn-add"
        onClick={() => setChangeTable(0)}
      >
        Todos
      </Button>

      <Button
        onClick={() => setChangeTable(!changeTable)}
        type={changeTable ? 'default' : 'primary'}
        className="btn-add" variant="outline-primary">
        {
          changeTable ?
            "Ver sin validar"
            :
            "Ver validados"
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