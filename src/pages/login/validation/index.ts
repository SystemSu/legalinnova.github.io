import * as yup from 'yup'

export const schemaLoginValidate = yup.object().shape({
    Usuario:yup.string().trim().required('El Usuario es requerido').min(16,'El Usuario debe tener al menos 16 caracteres'),
    Password:yup.string().trim().required('La contraseña es requerido').min(8,'La contraseña debe tener al menos 8 caracteres')
})