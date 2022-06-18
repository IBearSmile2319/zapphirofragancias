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
    const TitleItem = ({title}) => {
        return <p
            style={{
                marginBottom: 24,
                display: "block",
                color: "rgba(0, 0, 0, 0.85)",
                fontSize: "16px",
                lineHeight: 1.5715,
            }}
        >
            {title}
        </p>
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
           <TitleItem title="Información de Usuario"/>
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
            <TitleItem title="Información de pago"/>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Metodo de pago"
                        content={item?.payment?.paymentMethod}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Total"
                        content={`S/${item?.total}`}
                    />
                </Col>
            </Row>
            <Divider />
            <TitleItem title="Estado de orden"/>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Estado de orden"
                        content={item?.orderStatus?.filter(status => status.Completed === true)[0]?.type}
                    />
                </Col>
            </Row>
            <Divider />
            <TitleItem title="Detalles de orden"/>
            <List
                itemLayout="horizontal"
                dataSource={item?.items}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item?.combo?.name}
                            description={`S/${item?.combo?.price}`}
                        />
                    </List.Item>
                )}
            />
        </Drawer>
    )
}

export default DrawerOrder
