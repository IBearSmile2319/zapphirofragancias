import React from 'react'
import Content from '../Content'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Container.css'
const Container = ({ children }) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    const handleMenuClose=()=>{
        setMenuOpen(false)
    }
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