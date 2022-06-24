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
                style={{
                    height: '16rem',
                    width: '100%',
                    position: 'relative',
                }}
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
                                                style={{
                                                    color: '#fff',
                                                    fontSize: '4.5rem',
                                                    marginTop: '2rem',
                                                }}
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
                            >
                                Editar perfil
                            </Button>
                        </div>
                    </aside>
                </div>
                <div style={{
                    gridColumnEnd: 'span 7',
                }}>
                </div>
                <div style={{
                    gridColumnStart: '11',
                    gridColumnEnd: 'span 2',
                    gridRowStart: '1',
                }}>
                </div>
            </main>
        </>
    )
}

export default Profile
