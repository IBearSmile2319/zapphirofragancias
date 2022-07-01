import React, { useEffect, useState } from 'react'
import './Header.css'
import LogoBlack from '../../assets/img/logo.png'
import { Button } from 'antd'

// backgroundColor: '#fff',
// padding: '0px',
// margin: '0px',
// borderBottom: '1px solid #e8e8e8',
// boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
const Header = ({ children }) => {
    const [style,setStyle]=useState({})

    useEffect(()=>{
        window.addEventListener('scroll',Scroll)
    },[])
    const Scroll = () => {
        // si le scroll est supérieur à la valeur min et inférieur à la valeur max alors on applique la classe fixed à la navbar
        // sinon on enlève la classe fixed
        // console.log(window.scrollY)
        if (window.scrollY > 0) {
            setStyle({
                backgroundColor: '#fff',
                padding: '0px',
                margin: '0px',
                borderBottom: '1px solid #e8e8e8',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'fixed',
                top: '0px',
                left: '0px',
                right: '0px',
                zIndex: '999',
            })
        } else {
            
            setStyle({
            })
           
        }
    }
    return (
        <>
            <header
                className='public-header-content'
                style={{...style}}
            >
                <nav className='header-container header-nav'>
                    <div className='header-logo'>
                        <img src={LogoBlack} alt='logo' />
                    </div>
                    <div className='header-nav-items__center'>
                        <ul>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/combo'>Combo</a>
                            </li>
                            <li>
                                <a href='/about'>About</a>
                            </li>
                            <li>
                                <a href='/contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='header-nav-items__right'>
                        <ul>
                            <li>
                                <Button
                                    className='btn-login'
                                    type='primary'
                                    ghost
                                    style={{
                                        borderRadius: '0.2rem',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}
                                    href='/sign-in'>Iniciar sesión</Button>
                            </li>
                            <li>
                                <Button
                                    type='primary'
                                    className='btn-register'
                                    style={{
                                        borderRadius: '0.2rem',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}
                                    href='/combo'>¡Comienza Ahora!</Button>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
            {children}
        </>
    )
}

export default Header