import * as yup from 'yup'

export const FormOrderValidate = yup.object().shape({
    operationNumber: yup.string().required("El numero de operacion es requerido"),
    paymentNote: yup.string().required("La nota es requerida"),
    paymentMount: yup.number().required("El monto es requerido"),
})