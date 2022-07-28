// Vendors

// Components
import { useAuth } from "context/AuthContext"
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { LoginTemplate } from "templates/LoginTemplate"
import { MeTemplate } from "templates/MeTemplate"

// Types
export type MeProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Me = (props: MeProps) => {
  const {} = props

  const { isAuthenticated } = useAuth()

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
        <title>Rentx | Meu perfil</title>
      </Head>

      <LayoutDefault
        header={{
          title: isAuthenticated ? `Bem-vindo!` : ""
        }}
      >
        {isAuthenticated ? <MeTemplate /> : <LoginTemplate />}
      </LayoutDefault>
    </>
  )
}

export default Me

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
