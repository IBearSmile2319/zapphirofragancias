import React from 'react'
import {useSelector } from 'react-redux'
import CadCombo from './CadCombo.jsx'
import './ListCombo.css'
const ListCombo = () => {
    
    const { combos, loading } = useSelector(state => state.combo)
    return (
        <main className="combo-page">
            <section className="sdt-combo-banner">
                <div className="banner-combo">
                    <div className="banner-christ">
                        <div className="banner-full">
                            <div className="banner-full__container">
                                <div className="banner-full__content">
                                    <div className="sdt-text">
                                        <div className="combo-banner-content">
                                            <div className="combo-title">
                                                <h1>
                                                    <span>Comprá un Combo</span>
                                                    <br />
                                                    <span className='subtitle'>Unete a nuestra comunidad y disfruta de nuestros productos</span>
                                                </h1>
                                            </div>
                                            <p>
                                                🎁 También puedes regalar un combo a tus amigos y se lo podrán disfrutar en nuestra tienda.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        {combos && combos.map(combo => {
                            return <CadCombo
                                key={combo.id}
                                loading={loading}
                                combo={combo}
                            />
                        }
                        )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ListCombo
