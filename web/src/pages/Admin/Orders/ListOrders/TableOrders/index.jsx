import { Table } from 'antd'
import React from 'react'

const TableOrders = (props) => {
    const { data, className } = props
    const columns = [
        {
            title: 'user',
            dataIndex: 'user',
            key: 'user',
            render: (_, { user }) => {
                return <>
                    {user?.username}
                </>
            },
        },
        {
            title: 'Items',
            dataIndex: 'items',
            key: 'items',
            render: (_, { items }) => {
                return <>
                    {items.map(item => {
                        // if combos is empty, then return product
                        if (item.combo) {
                            return <>
                                {item.combo.name}
                                </>
                        }
                    }
                    )}
                    
                </>
            }
        },
        {
            title: 'Metodo de pago',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
            render: (_, { payment }) => {
                return <>
                    {payment?.paymentMethod}
                </>
            }
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (_, { total }) => {
                return <>
                   S/{total}
                </>
            }
        },
        {
            title: 'estado de orden',
            dataIndex: 'orderStatus',
            key: 'orderStatus',
            render: (_, { orderStatus }) => {
                // display the last order status containing true complete.
                const lastOrderStatus = orderStatus.filter(status => status.Completed === true)
                return <>
                    {lastOrderStatus[0]?.type}
                </>
            }
        },
        {
            title: 'Action',
            fixed: 'right',
            key: 'operation',
            width: 100,
            render: () => <a>action</a>,
        },
    ]
    return <Table
        className={className}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey='id'
        scroll={{
            x: 1300,
        }}
    />
}

export default TableOrders