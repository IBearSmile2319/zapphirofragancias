import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SignInAdmin } from '@action/auth.action';
import { Link, Navigate, useLocation} from 'react-router-dom'
import Logo from '@assets/img/Logo.png'
import { message, Spin } from 'antd'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import './AdminLogin.css'
const AdminLogin = () => {
  let location = useLocation()
  let from = location.state?.from?.pathname || '/admin/dashboard'
  const dispatch = useDispatch();
  const { loading, admin } = useSelector(state => state.auth)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      message.error('por favor ingrese su correo y contraseña')
      return
    }
    dispatch(SignInAdmin({ email, password }));
  }
  return (
    <Spin spinning={loading}
      tip="Cargando..."
      size='large'
    >
      {
        admin.logged && <Navigate to={from} replace />
      }
      <div className='admin-signin__container'>
        <div className="admin-dignin__content">
          <div className="admin-signin-logo">
            <Link to='/'>
              <img src={Logo} alt="zaffiro fragancias" type="img/svg" />
            </Link>
            <span className="admin-signin-logo__title">ADMIN ZF SOCIOS</span>
          </div>
          <form action="" onSubmit={handleLogin}>
            <div className="admin-form__group">
              <label htmlFor="">
                Usuario o Correo electronico
              </label>
              <div className="admin-form__input">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario o correo..."
                />
              </div>

            </div>
            <div className="admin-form__group">
              <label htmlFor="">Contraseña</label>
              <div className="admin-form__input">
                <input
                  type={
                    eye ? 'password' : 'text'
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="****"
                />
                {eye ?
                  <EyeOutlined className="icon" onClick={() => setEye(false)} />
                  : <EyeInvisibleOutlined className="icon" onClick={() => setEye(true)} />
                }
              </div>
            </div>

            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </Spin>
  )
}

export default AdminLogin
