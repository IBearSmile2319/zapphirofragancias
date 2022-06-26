import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import bannerProfile from '../../../assets/img/banner-profile-user.jpg'
import './Profile.css'
const Profile = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <>
            <header
                className="banner-header-profile"
            >
                <img
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src={bannerProfile} alt="" />
            </header>
            <main className="user-profile-main">
                <div className="profile-info">
                    <aside className="info-header">
                        <div className="user-content">
                            <div className="user-avatar">
                                <div className="user-img-content">
                                    {user?.avatar ?
                                        <Avatar
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            src={user?.avatar}
                                        />
                                        :
                                        <Avatar
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                            icon={<UserOutlined
                                                className="user-icon"
                                            />}
                                        // src="https://i.pravatar.cc/300"
                                        />
                                    }
                                </div>
                            </div>
                            <div className="user-name">
                                <h1>
                                    {user?.firstName} {user?.lastName}
                                </h1>
                            </div>
                            <div className="user-nickname">
                                <span>
                                    @{user?.username}
                                </span>
                            </div>
                            <Button
                                type="primary"
                                style={{
                                    borderRadius: '0.3rem',
                                    fontWeight: '600',
                                    marginTop: '1rem',
                                }}
                                href="/edit-profile"
                            >
                                Editar perfil
                            </Button>
                        </div>
                    </aside>
                </div>
                <div className="profile-content-center">
                </div>
                <div className="profile-content-right">
                </div>
            </main>
        </>
    )
}

export default Profile
