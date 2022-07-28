import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido")
    .required("Por favor, insira o e-mail."),
  password: yup.string().required("Por favor, insira a senha.")
})
