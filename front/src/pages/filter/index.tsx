// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import Head from "next/head"
import { FilterTemplate } from "templates/FilterTemplate"

// Types
export type FilterProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Filter = (props: FilterProps) => {
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
        <title>Rentx | Filtre por datas</title>
      </Head>

      <LayoutDefault>
        <FilterTemplate />
      </LayoutDefault>
    </>
  )
}

export default Filter

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
