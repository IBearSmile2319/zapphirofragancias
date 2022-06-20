import { Avatar, Button, Card, Col, Divider, Drawer, Image, List, Popover, Row, Space, Steps, Tag } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
const { Meta } = Card;
const { Step } = Steps;
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
    const TitleItem = ({ title }) => {
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
    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <Tag 
                    color={status === "finish" ? "green" : "red"}
                    style={{
                        margin: "0px",
                        padding: "0px",
                        borderRadius: "0px",
                    }}
                >
                    {status === "finish" ? "Completa" : "Pendiente"}
                </Tag>
                // <span>
                //     status: {status}
                // </span>
            }
        >
            {dot}
        </Popover>
    )
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
                    <Link
                        to={`/admin/orders/${item?._id}`}>
                    <Button type="primary">Vista general</Button>
                    </Link>
                </Space>
            }
        >
            <TitleItem title="Información de Usuario" />
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
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Telefono"
                        content={item?.user?.phone}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Numero de identificacion"
                        content={item?.user?.nDocument}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Status"
                        content={item?.user?.active ?
                            <Tag color="green">Activo</Tag> :
                            <Tag color="red">Por Activar</Tag>
                        }
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Promotor"
                        content={item?.user?.promotion || "No tiene"}
                    />
                </Col>
            </Row>
            <Divider />
            <TitleItem title="Detalles de orden" />
            <List
                itemLayout="horizontal"
                dataSource={item?.items}
                renderItem={item => (
                    <List.Item>
                        <Card

                            cover={<Image src={"http://localhost:8080" + item?.combo?.imagen} />}
                            style={{ width: 300 }}
                        >
                            <Meta
                                avatar={<Avatar src={"http://localhost:8080" + item?.combo?.icon} />}
                                description={
                                    <>
                                        <DescriptionItem
                                            title="Precio"
                                            content={`S/${item?.combo?.price}`}
                                        />
                                        <DescriptionItem
                                            title="Cantidad"
                                            content={item?.quantity}
                                        />
                                    </>
                                }
                                title={item?.combo?.name}
                            />
                        </Card>
                    </List.Item>
                )}
            />
            <Divider />
            <TitleItem title="Información de pago" />
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Metodo de pago"
                        content={item?.payment?.paymentMethod}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Comisión"
                        content={`S/${item?.payment?.paymentComission || 0}`}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Fecha de pago"
                        content={item?.payment?.paymentDate.split("T")[0]}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Monto Depósito"
                        content={`S/${item?.payment?.paymentMount}`}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Hora de pago"
                        content={item?.payment?.paymentDate.split("T")[1].split(".")[0]}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Monto Total de pago"
                        content={
                            `S/${item?.payment?.paymentMount + (item?.payment?.paymentComission || 0)}`

                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Nota de pago"
                        content={item?.payment?.paymentNote}
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Estado de pago"
                        content={item?.payment?.paymentStatus}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem
                        title="Numero de transaccion"
                        content={
                            <Tag color="blue">
                                {item?.payment?.operationNumber}
                            </Tag>
                        }
                    />
                </Col>
                <Col span={12}>
                    <DescriptionItem
                        title="Comprobante de pago"
                        content={
                            <Tag color="blue">
                                <Image src={"http://localhost:8080" + item?.payment?.img} alt="pago"
                                    style={{ height: "50px", width: "50px" }}
                                />
                            </Tag>
                        }
                    />
                </Col>
            </Row>
            <Divider />
            <TitleItem title="Estado de orden" />
            <Row>
                <Col span={24}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Steps
                        progressDot={customDot}
                        direction="vertical"
                        size="small"
                    >
                        {item?.orderStatus?.map(status => (
                            <Step
                                key={status?._id}
                                title={status?.type}
                                description={status?.description}
                                status={status?.Completed ? "finish" : "wait"}
                            />
                        ))}
                    </Steps>
                    {/* <DescriptionItem
                        title="Estado de orden"
                        content={item?.orderStatus?.filter(status => status.Completed === true)[0]?.type}
                    /> */}
                </Col>
            </Row>

        </Drawer >
    )
}

export default DrawerOrder
