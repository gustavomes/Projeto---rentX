// Vendors

// Components
import Head from "next/head"
import { SuccessTemplate } from "templates/SuccessTemplate"

// Types
export type SuccessProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Success = (props: SuccessProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

  return (
    <>
      <Head>
        <title>Rentx | Sucesso</title>
      </Head>
      <SuccessTemplate />
    </>
  )
}

export default Success

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
