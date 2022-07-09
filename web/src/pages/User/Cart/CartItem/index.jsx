import { Badge, Button, message, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
import { DeleteOutlined, MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { RemoveCartItem, updateQuantityCartItem } from '../../../../action/cart.action';
const CartItem = ({
    item
}) => {
    const dispatch = useDispatch()
    const handleMinus = (id,qty) => {
        if (qty > 1) {
            dispatch(updateQuantityCartItem({
                productId: id,
                quantity: qty - 1
            }))
        }
    }
    const handlePlus = (id,qty) => {
        // stock
        if (qty < item.stock) {
            dispatch(updateQuantityCartItem({
                productId: id,
                quantity: qty + 1
            }))
        }else{
            message.error('No hay stock suficiente')
        }
    }
    const handleDelete = (id) => {
        dispatch(RemoveCartItem({
            productId: id
        }))
    }
    return (
        <Badge 
        count={<DeleteOutlined 
                onClick={() => {
                    handleDelete(item._id)
                }
                }
            />}
        overflowCount={10}
        offset={[-10, 40]}
        style={{ backgroundColor: '#fff', color: 'red' }}

        >
            <article className="cart-item">
                <div className="item-content">
                    <Link to={`/pruduct/${item.slug}`}>
                        <img src={item.productPicture[1]} alt={item.name} />
                    </Link>
                    <div className="item-description">
                        <div className="description">
                            {/* <div className="cn"> */}
                            <Link to={`/pruduct/${item.slug}`}>
                                {item.name}
                            </Link>
                            {/* </div> */}
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <div className="item-price">
                        <div className="price-content">
                            <div className="price">
                                <span>S/</span>
                                &nbsp;
                                {parseFloat(item.subtotal.toFixed(2))}
                                &nbsp;
                                <span>SOLES</span>
                            </div>
                        </div>
                    </div>
                    <div className="item-action">
                        <div className="count-qty">
                            <Button
                                size="small"
                                type="ghost"
                                shape="circle"
                                icon={<MinusOutlined />}
                                onClick={()=>handleMinus(item._id,item.quantity)}
                            />
                            <Badge
                                count={item.quantity}
                                style={{
                                    backgroundColor: 'var(--primary-color)',
                                    margin: '0.5rem 0',
                                }}
                            />
                            <Button
                                size="small"
                                type="ghost"
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={()=>handlePlus(item._id,item.quantity)}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </Badge>
    )
}

export default CartItem
