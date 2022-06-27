import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SearchBar.css'
const SearchBar = () => {
    const [search, setSearch] = useState('')
    return (
        <nav className="searchbar-nav">
            <div className="full">
                <ul className="breadcrumb-nav">
                    <li className="item-navigation">
                        <div className="">
                            <Link to="/home">
                                Todos tus pedidos
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="tools">
                    <div className="tools-item hidden"></div>
                    <div className="tools-item search">
                        <input
                            type="text"
                            placeholder="Buscar pedido"
                            autoComplete='off'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    {/* <div className="tools-item search">
                        <input
                            type="text"
                            placeholder="Buscar pedido"
                            autoComplete='off'
                        />
                    </div> */}
                    {/* <div className="tools-item search">
                        <input
                            type="text"
                            placeholder="Buscar pedido"
                            autoComplete='off'
                        />
                    </div> */}
                </div>
            </div>
        </nav>
    )
}
export default SearchBar
