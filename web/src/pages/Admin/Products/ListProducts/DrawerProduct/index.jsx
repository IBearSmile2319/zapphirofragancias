import { Col, Divider, Drawer, Popover, Row, Tag } from 'antd'
import React from 'react'

const DrawerProduct = ({
  visible,
  onClose,
  item,
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
      title="Detalle del producto"
      placement="right"
      width="100%"
      onClose={onClose}
      visible={visible}
    >
      <Row>
        <Col span={12}>
          <DescriptionItem title="Nombre" content={item.name} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Slug" content={item.slug} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Precio" content={`S/.${item.price}`} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Stock" content={item.stock} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Status" content={<Tag color={item.status ? "green" : "red"}>
            {item.status ? "ACTIVO" : "INACTIVO"}
          </Tag>} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Creador" content={
            <Tag color="geekblue" key={item.createdBy}>
              {item.createdBy ? item.createdBy.username.toUpperCase() : ''}
            </Tag>
          } />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Descripción" content={item.description} />
        </Col>
      </Row>
      <Divider />
      <TitleItem title="Imágenes del producto" />
      <Row>
        {item?.productPicture && item?.productPicture.map((image, index) => (
          <Col span={8} key={index}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={image?.imgId.url}
              alt="product"
            />
          </Col>
        ))}
      </Row>
    </Drawer>
  )
}

export default DrawerProduct
