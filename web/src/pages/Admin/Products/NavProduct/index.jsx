import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { LinksAdmin } from '../../../../router/Links'

const NavProduct = () => {
  return (
    <nav className='admin-products__nav'>
      <div className="admin-products__navigation">
        {LinksAdmin.find(link => link.path === 'products')?.submenu.map((submenu,index) => (
          <div className="admin-products__items" key={index}>
            <div className="">
              <Link to={`/admin/products/${submenu.path}`}>
                <div className="admin-products__subItem">
                  <HomeOutlined className="icon" />
                </div>
                <div className="admin-products__title">
                  <div className="admin-products__title">
                    <p>{submenu.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))
        }
      </div>
    </nav>
  )
}

export default NavProduct
