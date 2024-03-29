import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/img/Logo.png'
import { Badge } from 'antd'
import './Header.css'
import AvatarMenu from './AvatarMenu'
import { useSelector } from 'react-redux'
const Header = ({
  setMenuOpen
}) => {
  const { cartItems } = useSelector(state => state.cart)
  const qty = Object.keys(cartItems).length ? Object.keys(cartItems).length : 0
  return (
    <header className="user-header_container">
      <div className="user-header_grid">
        <div className="user-header_content">
          <div>
            <svg
              onClick={setMenuOpen}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" className="menu-icon" fill="var(--text-color)"><path d="M2 8C2 6.89543 2.89543 6 4 6H28C29.1046 6 30 6.89543 30 8C30 9.10457 29.1046 10 28 10H4C2.89543 10 2 9.10457 2 8Z"></path><path d="M2 24C2 22.8954 2.89543 22 4 22H28C29.1046 22 30 22.8954 30 24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24Z"></path><path d="M2 16C2 14.8954 2.89543 14 4 14H28C29.1046 14 30 14.8954 30 16C30 17.1046 29.1046 18 28 18H4C2.89543 18 2 17.1046 2 16Z"></path></svg>
            <Link to="/home">
              <div className="logotype">
                <img src={Logo} alt="" />
              </div>
            </Link>
          </div>
          <div className="user-header_content-right">
            <label className="notify">
              <Link to="/notifications">
                <div className="item notify">
                  <Badge count={0} size="small" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" fill="currentColor"><path d="M12.5 28C12.5 28.7956 12.8687 29.5587 13.5251 30.1213C14.1815 30.6839 15.0717 31 16 31C16.9283 31 17.8185 30.6839 18.4749 30.1213C19.1313 29.5587 19.5 28.7956 19.5 28H12.5Z"></path><path d="M17.5 2.5C17.5 1.67157 16.8284 1 16 1C15.1716 1 14.5 1.67157 14.5 2.5V5.5C14.5 6.32843 15.1716 7 16 7C16.8284 7 17.5 6.32843 17.5 5.5V2.5Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M26.7285 22.75C25.5996 21.3877 25.6898 16.9491 25.7362 14.6623C25.7437 14.2957 25.75 13.9845 25.75 13.75C25.75 11.1641 24.7228 8.68419 22.8943 6.85571C21.0658 5.02723 18.5859 4 16 4C13.4141 4 10.9342 5.02723 9.10571 6.85571C7.27723 8.68419 6.25 11.1641 6.25 13.75C6.25 13.9844 6.25632 14.2957 6.26377 14.6623C6.31022 16.9491 6.40039 21.3877 5.27153 22.75C5.23373 22.7956 5.19457 22.8378 5.15399 22.8763C5.10478 22.923 5.05349 22.9643 5.00003 23H4.5C3.67157 23 3 23.6716 3 24.5C3 25.3284 3.67157 26 4.5 26H27.5C28.3284 26 29 25.3284 29 24.5C29 23.6716 28.3284 23 27.5 23H27C26.9465 22.9643 26.8952 22.923 26.846 22.8763C26.8054 22.8378 26.7663 22.7956 26.7285 22.75ZM8.86119 22.75H23.1388C23.1189 22.6875 23.1007 22.628 23.084 22.5719C22.8054 21.6359 22.6626 20.6069 22.5816 19.6824C22.4207 17.8472 22.4613 15.8563 22.4858 14.6497L22.4869 14.5963C22.4946 14.2162 22.5 13.9437 22.5 13.75C22.5 12.0261 21.8152 10.3728 20.5962 9.15381C19.3772 7.93482 17.7239 7.25 16 7.25C14.2761 7.25 12.6228 7.93482 11.4038 9.15381C10.1848 10.3728 9.5 12.0261 9.5 13.75C9.5 13.9437 9.50538 14.2162 9.5131 14.5962L9.51419 14.6497C9.53874 15.8562 9.57926 17.8472 9.41844 19.6824C9.33742 20.6069 9.19455 21.6359 8.91602 22.5719C8.89933 22.628 8.88112 22.6875 8.86119 22.75Z"></path></svg>
                  </Badge>
                </div>
              </Link>
            </label>
            <label className={`cart ${qty ? "active" : ""}`}>
              <Link to="/cart">
                <div className="item">
                  <Badge count={qty} size="small" color="var(--primary-color)" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" className="" fill="currentColor"><path d="M7 24.5C7 23.6716 7.67157 23 8.5 23H26.5C27.3284 23 28 23.6716 28 24.5C28 25.3284 27.3284 26 26.5 26H8.5C7.67157 26 7 25.3284 7 24.5Z"></path><path d="M6.2392 2.60548C7.0394 2.39107 7.86191 2.86595 8.07632 3.66615L13.4142 23.5873C13.6286 24.3875 13.1537 25.21 12.3535 25.4244C11.5533 25.6388 10.7308 25.164 10.5164 24.3638L5.17854 4.4426C4.96413 3.6424 5.439 2.8199 6.2392 2.60548Z"></path><path d="M1 3.5C1 2.67157 1.67157 2 2.5 2H6.5C7.32843 2 8 2.67157 8 3.5C8 4.32843 7.32843 5 6.5 5H2.5C1.67157 5 1 4.32843 1 3.5Z"></path><path d="M12 28C12 29.1046 11.1046 30 10 30C8.89543 30 8 29.1046 8 28C8 26.8954 8.89543 26 10 26C11.1046 26 12 26.8954 12 28Z"></path><path d="M27 28C27 29.1046 26.1046 30 25 30C23.8954 30 23 29.1046 23 28C23 26.8954 23.8954 26 25 26C26.1046 26 27 26.8954 27 28Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.61646 6L10 22L28.4243 19.368C29.9022 19.1568 31 17.8911 31 16.3981V9C31 7.34315 29.6569 6 28 6H5.61646ZM9.54892 9L12.1944 18.6561L28 16.3981V9H9.54892Z"></path></svg>
                  </Badge>
                </div>
              </Link>
            </label>
            <label className="search">
              <div className="item search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12.5 20C16.6421 20 20 16.6421 20 12.5C20 8.35786 16.6421 5 12.5 5C8.35786 5 5 8.35786 5 12.5C5 16.6421 8.35786 20 12.5 20ZM12.5 23C18.299 23 23 18.299 23 12.5C23 6.70101 18.299 2 12.5 2C6.70101 2 2 6.70101 2 12.5C2 18.299 6.70101 23 12.5 23Z"></path><path d="M18.2982 18.2983C18.884 17.7125 19.8337 17.7125 20.4195 18.2983L29.548 27.4267C30.1338 28.0125 30.1338 28.9623 29.548 29.548C28.9622 30.1338 28.0125 30.1338 27.4267 29.548L18.2982 20.4196C17.7124 19.8338 17.7124 18.884 18.2982 18.2983Z"></path></svg>
              </div>
            </label>
            <AvatarMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
