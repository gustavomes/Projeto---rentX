// Vendors

// Components
import { useAuth } from "context/AuthContext"
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { AdminTemplate } from "templates/AdminTemplate"

// Types
export type AdminProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Admin = (props: AdminProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props
  const { isAdmin } = useAuth()
  const { push } = useRouter()

  useEffect(() => {
    !isAdmin && push("/home")
  }, [isAdmin, push])

  return (
    <>
      <Head>
        <title>Rentx | Administração</title>
      </Head>

      <LayoutDefault>{isAdmin && <AdminTemplate />}</LayoutDefault>
    </>
  )
}

export default Admin

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
