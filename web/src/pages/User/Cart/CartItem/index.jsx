import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = () => {
    return (
        <article className="cart-item">
            <div className="item-content">
                <Link to="/cart">
                    <img src="https://via.placeholder.com/150" alt="product" />
                </Link>
                <div className="item-description">
                    <div className="description">
                        <Link to="/cart">
                            Nombre del producto
                        </Link>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="item-price">
                    <div className="price-content">
                        <div className="price">
                            <span>S/</span>
                            40
                            <span>SOLES</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CartItem
