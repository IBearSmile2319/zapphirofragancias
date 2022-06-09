import * as yup from 'yup'


export const FormPaymentValidate = yup.object().shape({
    firstName: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    email: yup.string().required("El email es requerido").email("El email no es valido"),
    nDocument: yup.number().required("El numero de documento es requerido"),
    phone: yup.number().required("El numero de telefono es requerido"),

}).required("Todos los campos son requeridos")