import * as yup from "yup"

export const addCarSchema = yup.object().shape({
  title: yup.string().required("Modelo é um campo obrigatório!"),

  description: yup
    .string()
    .max(255, "Máximo de caracteres é 255!")
    .required("Descrição é um campo obrigatório!"),

  brand: yup.string().required("Marca é um campo obrigatório!"),

  price: yup
    .string()
    .required("Preço é um campo obrigatório")
    .test("is-positive", "Insira um valor válido", (value) => {
      return value ? +value > 0 : false
    }),

  velocity: yup
    .string()
    .required("Velocidade é um campo obrigatório")
    .test("is-positive", "Insira um valor válido", (value) => {
      return value ? +value > 0 : false
    }),

  capacity: yup
    .string()
    .required("Capacidade é um campo obrigatório")
    .test("is-positive", "Insira um valor válido", (value) => {
      return value ? +value > 0 : false
    }),

  horsePower: yup
    .string()
    .required("Potência em cavalos é um campo obrigatório")
    .test("is-positive", "Insira um valor válido", (value) => {
      return value ? +value > 0 : false
    }),

  acceleration: yup
    .string()
    .required("Aceleração  é um campo obrigatório")
    .test("is-positive", "Insira um valor válido", (value) => {
      return value ? +value > 0 : false
    }),

  city: yup
    .mixed()
    .transform((item: { label: string; value: string | number }) => item.value)
    .required("Cidade  é um campo obrigatório"),

  category: yup
    .mixed()
    .transform((item: { label: string; value: string | number }) => item.value)
    .required("Categoria  é um campo obrigatório")
})
