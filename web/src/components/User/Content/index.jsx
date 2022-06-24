import React from 'react'
import './Content.css'
const Content = ({children}) => {
  return (
    <div className='user-content__container'>
      {children}
    </div>
  )
}

export default Content
