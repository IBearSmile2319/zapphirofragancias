import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetCart } from '../../../action/cart.action'
import Content from '../Content'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Container.css'
const Container = ({ children }) => {
    const dispatch = useDispatch()
    const [menuOpen, setMenuOpen] = React.useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    const handleMenuClose=()=>{
        setMenuOpen(false)
    }
    useEffect(() => {
        dispatch(GetCart())
    }, [])
    return (
        <div className="user-body">
            <div className="user__container">
                <Header
                    menuOpen={menuOpen}
                    setMenuOpen={handleMenuOpen}
                />
                <Sidebar
                    menuOpen={menuOpen}
                    setMenuOpen={handleMenuOpen}
                    setMenuClose={handleMenuClose}
                />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default Container