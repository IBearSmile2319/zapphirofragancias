import { Badge, Button, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
import { DeleteOutlined, MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { RemoveCartItem } from '../../../../action/cart.action';
const CartItem = ({
    item
}) => {
    const dispatch = useDispatch()
    const [qty, setQty] = React.useState(item.quantity)
    const handleMinus = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }
    const handlePlus = () => {
        setQty(qty + 1)
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
                                {item.price}
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
                                onClick={handleMinus}
                            />
                            <Badge
                                count={qty}
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
                                onClick={handlePlus}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </Badge>
    )
}

export default CartItem
