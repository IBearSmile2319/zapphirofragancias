import { HomeOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const NavProduct = () => {
  return (
    <nav className='admin-products__nav'>
      <div className="admin-products__navigation">
        <div className="admin-products__items">
          <div className="">
            <Link to="/admin/products">
              <div className="admin-products__subItem">
                <HomeOutlined className="icon" />
              </div>
              <div className="admin-products__title">
                <div className="admin-products__title">
                  <p>Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-products__items">
          <div className="">
            <Link to="/admin/products/add">
              <div className="admin-products__subItem">
                <HomeOutlined className="icon" />
              </div>
              <div className="admin-products__title">
                <div className="admin-products__title">
                  <p>Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-products__items">
          <div className="">
            <Link to="/">
              <div className="admin-products__subItem">
                <HomeOutlined className="icon" />
              </div>
              <div className="admin-products__title">
                <div className="admin-products__title">
                  <p>Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-products__items">
          <div className="">
            <Link to="/">
              <div className="admin-products__subItem">
                <HomeOutlined className="icon" />
              </div>
              <div className="admin-products__title">
                <div className="admin-products__title">
                  <p>Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="admin-products__items">
          <div className="">
            <Link to="/">
              <div className="admin-products__subItem">
                <HomeOutlined className="icon" />
              </div>
              <div className="admin-products__title">
                <div className="admin-products__title">
                  <p>Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavProduct
