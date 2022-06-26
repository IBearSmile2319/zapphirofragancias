import { EditOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLinkActive from '../../../../components/CustomLinkActive'
import LinksUser from '../../../../router/LinksUser'
import './EditProfile.css'
const EditProfile = () => {
    return (
        <>
            <header className="header-edit-profile">
                <div className="header-nav-edit">
                    <div className="nav-center">
                        <CustomLinkActive
                            to={`/profile`}
                            className="nav-item"
                        >
                            <div className="tab-item">
                                <UserOutlined className="icon" />
                                <span>
                                    Profile
                                </span>
                            </div>
                        </CustomLinkActive>
                        {LinksUser.find(link => link.path === "edit-profile")?.submenu.map((submenu, index) => {
                            if (submenu?.display === true) {
                                return <CustomLinkActive
                                    to={`/edit-profile/${submenu.path}`}
                                    className="nav-item"
                                    key={index}
                                >
                                    <div className="tab-item">
                                        {
                                            submenu.icon ?
                                                <submenu.icon className="icon" />
                                                :
                                                <EditOutlined className="icon" />
                                        }
                                        <span>
                                            {submenu.name}
                                        </span>
                                    </div>
                                </CustomLinkActive>
                            }
                        }
                        )
                        }
                    </div>
                </div>
            </header>
            <div className="l-section"></div>
            <Outlet />
        </>
    )
}

export default EditProfile
