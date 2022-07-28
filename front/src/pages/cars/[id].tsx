// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { GetServerSideProps } from "next"
import Head from "next/head"
import { api } from "services/api"
import { CarTemplate, CarTemplateProps } from "templates/CarTemplate"
import { CarType } from "types/car"

// Types
export type CarsProps = CarTemplateProps

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Car = (props: CarsProps) => {
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
        <title>Rentx | {props.car.title}</title>
      </Head>

      <LayoutDefault showHeader={false} background="white">
        <CarTemplate {...props} />
      </LayoutDefault>
    </>
  )
}

export default Car

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id

  try {
    const { data } = await api.get<CarType>(`/products/${id}`)

    return {
      props: {
        car: data
      }
    }
  } catch {
    return {
      props: {},
      redirect: {
        destination: "/home"
      }
    }
  }
}
