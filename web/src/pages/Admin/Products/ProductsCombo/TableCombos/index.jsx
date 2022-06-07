import { Image, Table, Tag } from 'antd';
import React from 'react'

const TableCombos = (props) => {
    const { data, className } = props
    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
            render: (_, {icon}) => (
                <Image 
                    src={`http://localhost:8080${icon}`}
                    alt='icon'
                    style={{width: '50px', height: '50px'}}
                />
            )
        },
        {
            title: 'Imagen',
            dataIndex: 'image',
            key: 'image',
            render: (_, {imagen}) => (
                <Image
                    src={`http://localhost:8080${imagen}`}
                    alt='imagen'
                    style={{width: '50px', height: '50px'}}
                />
            )
        },
        {
            title: 'Creador',
            dataIndex: 'createdBy',
            key: 'createdBy',
            render: (_, {createdBy}) => {
                
                return <Tag color="geekblue" key={createdBy}>
                    {createdBy?.username.toUpperCase()}
                </Tag>  
            },
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
            render: (_, {price}) =>{
                return <div key={price}>
                    S/.{price}
                </div>  
            }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, {status}) => {
                return <Tag color={status ? 'green' : 'red'} key={status}>
                    {status ? 'ACTIVO' : 'INACTIVO'}
                </Tag>
            },
        },
        {
            title: 'Action',
            fixed: 'right',
            key: 'operation',
            width: 100,
            render: () => <a>action</a>,
        },
    ];

    return <Table
        className={className}
        columns={columns}
        dataSource={data}
        scroll={{
            x: 1300,
        }}
    />
}

export default TableCombos
