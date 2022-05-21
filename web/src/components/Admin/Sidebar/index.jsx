import { MenuOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  return (

    <div className="admin-sidebar__container">
      <header>
        <Link to="/admin" className="logotipe">
            Logo
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px" className="menu-icon" fill="var(--text-color)"><path d="M2 8C2 6.89543 2.89543 6 4 6H28C29.1046 6 30 6.89543 30 8C30 9.10457 29.1046 10 28 10H4C2.89543 10 2 9.10457 2 8Z"></path><path d="M2 24C2 22.8954 2.89543 22 4 22H28C29.1046 22 30 22.8954 30 24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24Z"></path><path d="M2 16C2 14.8954 2.89543 14 4 14H28C29.1046 14 30 14.8954 30 16C30 17.1046 29.1046 18 28 18H4C2.89543 18 2 17.1046 2 16Z"></path></svg>
      </header>
    </div>
  )
}

export default Sidebar
