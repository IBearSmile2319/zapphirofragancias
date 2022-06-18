import { Button, Col, Divider, Drawer, List, Row, Space } from 'antd'
import React from 'react'

const DrawerOrder = ({
    visible,
    onClose,
    item
}) => {
    const DescriptionItem = ({ title, content }) => {
        return <div style={{
            marginBottom: "7px",
            color: "rgba(0, 0, 0, 0.65)",
            fontSize: "14px",
            lineHeight: 1.5715,
        }}>
            <p style={{
                display: "inline-block",
                marginRight: "8px",
                color: "rgba(0, 0, 0, 0.85)",
            }}>{title}:</p>
            {content}
        </div>
    }
    return (
        <Drawer
            title={item?._id}
            placement="right"
            width="100%"
            onClose={onClose}
            visible={visible}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary">Vista general</Button>
                </Space>
            }
        >
            <p
                className='site-description-item-profile-p'
                style={{
                    marginBottom: 24,
                    display: "block",
                    color: "rgba(0, 0, 0, 0.85)",
                    fontSize: "16px",
                    lineHeight: 1.5715,
                }}
            >
                Perfil del Usuario
            </p>
            <Row>
                <Col span={24}>
                    <DescriptionItem title="Nombre completo" content={`${item?.user?.firstName} ${item?.user?.lastName}`} />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Nombre de usuario"
                        content={item?.user?.username}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Correo electronico"
                        content={item?.user?.email}
                    />
                </Col>
            </Row>
            <Divider />

        </Drawer>
    )
}

export default DrawerOrder
