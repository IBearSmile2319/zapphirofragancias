import React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd';
import './CardProduct.css'
const CardProduct = ({
    product,
    addCart,
    cartItems
}) => {
    const picture = product?.productPicture[0] || ''
    return (
        <article className="card-product">
            <header className="card-header">
                <div className="img-content">
                    <Link to={`/product/${product.slug}`}>
                        <img src={picture?.imgId?.url || ""} alt="product" />
                    </Link>
                </div>
                <div className="card-body">
                    <Link to={`/product/${product.slug}`}>
                        <h3>
                            <span>
                                {product.name}
                            </span>
                        </h3>
                    </Link>
                    <p>
                        {product.description} 
                    </p>
                </div>
            </header>
            <footer className="card-footer">
                <div className="price-in-footer">
                    <div className="presentation">
                        <div className="">
                            {
                                Object.keys(cartItems) && !cartItems[product._id] ?
                                    <Tooltip title="Añadir al carrito" color="var(--primary-color)">
                                        <button className="card-price"
                                            onClick={() => addCart(product, 1)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 32 32" className="svg-icon normal s-mr-05 fill yellow-500" id="" fill="currentColor" title=""><g><path d="M24.0003 26.6177C23.9997 27.1872 24.1966 27.7394 24.5575 28.18C24.9183 28.6207 25.4209 28.9225 25.9794 29.0342C26.5379 29.1458 27.1178 29.0604 27.6204 28.7923C28.123 28.5243 28.5171 28.0903 28.7355 27.5642C28.9539 27.0382 28.9832 26.4527 28.8183 25.9076C28.6534 25.3624 28.3046 24.8913 27.8313 24.5745C27.3579 24.2577 26.7894 24.1148 26.2225 24.1702C25.6556 24.2256 25.1255 24.4758 24.7225 24.8783C24.4897 25.1035 24.3056 25.374 24.1813 25.6732C24.0571 25.9723 23.9955 26.2938 24.0003 26.6177Z"></path><rect x="7" y="2" width="2" height="7" rx="1" transform="rotate(90 7 2)"></rect><rect x="11.0105" y="21.7759" width="2" height="20.1162" rx="1" transform="rotate(167.811 11.0105 21.7759)"></rect><rect x="8.93015" y="24.5331" width="2" height="4.07966" rx="1" transform="rotate(-150 8.93015 24.5331)"></rect><rect x="8" y="24" width="2" height="21" rx="1" transform="rotate(-90 8 24)"></rect><rect x="32" y="4" width="2" height="26" rx="1" transform="rotate(90 32 4)"></rect><rect x="32" y="17" width="2" height="13" rx="1" transform="rotate(-180 32 17)"></rect><rect x="31.84" y="15" width="2" height="23.8096" rx="1" transform="rotate(83.3797 31.84 15)"></rect><path d="M7.3851 26.6173C7.38504 27.187 7.5825 27.739 7.94385 28.1793C8.3052 28.6196 8.80806 28.921 9.36673 29.0321C9.9254 29.1431 10.5053 29.0571 11.0076 28.7885C11.5099 28.5199 11.9035 28.0854 12.1214 27.5591C12.3392 27.0328 12.3679 26.4472 12.2023 25.9022C12.0368 25.3572 11.6874 24.8864 11.2136 24.5702C10.7399 24.2539 10.1711 24.1117 9.6043 24.1678C9.03746 24.2239 8.50763 24.4749 8.10509 24.8779C7.87264 25.1033 7.68883 25.3739 7.56499 25.6731C7.44116 25.9722 7.37994 26.2936 7.3851 26.6173V26.6173Z"></path></g>  </svg>
                                            <span>
                                                <div className={`price ${false ? "descount" : ""}`}>
                                                    <span>S/</span>
                                                    &nbsp;
                                                    {product.price}
                                                </div>
                                                {
                                                    false &&
                                                    <div className="descount">
                                                        <span>S/.</span>
                                                        6
                                                    </div>

                                                }
                                                <span>SOLES</span>
                                            </span>
                                        </button>
                                    </Tooltip>
                                    :
                                    <Link to={`/cart`} className="card-price">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 15 16" className="svg-icon normal s-mr-05 fill blue-500" id="" fill="currentColor" title=""><path fillRule="evenodd" clipRule="evenodd" d="M7.5 15.5C11.6421 15.5 15 12.1421 15 8C15 3.85786 11.6421 0.5 7.5 0.5C3.35786 0.5 0 3.85786 0 8C0 12.1421 3.35786 15.5 7.5 15.5ZM7.50001 14.4491C11.0617 14.4491 13.9491 11.5617 13.9491 8C13.9491 4.43828 11.0617 1.55094 7.50001 1.55094C3.9383 1.55094 1.05095 4.43828 1.05095 8C1.05095 11.5617 3.9383 14.4491 7.50001 14.4491Z"></path><rect x="4.21875" y="9.25635" width="0.9375" height="3.28125" rx="0.46875" transform="rotate(-57.7092 4.21875 9.25635)"></rect><rect width="0.9375" height="7.03125" rx="0.46875" transform="matrix(0.845348 0.534217 0.534217 -0.845348 6.20007 10.5084)"></rect>  </svg>
                                        <span>
                                            En carrito
                                        </span>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </footer>
        </article>
    )
}

export default CardProduct
