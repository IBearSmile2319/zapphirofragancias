import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import moment from 'moment'
import './OrderItem.css'
const OrderItem = ({
    order
}) => {

    return (
        <article className="order-item">
            <header className="order-item-header">
                <div className="order-item-header-status">
                    <span>
                        {
                            order?.orderStatus?.filter(item => item.Completed === true)[order?.orderStatus?.filter(item => item.Completed === true).length - 1]?.type
                        }
                    </span>
                </div>
                <div className="order-item-header-right">
                    <div className="info">
                        <div className="">
                            {/* use moment js moment().format("MMM Do YY")*/}
                            Pedido efectuado el: {moment(order?.createdAt).format("DD MMM, YYYY")}
                        </div>
                        <div className="">
                            N° de pedido: {order?._id}
                        </div>
                    </div>
                    <span className="order-item-header-line"></span>
                    <Link to="/home" className="details">
                        <span>Detalles del pedido</span>
                        <span>
                            <RightOutlined />
                        </span>
                    </Link>
                    <div className="datetime">
                        <span>
                            {moment(order?.createdAt).format("DD MMM, YYYY")}
                        </span>
                    </div>
                </div>
            </header>
            <div className="order-item-content">
                <div className="order-item-content-body">
                    {order?.items.length === 1 ? order.items.map(item => {
                        if (item.combo) {
                            return (
                                <>
                                    <div  className="img-list">
                                        <Link to="/home" aria-disabled>
                                            <img src={item.combo.imagen} alt="" type="img/svg" />
                                        </Link>
                                    </div>
                                    {/* solo un prodcuto si no es uno pues oculta esto */}
                                    <div className="order-item-info">
                                        <div className="name">
                                            <span>
                                                {item.combo.name}
                                            </span>
                                        </div>
                                        <div className="price">
                                            S/.{item.price}
                                            <span>x{item.quantity}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        }else{
                            return (
                                <>
                                    <div  className="img-list">
                                        <Link to="/home" aria-disabled>
                                            <img src={item.product.imagen} alt="" />
                                        </Link>
                                    </div>
                                    <div className="order-item-info">
                                        <div className="name">
                                            <span>
                                                {item.product.name}
                                            </span>
                                        </div>
                                        <div className="price">
                                            S/.{item.price}
                                            <span>x{item.quantity}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                        : order?.items.map(item => {
                            // solo imagenes como un colash de imagenes solo 3
                            return (
                                <div key={item._id} className="img-list">
                                    <Link to="/home" aria-disabled>
                                        <img src={item.product.imagen} alt="" />
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="order-item-content-opt">
                    <div className="opt-price">
                        <span>Total: S/.{order.total}</span>
                    </div>
                    <div className="opt-btn">
                        <div className="opt-btns">
                            <Button type="primary">
                                <span>Ver detalles</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default OrderItem
