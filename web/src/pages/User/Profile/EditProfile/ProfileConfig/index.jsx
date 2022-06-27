import React from 'react'
import InputZF from '@components/InputZF'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import './ProfileConfig.css'
import { Button } from 'antd'
const ProfileConfig = () => {
  const { user } = useSelector(state => state.auth)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(user),
    defaultValues: {
      ...user
    }
  })
  return (
    <main className="profileconfig-main">
      <h1>Ajustes de la cuenta</h1>
      <form
        className="form-profile-config"
        id="form-file"
        encType="multipart/form-data"
      >
        <section>
          <div className="card-template">
            <div className="profile-edit-group">
              <InputZF
                label="Correo electrónico"
                name="email"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
                disabled={true}
              />
              <InputZF
                label="Numero de documento"
                name="nDocument"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
                disabled={true}
              />
              <InputZF
                label="Telefono"
                name="phone"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
                disabled={true}
              />
              <InputZF
                label="Codigo de promotor"
                name="promotion.code_invite"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
                disabled={true}
              />
              <InputZF
                label="Codigo de Invitacion"
                name="code_invite"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="Nombre de usuario"
                name="username"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="Contraseña"
                name="password"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="Repetir contraseña"
                name="passwordConfirm"
                register={register}
                placeholder=""
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <p>
                Si no quieres cambiar tu contraseña deja esto en blanco
              </p>
            </div>
            <div className="form-btn">
              <Button
                type="primary"
                htmlType="submit"
                className="btn"
              >
                Guardar cambios
              </Button>
            </div>
          </div>
        </section>
      </form>
    </main>
  )
}
export default ProfileConfig