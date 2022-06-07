import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { LinksAdmin } from '../../router/Links'
import CustomLinkActive from '../CustomLinkActive'
import './MainNav.css'
const MainNav = ({
    path,
}) => {
    return (
        <nav className='main-nav__nav'>
            <div className="main-nav__navigation">
                {LinksAdmin.find(link => link.path === path)?.submenu.map((submenu, index) => (
                    <div className="main-nav__items" key={index}>
                        <div className="">
                            <CustomLinkActive
                                to={`/admin/${path}/${submenu.path}`}
                            >
                                <div className="main-nav__subItem">
                                    {
                                        submenu.icon ?
                                            <submenu.icon className="icon" />
                                            :
                                            <HomeOutlined className="icon" />
                                    }
                                </div>
                                <div className="main-nav__title">
                                    <div className="main-nav__title">
                                        <p>{submenu.name}</p>
                                    </div>
                                </div>
                            </CustomLinkActive>
                        </div>
                    </div>
                ))
                }
            </div>
        </nav>
    )
}

export default MainNav
