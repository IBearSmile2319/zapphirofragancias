import * as yup from 'yup'

export const FormLoginValidate = yup.object().shape({
    email: yup.string().required("El email/usuario es requerido"),
    password: yup.string().required("La contraseña es requerida"),
}
)
