// Vendors

// Components
import { CarCard } from "components/CarCard"
import { DrawerAddNewCar } from "components/DrawerAddNewCar"
import { useFetch } from "hooks/useFetch"
import { useState } from "react"
import { FiPlus } from "react-icons/fi"
import { CubeSpinner } from "react-spinners-kit"
import { CarType } from "types/car"
import * as S from "./styles"

// Types
export type AdminTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const AdminTemplate = (props: AdminTemplateProps) => {
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
  const { data } = useFetch<CarType[]>("/products")

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
  if (!data)
    return (
      <S.LoadingContainer>
        <CubeSpinner size={100} frontColor="#DC1637" />
      </S.LoadingContainer>
    )

  return (
    <>
      <S.Container>
        <S.Header>
          <S.HeaderInfos>
            <h1>Painel administrativo</h1>
            <p>Gerencie os produtos disponíveis!</p>
          </S.HeaderInfos>
          <S.ButtonAddMore onClick={() => setIsDrawerOpen(true)}>
            <FiPlus color="white" size={20} />
          </S.ButtonAddMore>
        </S.Header>

        <S.CarList data-aos="fade-right" data-aos-delay="300">
          {data.map((car) => {
            return <CarCard car={car} key={car.id} isAdmin />
          })}
        </S.CarList>
      </S.Container>

      <DrawerAddNewCar
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        direction="right"
        size="500px"
      />
    </>
  )
}
