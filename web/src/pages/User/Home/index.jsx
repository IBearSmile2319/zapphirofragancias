import React, { useEffect } from 'react'
import SearchNavProduct from './SearchNavProduct'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import CardProduct from './CardProduct'
import { GetProductsUser } from '../../../action/product.action'
import { AddToCart } from '../../../action/cart.action'
const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)
    const { cartItems } = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(GetProductsUser())
    }, [])
    const AddToCartProuct = (productId, quantity) => {
        dispatch(AddToCart(productId, quantity))
    }
    return (
        <>
            <SearchNavProduct />
            <main className="products-grid-layout">
                {
                    products && products.map((product, index) => {
                        return <CardProduct
                            key={index}
                            product={product}
                            // product in cart
                            addCart={AddToCartProuct}
                            cartItems={cartItems}
                        />
                    }
                    )
                }
            </main>
        </>
    )
}

export default Home
