// Vendors
import { CarCard } from "components/CarCard"
import { useFetch } from "hooks/useFetch"

import { CubeSpinner } from "react-spinners-kit"
import { CarType } from "types/car"

// Components
import * as S from "./styles"

// Types
export type HomeTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const HomeTemplate = (props: HomeTemplateProps) => {
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
  const { data, error } = useFetch<CarType[]>("/products")

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
  if (error) return <div>failed to load</div>
  if (!data)
    return (
      <S.LoadingContainer>
        <CubeSpinner size={100} frontColor="#DC1637" />
      </S.LoadingContainer>
    )

  return (
    <S.Container>
      <S.Header>
        <S.Title data-aos="fade-right" data-aos-delay="100">
          Carros disponíveis
        </S.Title>
        <S.Total data-aos="fade-right" data-aos-delay="200">
          Total de {data.length} carros
        </S.Total>
      </S.Header>

      <S.CarList data-aos="fade-right" data-aos-delay="300">
        {data.map((car) => {
          return <CarCard car={car} key={car.id} />
        })}
      </S.CarList>
    </S.Container>
  )
}
