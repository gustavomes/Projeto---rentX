// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { HomeTemplate } from "templates/HomeTemplate"

// Types
export type HomeProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Home = (props: HomeProps) => {
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
        <title>Rentx | Início</title>
      </Head>

      <LayoutDefault>
        <HomeTemplate />
      </LayoutDefault>
    </>
  )
}

export default Home

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
