// Vendors

// Components
import { CarCard } from "components/CarCard"
import { FilterDrawer } from "components/FilterDrawer"
import { ModalRentPeriod } from "components/ModalRentPeriod"
import { format } from "date-fns"
import { pt } from "date-fns/locale"
import { useFetch } from "hooks/useFetch"
import { MarkedDates } from "hooks/useMarkedDates"
import { useRouter } from "next/router"
import { useCallback, useMemo, useState } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { IoOptionsOutline } from "react-icons/io5"
import { CubeSpinner } from "react-spinners-kit"
import { CarType } from "types/car"

import * as S from "./styles"

// Types
export type CarsTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const CarsTemplate = (props: CarsTemplateProps) => {
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

  const { query, push } = useRouter()

  const startDate = query.start_date
    ? format(new Date(query.start_date as string), "dd MMM yyyy", {
        locale: pt
      })
    : ""

  const endDate = query.end_date
    ? format(new Date(query.end_date as string), "dd MMM yyyy", {
        locale: pt
      })
    : ""

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const handleFilterByDates = useCallback(
    async (markedDates: MarkedDates) => {
      const start_date = format(new Date(markedDates.start?.date!), "MM-dd-yyy")

      const end_date = format(new Date(markedDates.end?.date!), "MM-dd-yyy")

      await push({
        pathname: "/cars",
        query: {
          ...query,
          start_date,
          end_date
        }
      })
    },
    [push, query]
  )

  const formatDate = useCallback((date: Date) => {
    return format(date, "dd-MM-yyyy")
  }, [])

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
  const filteredData = useMemo(
    () =>
      data?.filter((car) => {
        const {
          car: queryCar,
          city: queryCity,
          minPrice: queryMinPrice,
          maxPrice: queryMaxPrice,
          type: queryType,
          transmission: queryTransmission,
          start_date: queryStartDate,
          end_date: queryEndDate
        } = query

        const hasName = queryCar
          ? car.title
              .toLowerCase()
              .includes((queryCar as string)?.toLowerCase())
          : true

        const hasCity = queryCity
          ? car.city
              .toLowerCase()
              .includes((queryCity as string)?.toLowerCase())
          : true

        const hasPriceInRage =
          queryMinPrice && queryMaxPrice
            ? +car.price >= +queryMinPrice && +car.price <= +queryMaxPrice
            : true

        const hasFuelType = queryType
          ? car.fuelType.includes(queryType as string)
          : true

        const hasTransmission = queryTransmission
          ? car.transmission.includes(queryTransmission as string)
          : true

        const startDate = formatDate(new Date(queryStartDate as string))
        const endDate = formatDate(new Date(queryEndDate as string))

        const formattedCarUnavailableDates = car.unavailableDates.map((date) =>
          formatDate(new Date(date))
        )

        const hasUnavailableDates =
          formattedCarUnavailableDates.includes(startDate) ||
          formattedCarUnavailableDates.includes(endDate)

        return (
          hasName &&
          hasCity &&
          hasPriceInRage &&
          hasFuelType &&
          hasTransmission &&
          !hasUnavailableDates
        )
      }),
    [data, formatDate, query]
  )

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
          <S.HeaderTitle>
            {filteredData?.length} carros encontrados.
          </S.HeaderTitle>

          <S.HeaderOptions>
            <S.Date>
              <S.DateLabel>DE</S.DateLabel>
              <S.DateValue>{startDate}</S.DateValue>
            </S.Date>

            <S.DateDivider>{">"}</S.DateDivider>

            <S.Date>
              <S.DateLabel>ATÉ</S.DateLabel>
              <S.DateValue>{endDate}</S.DateValue>
            </S.Date>

            <S.IconButton onClick={() => setModalIsOpen(true)}>
              <AiOutlineCalendar size={24} color="white" />
            </S.IconButton>
            <S.Divider />

            <S.IconButton onClick={() => setFilterIsOpen(true)}>
              <IoOptionsOutline size={24} color="white" />
            </S.IconButton>
          </S.HeaderOptions>
        </S.Header>

        <S.CarList data-aos="fade-right" data-aos-delay="300">
          {filteredData?.map((car) => {
            return <CarCard car={car} key={car.id} />
          })}
        </S.CarList>
      </S.Container>

      <FilterDrawer
        isOpen={filterIsOpen}
        onClose={() => setFilterIsOpen(false)}
        direction="right"
        size="400px"
      />

      <ModalRentPeriod
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onChange={handleFilterByDates}
      />
    </>
  )
}
