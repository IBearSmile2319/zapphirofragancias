import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './AvatarMenu.css'
import { AdminLogout } from '../../../../action/auth.action'
const AvatarMenu = () => {
    const dispatch= useDispatch()
    const {admin} = useSelector(state => state.auth)
    const [openMenu, setOpenMenu] = React.useState(false)
    const logout =()=>{
        dispatch(AdminLogout())
    }
    return (
        <div className="avatar-user-menu">
            <a href='#' className="user-menu__avatar" 
                onFocus={() => setOpenMenu(!openMenu)}
                onBlur={() => 
                    setTimeout(() => {
                        setOpenMenu(false)
                    }, 1000)}
                >
                <div className="avatar">
                    <img src="https://lh3.googleusercontent.com/a-/AOh14GioFIcJLSosX3x_P8B4j2winMQURuVw2lu0lphK=s96-c" alt="avatar" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="0.75rem" height="0.75rem" fill="currentColor"><path d="M2.60849 9.91421C3.38954 9.13317 4.65587 9.13317 5.43692 9.91421L17.4095 21.8868C18.1905 22.6678 18.1905 23.9342 17.4095 24.7152C16.6284 25.4963 15.3621 25.4963 14.5811 24.7152L2.60849 12.7426C1.82744 11.9616 1.82744 10.6953 2.60849 9.91421Z"></path><path d="M29.4142 9.91421C28.6332 9.13317 27.3668 9.13317 26.5858 9.91421L14.5962 21.9038C13.8151 22.6849 13.8151 23.9512 14.5962 24.7322C15.3772 25.5133 16.6436 25.5133 17.4246 24.7322L29.4142 12.7426C30.1953 11.9616 30.1953 10.6953 29.4142 9.91421Z"></path></svg>
            </a>
            <div className={`dropdown-menu-user ${openMenu ? "active": "" }`} 
                // onMouseLeave={handleClick}
                // onFocus={handleClick}
            >
                <div>
                    <div>
                        <header>
                            <div className="user-avatar">
                                <div className="img-content">
                                    <img src="https://lh3.googleusercontent.com/a-/AOh14GioFIcJLSosX3x_P8B4j2winMQURuVw2lu0lphK=s96-c" alt="avatar" />
                                </div>
                            </div>
                            <div>
                                <p className="user-name">
                                    {admin.firstName} {admin.lastName}
                                </p>
                                <p className="user-nickname">
                                    @{admin.username}
                                </p>
                            </div>
                        </header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/admin/profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.25em" height="1.25em" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M24.931 27C24.4711 23.2453 21.7975 21 19.4657 21H12.5776C10.1987 21 7.52889 23.2531 7.06914 27H24.931ZM28 28.9565V28.1502C28 22.5534 24.1444 18 19.4657 18H12.5776C7.8556 18 4 22.5534 4 28.1502V28.9565C4 29.5257 4.38989 30 4.86643 30H27.1336C27.6101 30 28 29.5257 28 28.9565Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16 13C18.2091 13 20 11.2091 20 9C20 6.79086 18.2091 5 16 5C13.7909 5 12 6.79086 12 9C12 11.2091 13.7909 13 16 13ZM16 16C19.866 16 23 12.866 23 9C23 5.13401 19.866 2 16 2C12.134 2 9 5.13401 9 9C9 12.866 12.134 16 16 16Z"></path></svg>
                                        <span>Tu perfil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/points">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.25em" height="1.25em" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28ZM16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.1733 8.41383C14.878 6.83286 17.122 6.83285 17.8267 8.41383L19.2279 11.5572L22.6504 11.9184C24.3717 12.1001 25.0652 14.2343 23.7794 15.3931L21.2228 17.697L21.9369 21.0636C22.296 22.7569 20.4806 24.0759 18.9812 23.2111L16 21.4916L13.0188 23.2111C11.5194 24.0759 9.70395 22.7569 10.0631 21.0636L10.7772 17.697L8.22063 15.3931C6.93481 14.2343 7.62824 12.1001 9.34961 11.9184L12.7721 11.5572L14.1733 8.41383ZM16 11.6843L15.2774 13.3054C14.9867 13.9575 14.3705 14.4051 13.6606 14.4801L11.8955 14.6664L13.214 15.8546C13.7443 16.3325 13.9797 17.0569 13.8315 17.7552L13.4633 19.4915L15.0008 18.6047C15.6192 18.248 16.3808 18.248 16.9992 18.6047L18.5367 19.4915L18.1685 17.7552C18.0203 17.0569 18.2557 16.3325 18.786 15.8546L20.1045 14.6664L18.3394 14.4801C17.6295 14.4051 17.0133 13.9575 16.7226 13.3054L16 11.6843Z"></path></svg>
                                        <span>Tus puntos</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="separator" />
                                </li>
                                <li
                                
                                >
                                    <a className="close-session" href='#'
                                        onClick={()=>logout()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.25em" height="1.25em" fill="currentColor"><path d="M2.5 3C3.32843 3 4 3.67157 4 4.5L4 27.5C4 28.3284 3.32843 29 2.5 29C1.67157 29 1 28.3284 1 27.5L1 4.5C1 3.67157 1.67157 3 2.5 3Z"></path><path d="M18.5 3C19.3284 3 20 3.67157 20 4.5V9.5C20 10.3284 19.3284 11 18.5 11C17.6716 11 17 10.3284 17 9.5V4.5C17 3.67157 17.6716 3 18.5 3Z"></path><path d="M18.5 21C19.3284 21 20 21.6716 20 22.5V27.5C20 28.3284 19.3284 29 18.5 29C17.6716 29 17 28.3284 17 27.5V22.5C17 21.6716 17.6716 21 18.5 21Z"></path><path d="M20 27.5C20 28.3284 19.3284 29 18.5 29H2.5C1.67157 29 1 28.3284 1 27.5C1 26.6716 1.67157 26 2.5 26L18.5 26C19.3284 26 20 26.6716 20 27.5Z"></path><path d="M20 4.5C20 5.32843 19.3284 6 18.5 6L2.5 6C1.67157 6 1 5.32843 1 4.5C1 3.67157 1.67157 3 2.5 3L18.5 3C19.3284 3 20 3.67157 20 4.5Z"></path><path d="M31 15.5C31 16.3284 30.3284 17 29.5 17L12.5 17C11.6716 17 11 16.3284 11 15.5C11 14.6716 11.6716 14 12.5 14L29.5 14C30.3284 14 31 14.6716 31 15.5Z"></path><path d="M23.4421 9.44212C24.0316 8.85263 24.9874 8.85263 25.5768 9.44212L30.5579 14.4232C31.1474 15.0126 31.1474 15.9684 30.5579 16.5579C29.9684 17.1474 29.0126 17.1474 28.4232 16.5579L23.4421 11.5768C22.8526 10.9874 22.8526 10.0316 23.4421 9.44212Z"></path><path d="M30.5579 14.4421C29.9684 13.8526 29.0126 13.8526 28.4232 14.4421L23.4421 19.4232C22.8526 20.0126 22.8526 20.9684 23.4421 21.5579C24.0316 22.1474 24.9874 22.1474 25.5768 21.5579L30.5579 16.5768C31.1474 15.9874 31.1474 15.0316 30.5579 14.4421Z"></path></svg>
                                        <span>Cerrar sesión</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarMenu
