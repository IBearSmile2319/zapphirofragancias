import React from "react";
import Logo from "../../assets/img/logo_black.png";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="SignIn-container">
        <div className="signIn-center">
          <span></span>
          <div className="signIn-center-form">
            <div className="signIn-title">
              <h2>INGRESAR A ZF SOCIOS</h2>
            </div>
            <div className="signIn-form">
              <div className="signIn-form-group">
                <label htmlFor="email">
                  <span>Nombre de usuario o correo electronico:</span>
                </label>
                <div className="signIn-form-group__input">
                  <input
                    type="text"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="signIn-form-group">
                <label htmlFor="password">
                  <span>Contraseña</span>
                  <span className="signIn-forgot-password">
                    <a href="#">¿olvidaste tu contraseña?</a>
                  </span>
                </label>
                <div className="signIn-form-group__input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <button>
                <span>INGRESAR</span>
              </button>
            </div>
            <div className="signIn-form__new-user">
              <span>¿No tienes una cuenta?</span>
              <a href="#">
                <span>Registrate.</span>
              </a>
            </div>
          </div>
          <div className="signIn-terms-conditions">
            <p>
              By signing in, you agree to our
              <a href="#">Terms of Service</a> and
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
