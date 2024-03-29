import React from 'react'
import { Link } from 'react-router-dom'
import './SearchNavProduct.css'
const SearchNavProduct = () => {
    return (
        <nav className="SearchNavProduct-nav">
            <div className="full">
                <ul className="breadcrumb-nav">
                    <li className="item-navigation">
                        <div className="">
                            <Link to="/home">
                                Todos los productos
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="tools">
                    {/* <div className="tools-item hidden"></div> */}
                    <div className="tools-item search">
                        <input
                            type="search"
                            placeholder="Buscar pedido"
                            autoComplete='off'
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <div className="select-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 20 16.103" className="svg-icon undefined" id="" fill="currentColor" title=""> <path d="M19.945,53.621,18.1,50.152a.468.468,0,0,0-.29-.232h0l-7.671-2.071a.469.469,0,0,0-.244,0l-7.71,2.071h0a.468.468,0,0,0-.29.232L.055,53.621a.468.468,0,0,0,.214.643l1.6.757V59.76a.468.468,0,0,0,.265.422l7.681,3.707a.465.465,0,0,0,.4,0h0L17.9,60.182a.468.468,0,0,0,.265-.422V55.022c0-.006,0-.012,0-.018l1.564-.74a.468.468,0,0,0,.214-.643Zm-9.926-4.835,6.134,1.656L10,52.722,3.85,50.442ZM2.531,50.953,9.37,53.487,7.864,56.818,1.112,53.627Zm.276,8.513v-4l5.087,2.4a.468.468,0,0,0,.627-.23l1.03-2.277v7.359Zm14.424,0-6.744,3.255V55.447l.991,2.192a.468.468,0,0,0,.627.23l5.126-2.423Zm-5.1-2.648L10.63,53.487l6.839-2.535,1.419,2.674Z" transform="translate(0 -47.832)"></path> </svg>
                            <select
                                className="select-search-item"
                            >
                                <option value="">Todas las categorias</option>
                                <option value="">Producto 1</option>
                                <option value="">Producto 2</option>
                                <option value="">Producto 3</option>
                            </select>

                        </div>
                    </div>
                    <div className="">
                        <div className="select-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 20 16.103" className="svg-icon undefined" id="" fill="currentColor" title=""> <path d="M19.945,53.621,18.1,50.152a.468.468,0,0,0-.29-.232h0l-7.671-2.071a.469.469,0,0,0-.244,0l-7.71,2.071h0a.468.468,0,0,0-.29.232L.055,53.621a.468.468,0,0,0,.214.643l1.6.757V59.76a.468.468,0,0,0,.265.422l7.681,3.707a.465.465,0,0,0,.4,0h0L17.9,60.182a.468.468,0,0,0,.265-.422V55.022c0-.006,0-.012,0-.018l1.564-.74a.468.468,0,0,0,.214-.643Zm-9.926-4.835,6.134,1.656L10,52.722,3.85,50.442ZM2.531,50.953,9.37,53.487,7.864,56.818,1.112,53.627Zm.276,8.513v-4l5.087,2.4a.468.468,0,0,0,.627-.23l1.03-2.277v7.359Zm14.424,0-6.744,3.255V55.447l.991,2.192a.468.468,0,0,0,.627.23l5.126-2.423Zm-5.1-2.648L10.63,53.487l6.839-2.535,1.419,2.674Z" transform="translate(0 -47.832)"></path> </svg>
                            <select
                                className="select-search-item"
                            >
                                <option value="">Todas las categorias</option>
                                <option value="">Producto 1</option>
                                <option value="">Producto 2</option>
                                <option value="">Producto 3</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SearchNavProduct
