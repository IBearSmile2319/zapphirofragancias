import * as yup from 'yup'

export const FormProductValidate = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    description: yup.string().required("La descripcion es requerida"),
    price: yup.number().required("El precio es requerido"),
    stock: yup.number().required("El stock es requerido"),
})