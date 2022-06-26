import { UserOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import DatePickerZF from '@components/DatePickerZF'
import InputZF from '@components/InputZF'
import SelectZF from '@components/SelectZF'
import TextAreaZF from '@components/TextAreaZF'
import './ProfileInfo.css'
const ProfileInfo = () => {
  const [file, setFile] = useState(null)
  const { user } = useSelector(state => state.auth)
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(user),
    defaultValues: {
      ...user
    }
  })
  useEffect(() => {
    setFile(user.avatar)
  }, [user])
  const ChangeDate = (date, dateString) => {
    setValue('birthday', dateString)
  };
  const onSubmit = (data) => {
    const formData = {
      ...data
    }
    if (file) {
      formData.avatar = file
    }
    console.log(formData)
  }

  return (
    <main className="profileinfo-main">
      <h1>Editar perfil</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-profile-info"
        id="form-file"
        encType="multipart/form-data" >
        <section>
          <div className="card-template">
            {/* avatar */}
            <div className="edit-profile-avatar">
              <div className="user-avatar">
                <div className="img-content">
                  {
                    file ?
                      <img
                        className="img-avatar"
                        src={
                          file ? URL.createObjectURL(file) :
                            'https://www.w3schools.com/howto/img_avatar.png'
                        } alt="avatar" />
                      :
                      <UserOutlined className="img-avatar icon" />
                  }
                </div>
              </div>
              <label htmlFor="avatar" className="btn-photo" title='Actualizar foto de perfil'>
                <input type="file" name="avatar" id="avatar"
                  accept="image/png, image/jpeg, image/jpg"

                  onChange={(e) => {
                    const file = e.target.files[0]
                    // type file jpg and png
                    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
                    if (!isJpgOrPng) {
                      message.error('Solo se permiten archivos JPG o PNG')
                      return
                    }
                    // 200kb accept
                    const isLt2M = file.size / 1024 / 1024 < 2
                    if (!isLt2M) {
                      message.error('El archivo debe ser menor a 2MB')
                      return
                    }
                    setFile(file)
                  }}
                  style={{
                    display: 'none'
                  }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 548.165 548.165" className="svg-icon fill white-color big s-cursor-pointer" id="" fill="currentColor" title=""><g><path d="M526.76,131.045c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826c-3.618-9.325-10.229-17.368-19.846-24.128c-9.613-6.757-19.462-10.138-29.551-10.138H200.996c-10.088,0-19.939,3.381-29.552,10.138c-9.613,6.76-16.225,14.803-19.842,24.128l-14.56,38.826H73.089c-20.179,0-37.401,7.139-51.678,21.413C7.137,145.32,0,162.544,0,182.721v255.813c0,20.178,7.137,37.404,21.411,51.675c14.277,14.277,31.5,21.416,51.678,21.416h401.989c20.177,0,37.397-7.139,51.675-21.416c14.273-14.271,21.412-31.497,21.412-51.675V182.721C548.169,162.544,541.03,145.32,526.76,131.045z M364.446,400.993c-25.029,25.03-55.147,37.548-90.362,37.548s-65.331-12.518-90.362-37.548c-25.031-25.026-37.544-55.151-37.544-90.358c0-35.218,12.517-65.333,37.544-90.364c25.028-25.031,55.148-37.544,90.362-37.544s65.333,12.516,90.362,37.544c25.03,25.028,37.545,55.146,37.545,90.364C401.991,345.842,389.477,375.964,364.446,400.993z"></path><path d="M274.084,228.403c-22.651,0-42.018,8.042-58.102,24.128c-16.084,16.084-24.126,35.448-24.126,58.104c0,22.647,8.042,42.014,24.126,58.098c16.084,16.081,35.45,24.123,58.102,24.123c22.648,0,42.017-8.042,58.101-24.123c16.084-16.084,24.127-35.45,24.127-58.098c0-22.655-8.043-42.019-24.127-58.104C316.102,236.446,296.732,228.403,274.084,228.403z"></path></g></svg>
              </label>
            </div>
            {/* end avatar */}
            {/* form grup */}
            <div className="profile-edit-group">
              <InputZF
                label="Nombres"
                name="firstName"
                register={register}
                placeholder="Nombres"
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="Apellidos"
                name="lastName"
                register={register}
                placeholder="Apllidos"
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="Ciudad"
                name="city"
                register={register}
                placeholder="Ciudad"
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <InputZF
                label="País"
                name="country"
                register={register}
                placeholder="País"
                errors={errors}
                type="text"
                labelClass="zf-label"
                required={false}
              />
              <SelectZF
                label="Género"
                labelClass="zf-label"
                {...register("gender")}
                values={[
                  "-Seleccionar-",
                  "Hombre",
                  "Mujer",
                  "Otro",
                  "No quiero especificar",
                ]} />

              <DatePickerZF
                label="Fecha de nacimiento"
                labelClass="zf-label"
                name="birthday"
                register={register}
                date=""
                setDate={ChangeDate}
                errors={errors}
                required={false}
              />
              <div className="grid-2">
                <TextAreaZF
                  label="Biografía"
                  labelClass="zf-label"
                  name="biography"
                  register={register}
                  errors={errors}
                  required={false}
                />
              </div>
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

export default ProfileInfo
