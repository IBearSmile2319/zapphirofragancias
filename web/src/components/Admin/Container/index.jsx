import React from 'react'
import Content from '../Content'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Container.css'
const Container = ({ children }) => {
    return (
        <div className="admin-body">
            <div className="admin__container">
                <Header />
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default Container