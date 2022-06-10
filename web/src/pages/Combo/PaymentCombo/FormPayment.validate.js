import * as yup from 'yup'


export const FormInfoPersonValidate = yup.object().shape({
    firstName: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    email: yup.string().required("El email es requerido").email("El email no es valido"),
    nDocument: yup.number().required("El numero de documento es requerido"),
    phone: yup.number().required("El numero de telefono es requerido"),
})


export const FormPaymentValidate = yup.object().shape({
    paymentMethod: yup.string().required("El metodo de pago es requerido"),
    operationNumber: yup.string().required("El numero de operacion es requerido"),
    paymentNote: yup.string().required("La nota es requerida"),
    paymentMount: yup.number().required("El monto es requerido"),
})
