import React from 'react'
import './Affiliates.css'
import FeaturedUser from './FeaturedUser'
const Affiliates = () => {
  return (
    <>
      <div style={{
        flexGrow: 0,
        marginBottom: '2rem',
        marginTop: 0,
      }}></div>
      <div className="affiliate-main">
        <div className="affiliate-list">
          <div>
            <section className="list-group">
              <div className="zf-grid">
                <div className="comunity-title">
                  <b className="title">
                    Mis afiliados
                  </b>
                </div>
                <div className="featured-user-content">
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                  <FeaturedUser />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Affiliates
