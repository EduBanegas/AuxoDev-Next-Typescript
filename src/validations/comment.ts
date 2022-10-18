import * as yup from 'yup'

export const commentSchema = yup.object().shape({
	owner: yup
		.string()
		.required('Nombre requerido')
		.min(3, 'El nombre requiere minimo 3 caracteres')
		.max(20, 'El nombre require maximo 20 caracteres'),
	comment: yup
		.string()
		.required('Comentario requerido')
		.min(4, 'El comentario requiere minimo 4 caracteres')
		.max(32, 'El comentario requiere maximo 32 caracteres')
})
