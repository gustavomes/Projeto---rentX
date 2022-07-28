// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { CarsTemplate } from "templates/CarsTemplate"

// Types
export type CarsProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Cars = (props: CarsProps) => {
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
        <title>Rentx | Carros</title>
      </Head>

      <LayoutDefault>
        <CarsTemplate />
      </LayoutDefault>
    </>
  )
}

export default Cars

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
