// Vendors

// Components
import { Button } from "components/Button"
import { STORAGE_EMAIL } from "context/AuthContext"
import { format } from "date-fns"
import { useCarType } from "hooks/useCarType"
import { useFetch } from "hooks/useFetch"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { FaCarAlt } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import { Booking } from "types/booking"
import { CarType } from "types/car"
import formatCurrency from "utils/formatCurrency"
import * as S from "./styles"

// Types
export type MeTemplateProps = {}

// type Tab = {
//   key: string
//   label: string
//   content: JSX.Element
// }

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const MeTemplate = (props: MeTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props
  const email = localStorage.getItem(STORAGE_EMAIL)

  const { data: bookings } = useFetch<Booking[]>(
    `/booking/users?email=${email}`
  )

  const { data: cars } = useFetch<CarType[]>("/products")

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { getIcon } = useCarType()
  const { push } = useRouter()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  // const [activeTab, setActiveTab] = useState({} as Tab)

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

  const fullBookings = useMemo(() => {
    return bookings
      ? bookings.map((booking) => {
          const bookingCar = cars?.find((car) => car.title === booking.product)

          return {
            ...booking,
            car: bookingCar
          }
        })
      : []
  }, [bookings, cars])

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      <S.Main>
        <S.Title>Agendamentos feitos</S.Title>

        <S.Bookings>
          {!!fullBookings.length &&
            fullBookings?.map((booking) => {
              if (!booking.car) return

              const { brand, title, price, fuelType, thumbnail, images } =
                booking.car!

              const Icon = getIcon(fuelType)

              const startDate = format(
                new Date(booking.startDate),
                "dd/MM/yyyy"
              )
              const endDate = format(new Date(booking.endDate), "dd/MM/yyyy")

              const mainImage = thumbnail || images[0]

              return (
                <S.Rent key={booking.id}>
                  <S.RentCar>
                    <S.RentCarDetails>
                      <S.RentCarDetail>
                        <S.RentCarLabel>{brand}</S.RentCarLabel>
                        <S.RentCarTitle>{title}</S.RentCarTitle>
                      </S.RentCarDetail>

                      <S.RentCarDetailsFlex>
                        <S.RentCarDetail>
                          <S.RentCarLabel>AO DIA</S.RentCarLabel>
                          <S.RentCarPrice>
                            {formatCurrency(+price)}
                          </S.RentCarPrice>
                        </S.RentCarDetail>
                        <Icon size={32} />
                      </S.RentCarDetailsFlex>
                    </S.RentCarDetails>
                    <S.RentCarImageContainer>
                      <S.RentCarImage src={mainImage} layout="fill" />
                    </S.RentCarImageContainer>
                  </S.RentCar>

                  <S.RentPeriod>
                    <S.RentPeriodLabel>Período DO ALUGUEL</S.RentPeriodLabel>
                    <S.RentPeriodValues>
                      <S.RentPeriodValue>{startDate}</S.RentPeriodValue>
                      <FiArrowRight color="#AEAEB3" />
                      <S.RentPeriodValue>{endDate}</S.RentPeriodValue>
                    </S.RentPeriodValues>
                  </S.RentPeriod>
                </S.Rent>
              )
            })}
        </S.Bookings>

        {!fullBookings.length && (
          <S.EmptyRents>
            <FaCarAlt
              size={60}
              color="#DC1637
"
            />
            <S.EmptyTitle>Você ainda não fez nenhuma reserva!</S.EmptyTitle>

            <Button
              label="Explorar carros"
              width="250px"
              variant="gray"
              outline
              onClick={() => push("/home")}
            />
          </S.EmptyRents>
        )}
      </S.Main>
    </S.Container>
  )
}
