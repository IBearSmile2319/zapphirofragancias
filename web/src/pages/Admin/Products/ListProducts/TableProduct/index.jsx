import React from 'react'
import { Button, Table, Tag } from 'antd'
const TableProduct = (props) => {
    const { data, className, showDrawer } = props
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => {
                return <Tag color={status ? 'green' : 'red'}>
                    {status ? 'ACTIVO' : 'INACTIVO'}
                </Tag>
            }
        },
        {
            title: 'Creador',
            dataIndex: 'createdBy',
            key: 'createdBy',
            render: (_, { createdBy }) => {
                return <Tag color="geekblue" key={createdBy}>
                    {createdBy ? createdBy.username.toUpperCase() : ''}
                </Tag>
            }
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (item) => {
                return <>
                    <Button type="primary" onClick={() => showDrawer(item)}>View</Button>
                </>
            }
        },
    ];

    return <Table
        {...props}
        columns={columns}
        dataSource={data}
        scroll={{
            x: 1300,
        }}
    />
}

export default TableProduct
