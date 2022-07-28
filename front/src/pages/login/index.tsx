// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { LoginTemplate } from "templates/LoginTemplate"

// Types
export type LoginProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Login = (props: LoginProps) => {
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
        <title>Rentx | Login</title>
      </Head>
      <LayoutDefault>
        <LoginTemplate />
      </LayoutDefault>
    </>
  )
}

export default Login

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
