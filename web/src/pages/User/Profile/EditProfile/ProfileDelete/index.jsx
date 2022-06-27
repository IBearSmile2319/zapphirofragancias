import { Result } from 'antd'
import React from 'react'
import { SmileOutlined } from '@ant-design/icons'
import './ProfileDelete.css'

const ProfileDelete = () => {
  return (
    <main className="profiledelete-main">
      <h1>Eliminar cuenta</h1>
      <form className="form-profiledelete">
        <section>
          <div className="card-template">
            {/* proximanente */}
            <Result
              icon={<SmileOutlined />}
              title="Proximamente"
            />
          </div>
        </section>
      </form>
    </main>
  )
}

export default ProfileDelete
