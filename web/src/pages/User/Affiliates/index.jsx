import React, { useEffect } from 'react'
import './Affiliates.css'
import FeaturedUser from './FeaturedUser'
import { useDispatch, useSelector } from 'react-redux'
import { GetAffiliates } from '../../../action/affiliate.action'
import { Spin } from 'antd'
const Affiliates = () => {
  const dispatch = useDispatch()
  const { affiliates, loading, error } = useSelector(state => state.affiliate)
  useEffect(() => {
    dispatch(GetAffiliates())
  }, [])
  return (
    <>
      <div style={{
        flexGrow: 0,
        marginBottom: '2rem',
        marginTop: 0,
      }}></div>
      <Spin
        spinning={loading}
      >
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
                    {Object.keys(affiliates).length > 0 ?
                      affiliates?.affiliates.map((affiliate, index) => {
                        return <FeaturedUser key={index} affiliate={affiliate} />
                      }
                      )
                      :
                      <div>No tienes afiliados</div>
                    }
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Spin>
    </>
  )
}

export default Affiliates
