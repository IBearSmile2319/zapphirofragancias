import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumb.css'
const BreadCrumb = () => {
    const location = useLocation()
    let path = location?.pathname?.split('/')
    return (
        <div className="admin-breadcrumb">
            {
                path.map((item, index) => {
                    if (item !== '' && item !== 'admin') {
                        return (
                                <Link key={index} to={`${path.slice(0, index + 1).join('/')
                                    }`}>
                                    <span>
                                        {
                                            item.charAt(0).toUpperCase() + item.slice(1)
                                        }
                                    </span>
                                    {
                                        index !== path.length - 1 &&
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 20 20" fill="currentColor" title=""><path d="M6.52776 18.4722C6.16165 18.1061 6.16165 17.5125 6.52776 17.1464L14.3375 9.33669C14.7036 8.97057 15.2972 8.97057 15.6633 9.33669C16.0294 9.70281 16.0294 10.2964 15.6633 10.6625L7.85359 18.4722C7.48747 18.8383 6.89388 18.8383 6.52776 18.4722Z"></path><path d="M6.52776 1.52459C6.16164 1.8907 6.16164 2.4843 6.52776 2.85041L14.3397 10.6624C14.7059 11.0285 15.2995 11.0285 15.6656 10.6624C16.0317 10.2963 16.0317 9.70269 15.6656 9.33657L7.85359 1.52459C7.48747 1.15847 6.89388 1.15847 6.52776 1.52459Z"></path></svg>

                                    }
                                </Link>
                        )
                    }
                    // <Link to="/admin/products">
                    //         <span>{path[index]}</span>
                    //     </Link>
                    // <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 20 20" fill="currentColor" title=""><path d="M6.52776 18.4722C6.16165 18.1061 6.16165 17.5125 6.52776 17.1464L14.3375 9.33669C14.7036 8.97057 15.2972 8.97057 15.6633 9.33669C16.0294 9.70281 16.0294 10.2964 15.6633 10.6625L7.85359 18.4722C7.48747 18.8383 6.89388 18.8383 6.52776 18.4722Z"></path><path d="M6.52776 1.52459C6.16164 1.8907 6.16164 2.4843 6.52776 2.85041L14.3397 10.6624C14.7059 11.0285 15.2995 11.0285 15.6656 10.6624C16.0317 10.2963 16.0317 9.70269 15.6656 9.33657L7.85359 1.52459C7.48747 1.15847 6.89388 1.15847 6.52776 1.52459Z"></path></svg>
                    //     <span>Add</span>
                })
            }
        </div>
    )
}

export default BreadCrumb
