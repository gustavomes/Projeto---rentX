// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { RegisterTemplate } from "templates/RegisterTemplate"

// Types
export type RegisterProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Register = (props: RegisterProps) => {
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <>
      <Head>
        <title>Rentx | Cadastre-se</title>
      </Head>

      <LayoutDefault>
        <RegisterTemplate />
      </LayoutDefault>
    </>
  )
}

export default Register

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
