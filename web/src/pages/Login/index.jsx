import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { SignIn } from "@action/auth.action";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Button, Spin } from "antd";
import { yupResolver } from '@hookform/resolvers/yup'
import LogoBlack from '../../assets/img/logo_black.png'
import LogoWhite from '../../assets/img/log_zf.png'
import InputZF from '@components/InputZF'
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FormLoginValidate } from "./FormLogin.validate";
const Login = () => {
  let location = useLocation()
  let from = location.state?.from?.pathname || '/home'
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(true);

  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(
      FormLoginValidate
    )
  })


  useEffect(() => {
    setLoadingLogin(loading)
  }, [loading])


  const onSubmit = (data) => {
    console.log(data)
    const formData = {
      email: data.email,
      password: data.password
    }
    dispatch(SignIn(formData));
  }

  return (
    <>

      <Spin
        spinning={loadingLogin}
        tip="Cargando..."
        size="large"
      >
        {
          user.logged ? <Navigate to={from} replace />
            :
            <div className="SignIn-container">
              <div className="signIn-center">
                <div className="signIn-center-form">
                  <div className="signIn-title">
                    <img src={LogoWhite} alt="" />
                  </div>
                  <form className="signIn-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="signIn-form-content">
                      <InputZF
                        label="E-mail / Usuario"
                        name="email"
                        labelClass="labelzf"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="text"
                        required={true}
                        disabled={false}
                        className="form-input"
                      />
                      <InputZF
                        label={
                          <>
                            <span>Contraseña</span>
                            <span className="signIn-forgot-password">
                              <a href="#">¿olvidaste tu contraseña?</a>
                            </span>
                          </>
                        }
                        labelClass="labelzf"
                        name="password"
                        register={register}
                        placeholder=""
                        errors={errors}
                        type="password"
                        required={true}
                        disabled={false}
                        className="form-input"
                      />
                    </div>
                    <Button
                      htmlType="submit"
                      className="signIn-form-button"
                    >
                      <span>INGRESAR</span>
                    </Button>
                  </form>
                  <div className="signIn-form__new-user">
                    <span>¿No tienes una cuenta?</span>
                    <Link to="/combo">
                      <span>Registrate.</span>
                    </Link>
                  </div>
                </div>
                <div className="signIn-terms-conditions">
                  <p>
                    Por favor, lee nuestros <Link to="/">Términos y Condiciones</Link>
                  </p>
                </div>
              </div>
            </div>
        }
      </Spin>
    </>
  );
};

export default Login;
