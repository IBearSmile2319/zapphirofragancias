import React from 'react'
import SearchNavProduct from './SearchNavProduct'
import './Home.css'
import CardProduct from './CardProduct'
const Home = () => {
    return (
        <>
            <SearchNavProduct />
            <main className="products-grid-layout">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </main>
        </>
    )
}

export default Home
