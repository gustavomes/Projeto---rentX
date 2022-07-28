// Vendors
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "components/Button"
import { FieldText } from "components/FieldText"
import { Text } from "components/Text"
import { Title } from "components/Title"
import { useAuth } from "context/AuthContext"
import Link from "next/link"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { AiFillCar, AiFillLock, AiOutlineMail } from "react-icons/ai"
import { IoMdPerson } from "react-icons/io"

// Components
import { registerSchema } from "./schema"
import * as S from "./styles"

// Types
export type FormRegisterProps = {}

type FormRegisterData = {
  name: string
  lastName: string
  cnh: string
  email: string
  password: string
  confirmPassword: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FormRegister = (props: FormRegisterProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors }
  } = useForm<FormRegisterData>({
    resolver: yupResolver(registerSchema)
  })

  const { signUp } = useAuth()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const onSubmit = useCallback(
    async ({ name, cnh, email, password, lastName }: FormRegisterData) => {
      await signUp(email, password, {
        name,
        lastName,
        cnh
      })
    },
    [signUp]
  )

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <Title title="Estamos quase lá." />
      <Text text="Faça seu login para começar uma experiência incrível." />

      <FieldText
        leftIcon={IoMdPerson}
        placeholder="Nome"
        {...register("name")}
        error={errors.name}
      />

      <FieldText
        leftIcon={IoMdPerson}
        placeholder="Sobrenome"
        {...register("lastName")}
        error={errors.lastName}
      />

      <FieldText
        leftIcon={AiFillCar}
        placeholder="CNH"
        {...register("cnh")}
        error={errors.cnh}
      />

      <FieldText
        leftIcon={AiOutlineMail}
        placeholder="E-mail"
        type="email"
        {...register("email")}
        error={errors.email}
      />

      <FieldText
        leftIcon={AiFillLock}
        placeholder="Senha"
        isPassword
        {...register("password")}
        error={errors.password}
      />

      <FieldText
        leftIcon={AiFillLock}
        placeholder="Confirme sua senha"
        isPassword
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

      <Button label="Cadastrar" type="submit" isLoading={isSubmitting} />

      <S.Login>
        Já tem uma conta? Acesse clicando{" "}
        <Link href="/login">
          <a>aqui</a>
        </Link>
        .
      </S.Login>
    </S.Container>
  )
}
