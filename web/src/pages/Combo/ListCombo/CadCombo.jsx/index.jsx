import { Button, Spin } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const CadCombo = ({
    loading,
    combo
}) => {
    const navigate = useNavigate()
    const selectCombo = (id) => {
        window.localStorage.setItem('comboSelect', id)
        navigate('payment')
    }
    return (
        <>
            <Spin spinning={loading}>
                {/* card */}
                <div className="combo-card">
                    <div className="relative">
                        <div className="tabs-plan">
                            <div className="">
                                <div className="">
                                    <article className="card-article">
                                        <div className="card-template">
                                            <header className="card-header">
                                                <h2>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 19 18" className="" id="" fill="currentColor" title=""><path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.7342V3.37498C14 2.33945 13.1605 1.49998 12.125 1.49998H6.875C5.83947 1.49998 5 2.33945 5 3.37498V3.7342H3.72152C2.77075 3.7342 2 4.50495 2 5.45572V5.99998C2 8.18447 3.55655 10.0054 5.62105 10.4142C6.28261 11.536 7.41693 12.3457 8.75 12.5694L8.74999 14.9978H5.74744C5.33322 14.9978 4.99744 15.3336 4.99744 15.7478C4.99744 16.162 5.33322 16.4978 5.74744 16.4978H8.74999V16.5L10.25 16.5V16.4978H13.2529C13.6671 16.4978 14.0029 16.162 14.0029 15.7478C14.0029 15.3336 13.6671 14.9978 13.2529 14.9978H10.25L10.25 12.5694C11.5831 12.3457 12.7174 11.536 13.379 10.4142C15.4434 10.0054 17 8.18447 17 5.99998V5.45572C17 4.50495 16.2293 3.7342 15.2785 3.7342H14ZM14 5.2342V8.1316C14 8.29429 13.9914 8.45497 13.9745 8.61319C14.8853 8.0982 15.5 7.12088 15.5 5.99998V5.45572C15.5 5.33338 15.4008 5.2342 15.2785 5.2342H14ZM5.02547 8.61319C5.00863 8.45497 5 8.29429 5 8.1316V5.2342H3.72152C3.59918 5.2342 3.5 5.33338 3.5 5.45572V5.99998C3.5 7.12088 4.11474 8.0982 5.02547 8.61319ZM12.5 3.37498V8.1316C12.5 9.78845 11.1569 11.1316 9.5 11.1316C7.84315 11.1316 6.5 9.78845 6.5 8.1316V3.37498C6.5 3.16788 6.66789 2.99998 6.875 2.99998H12.125C12.3321 2.99998 12.5 3.16788 12.5 3.37498Z"></path><path d="M11.0885 6.08143L10.2235 6.08139L9.95616 5.25874C9.81256 4.81685 9.1874 4.81685 9.0438 5.25874L8.77647 6.08139L7.91147 6.08143C7.44683 6.08144 7.25364 6.75797 7.62954 7.03109L8.32931 7.45759L8.06205 8.28026C7.91848 8.72217 8.42425 9.08963 8.80016 8.81653L9.49998 8.30813L10.1998 8.81653C10.5757 9.08963 11.0815 8.72217 10.9379 8.28026L10.6706 7.45759L11.3704 6.94913C11.7463 6.67601 11.5531 6.08144 11.0885 6.08143Z"></path></svg>
                                                        <span>
                                                            {combo.name}
                                                        </span>
                                                    </span>
                                                </h2>
                                                <span className="card-plan-price">
                                                    <span className="price-title">
                                                        <span className="price-official">
                                                            <span className="code">
                                                                S/
                                                            </span>
                                                            <span className='price'>{combo.price}</span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <p className="price-advice">
                                                    <i>
                                                        {combo.description}
                                                    </i>
                                                </p>
                                            </header>
                                            <div className="card-btn-content">
                                                <Button
                                                    className="card-btn"
                                                    onClick={() => selectCombo(combo._id)}
                                                >
                                                    ¡Comprar ahora!
                                                </Button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        </>
    )
}

export default CadCombo
