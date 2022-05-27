import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import CustomLinkActive from '../../../../components/CustomLinkActive'
import { LinksAdmin } from '../../../../router/Links'

const NavProduct = () => {
  return (
    <nav className='admin-products__nav'>
      <div className="admin-products__navigation">
        {LinksAdmin.find(link => link.path === 'products')?.submenu.map((submenu, index) => (
          <div className="admin-products__items" key={index}>
            <div className="">
              <CustomLinkActive
                to={`/admin/products/${submenu.path}`}
              >
                <div className="admin-products__subItem">
                  {
                    submenu.icon ?
                      <submenu.icon className="icon" />
                      :
                      <HomeOutlined className="icon" />
                  }
                </div>
                <div className="admin-products__title">
                  <div className="admin-products__title">
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

export default NavProduct
