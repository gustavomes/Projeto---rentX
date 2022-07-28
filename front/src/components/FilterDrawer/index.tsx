// Vendors
import { Button } from "components/Button"
import { FieldRange } from "components/FieldRange"
import { FieldSelect } from "components/FieldSelect"
import { FieldText } from "components/FieldText"
import { useCarType } from "hooks/useCarType"
import { useFetch } from "hooks/useFetch"
import { useRouter } from "next/router"
import { useCallback, useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { IoMdClose } from "react-icons/io"
import { IconType } from "react-icons/lib"
import ReactModernDrawer from "react-modern-drawer"
import { useTheme } from "styled-components"
import { CarTypeType } from "types/car"
import { City } from "types/cities"
import formatCurrency from "utils/formatCurrency"

// Components
import * as S from "./styles"

// Types
export type FilterDrawerProps = {
  isOpen: boolean
  onClose: () => void
  direction: "right" | "left" | "top" | "bottom"
  size?: string
}

type Data = {
  name: string
  city: {
    label: string
    value: string
  }
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FilterDrawer = (props: FilterDrawerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { isOpen, onClose, direction = "right", size = "250px" } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    control,
    reset
  } = useForm<Data>()

  const {
    colors: { details, principal }
  } = useTheme()
  const { getIcon } = useCarType()
  const { push, query } = useRouter()

  const { data: cities } = useFetch<City[]>("/cities")

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */
  const types: Array<{
    value: CarTypeType
    icon: IconType
    label: string
  }> = useMemo(
    () => [
      {
        value: "gasoline",
        icon: getIcon("gasoline"),
        label: "Gasolina"
      },
      {
        value: "electric",
        icon: getIcon("electric"),
        label: "Elétrico"
      },
      {
        value: "alcohol",
        icon: getIcon("alcohol"),
        label: "Álcool"
      },
      {
        value: "diesel",
        icon: getIcon("diesel"),
        label: "Diesel"
      }
    ],
    [getIcon]
  )

  const transmissions = useMemo(
    () => [
      {
        value: "auto",
        label: "Automático"
      },
      {
        value: "manual",
        label: "Manual"
      }
    ],
    []
  )

  const citiesOptions = useMemo(
    () =>
      cities?.map((city) => {
        return {
          label: city.name,
          value: city.name
        }
      }),
    [cities]
  )

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [activeType, setActiveType] = useState<string | undefined>()
  const [activeTransmission, setActiveTransmission] = useState<
    string | undefined
  >()

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const formatPrice = useCallback((price: number) => {
    return formatCurrency(price, {
      maximumFractionDigits: 0
    })
  }, [])

  const onSubmit = useCallback(
    async (data: Data) => {
      const name = data.name
      const city = data.city

      await push(
        {
          pathname: "/cars",
          query: {
            ...query,
            car: name,
            city: city?.value,
            type: activeType,
            transmission: activeTransmission,
            minPrice: priceRange[0],
            maxPrice: priceRange[1]
          }
        },
        undefined,
        {
          shallow: true
        }
      )
    },
    [activeTransmission, activeType, priceRange, push, query]
  )

  const clearFilter = useCallback(async () => {
    setActiveType(undefined)
    setActiveTransmission(undefined)

    reset({
      city: {
        value: undefined,
        label: undefined
      },
      name: ""
    })

    await push(
      {
        pathname: "/cars",
        query: {
          start_date: query.start_date,
          end_date: query.end_date
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }, [push, query.end_date, query.start_date, reset])

  /*
  |-----------------------------------------------------------------------------
  | Effects
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
  return (
    <ReactModernDrawer
      open={isOpen}
      onClose={onClose}
      direction={direction}
      size={size}
    >
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          <S.Title>Filtro</S.Title>
          <S.CloseButton onClick={onClose}>
            <IoMdClose size={30} color={details} />
          </S.CloseButton>
        </S.Header>

        <FieldText
          width="100%"
          placeholder="Qual carro você deseja?"
          {...register("name")}
        />

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <FieldSelect
              placeholder="Selecione a cidade"
              label="Categoria"
              isLoading={!citiesOptions?.length}
              options={citiesOptions}
              {...field}
            />
          )}
        />

        <S.PriceRange>
          <S.PriceRangeHeader>
            <S.PriceRangeLabel>Preço ao dia</S.PriceRangeLabel>
            <S.PriceRangeValue>
              {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
            </S.PriceRangeValue>
          </S.PriceRangeHeader>

          <FieldRange
            values={priceRange}
            onChange={(values) => setPriceRange(values)}
            minValue={0}
            maxValue={5000}
            showThumbValue={false}
            step={50}
          />
        </S.PriceRange>

        <S.CarType>
          <S.CarTypeTitle>Combustível</S.CarTypeTitle>

          <S.CarTypeOptions>
            {types.map((option) => {
              const { icon: Icon, label, value } = option
              const isActive = value === activeType

              return (
                <S.CarTypeOption
                  key={value}
                  onClick={() =>
                    isActive ? setActiveType(undefined) : setActiveType(value)
                  }
                  isActive={isActive}
                >
                  <Icon size={24} color={isActive ? principal : details} />
                  <S.CarTypeOptionLabel isActive={isActive}>
                    {label}
                  </S.CarTypeOptionLabel>
                </S.CarTypeOption>
              )
            })}
          </S.CarTypeOptions>
        </S.CarType>

        <S.Transmission>
          <S.TransmissionTitle>Transmissão</S.TransmissionTitle>
          <S.TransmissionOptions>
            {transmissions.map((option) => {
              const { label, value } = option
              const isActive = option.value === activeTransmission

              return (
                <S.TransmissionOption
                  key={value}
                  isActive={isActive}
                  onClick={() =>
                    isActive
                      ? setActiveTransmission(undefined)
                      : setActiveTransmission(value)
                  }
                >
                  <S.TransmissionOptionLabel isActive={isActive}>
                    {label}
                  </S.TransmissionOptionLabel>
                </S.TransmissionOption>
              )
            })}
          </S.TransmissionOptions>
        </S.Transmission>

        <S.Buttons>
          <Button
            label="Filtrar resultados"
            width="100%"
            type="submit"
            isLoading={isSubmitting}
          />

          <Button
            label="Limpar dados"
            width="100%"
            variant="gray"
            outline
            type="reset"
            onClick={clearFilter}
          />
        </S.Buttons>
      </S.Container>
    </ReactModernDrawer>
  )
}
