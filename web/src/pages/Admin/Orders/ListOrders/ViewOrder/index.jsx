import { Avatar, Button, Card, Col, Divider, Image, List, Popover, Row, Space, Spin, Steps, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { adminAcceptOrder, adminListOrderById } from '../../../../../action/order.action';

const { Meta } = Card;
const { Step } = Steps;

import './ViewOrder.css'

const ViewOrder = () => {
  const dispatch = useDispatch()
  let { orderId } = useParams()
  // obtener el id de la url
  const { orderById, loading,changeNumber } = useSelector(state => state.order)

  useEffect(() => {
    dispatch(adminListOrderById(orderId))
  }, [orderId, changeNumber])
  const firstOrderAccept = async () => {
    const type = await orderById?.orderStatus?.filter(item => item.Completed === false)?.[0]?.type
    dispatch(adminAcceptOrder(orderId, type))
  }
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
    <div className="admin-order__view">
      <Spin spinning={loading}>
        <TitleItem title="Información de Usuario" />
        <Row>
          <Col span={24}>
            <DescriptionItem title="Nombre completo" content={`${orderById?.user?.firstName} ${orderById?.user?.lastName}`} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Nombre de usuario"
              content={orderById?.user?.username}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Correo electronico"
              content={orderById?.user?.email}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Telefono"
              content={orderById?.user?.phone}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Numero de identificacion"
              content={orderById?.user?.nDocument}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Status"
              content={orderById?.user?.active ?
                <Tag color="green">Activo</Tag> :
                <Tag color="red">Por Activar</Tag>
              }
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Promotor"
              content={orderById?.user?.promotion || "No tiene"}
            />
          </Col>
        </Row>
        <Divider />
        <TitleItem title="Detalles de orden" />
        <List
          itemLayout="horizontal"
          dataSource={orderById?.items}
          renderItem={orderById => (
            <List.Item>
              <Card

                cover={<Image src={"http://localhost:8080" + orderById?.combo?.imagen} />}
                style={{ width: 300 }}
              >
                <Meta
                  avatar={<Avatar src={"http://localhost:8080" + orderById?.combo?.icon} />}
                  description={
                    <>
                      <DescriptionItem
                        title="Precio"
                        content={`S/${orderById?.combo?.price}`}
                      />
                      <DescriptionItem
                        title="Cantidad"
                        content={orderById?.quantity}
                      />
                    </>
                  }
                  title={orderById?.combo?.name}
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
              content={orderById?.payment?.paymentMethod}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Comisión"
              content={`S/${orderById?.payment?.paymentComission || 0}`}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Fecha de pago"
              content={orderById?.payment?.paymentDate.split("T")[0]}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Monto Depósito"
              content={`S/${orderById?.payment?.paymentMount}`}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Hora de pago"
              content={orderById?.payment?.paymentDate.split("T")[1].split(".")[0]}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Monto Total de pago"
              content={
                `S/${orderById?.payment?.paymentMount + (orderById?.payment?.paymentComission || 0)}`

              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Nota de pago"
              content={orderById?.payment?.paymentNote}
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Estado de pago"
              content={orderById?.payment?.paymentStatus}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Numero de transaccion"
              content={
                <Tag color="blue">
                  {orderById?.payment?.operationNumber}
                </Tag>
              }
            />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Comprobante de pago"
              content={
                <Tag color="blue">
                  <Image src={"http://localhost:8080" + orderById?.payment?.img} alt="pago"
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
              {orderById?.orderStatus?.map(status => (
                <Step
                  key={status?._id}
                  title={status?.type}
                  description={status?.description}
                  status={status?.Completed ? "finish" : "wait"}
                />
              ))}
            </Steps>
          </Col>
        </Row>
      </Spin>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px"
      }}>
        <Col span={12}>
          <Button type="primary"
            onClick={firstOrderAccept}
          >
            Aceptar Orden
          </Button>
        </Col>
        <Col span={12}>
          <Button type="ghost">
            Enviar correo
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default ViewOrder
