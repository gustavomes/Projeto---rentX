// Vendors
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "components/Button"
import { FieldImages } from "components/FieldImages"
import { FieldSelect } from "components/FieldSelect"
import { FieldText } from "components/FieldText"
import { FieldTextArea } from "components/FieldTextArea"
import { useCarType } from "hooks/useCarType"
import { useFetch } from "hooks/useFetch"
import { useToastStyles } from "hooks/useToastStyles"
import { useCallback, useMemo, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import toast from "react-hot-toast"
import { IoMdClose } from "react-icons/io"
import { IconType } from "react-icons/lib"
import ReactModernDrawer from "react-modern-drawer"
import { api } from "services/api"
import { useTheme } from "styled-components"
import { mutate } from "swr"
import { CarTypeType } from "types/car"
import { Category } from "types/category"

import { City } from "types/cities"
import { addCarSchema } from "./schema"

// Components
import * as S from "./styles"

// Types
export type DrawerAddNewCarProps = {
  isOpen: boolean
  onClose: () => void
  direction: "right" | "left" | "top" | "bottom"
  size?: string
}

type Data = {
  title: string
  description: string
  acceleration: number
  brand: string
  price: string
  velocity: number
  capacity: number
  horsePower: number
  city: string
  category: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const DrawerAddNewCar = (props: DrawerAddNewCarProps) => {
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
    formState: { isSubmitting, errors },
    reset,
    control
  } = useForm<Data>({
    resolver: yupResolver(addCarSchema)
  })

  const {
    colors: { details, principal }
  } = useTheme()
  const { getIcon } = useCarType()
  const { getDefaultStyles } = useToastStyles()

  const { data: categories } = useFetch<Category[]>("/categories")
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

  const categoriesOptions = useMemo(
    () =>
      categories?.map((category) => {
        return {
          label: category.qualification,
          value: category.qualification
        }
      }),
    [categories]
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
  const [activeType, setActiveType] = useState(types[0].value)
  const [activeTransmission, setActiveTransmission] = useState(
    transmissions[0].value
  )
  const [images, setImages] = useState<string[]>([])

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  const formatBody = useCallback(
    (data: Data) => {
      const body = {
        ...data,
        thumbnail: images[0],
        images: images,
        transmission: activeTransmission,
        fuelType: [activeType]
      }

      return body
    },
    [activeTransmission, activeType, images]
  )

  const onSubmit = useCallback(
    async (data: Data) => {
      const body = formatBody(data)

      try {
        await api.post("/products", body)
        mutate("/products")

        toast.success("Carro criado com sucesso", {
          style: getDefaultStyles()
        })

        reset()
        onClose()
      } catch {
        toast.error(
          "Infelizmente, o carro não pôde ser criado. Por favor, tente novamente mais tarde.",
          {
            style: getDefaultStyles()
          }
        )
      }
    },
    [formatBody, getDefaultStyles, onClose, reset]
  )

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
          <S.Title>Novo carro</S.Title>
          <S.CloseButton onClick={onClose}>
            <IoMdClose size={30} color={details} />
          </S.CloseButton>
        </S.Header>

        <FieldText
          width="100%"
          label="Modelo"
          placeholder="Digite o modelo"
          error={errors.title}
          {...register("title")}
        />

        <FieldText
          width="100%"
          label="Marca"
          placeholder="Digite a marca"
          error={errors.brand}
          {...register("brand")}
        />

        <FieldTextArea
          width="100%"
          label="Descrição"
          placeholder="Descreva o carro"
          error={errors.description}
          {...register("description")}
        />

        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <FieldSelect
              placeholder="Selecione a categoria"
              label="Categoria"
              isLoading={!categoriesOptions?.length}
              options={categoriesOptions}
              error={errors.category}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field }) => (
            <FieldSelect
              placeholder="Selecione a cidade"
              label="Cidade"
              isLoading={!citiesOptions?.length}
              options={citiesOptions}
              error={errors.city}
              {...field}
            />
          )}
        />

        <FieldText
          width="100%"
          label="Preço por dia"
          placeholder="Digite o preço"
          error={errors.price}
          {...register("price")}
        />

        <FieldText
          width="100%"
          label="Velocidade em km/h"
          placeholder="Digite a velocidade"
          type="number"
          error={errors.velocity}
          {...register("velocity")}
        />

        <FieldText
          width="100%"
          label="Aceleração"
          placeholder="Digite a aceleração"
          type="number"
          error={errors.acceleration}
          {...register("acceleration")}
        />

        <FieldText
          width="100%"
          label="Capacidade"
          placeholder="Digite a capacidade"
          type="number"
          error={errors.capacity}
          {...register("capacity")}
        />

        <FieldText
          width="100%"
          label="Potência em cavalos (HP)"
          placeholder="Digite a velocidade em km/h"
          type="number"
          error={errors.horsePower}
          {...register("horsePower")}
        />

        {/* <FieldText
          width="100%"
          label="Cidade"
          placeholder="Escolha a cidade"
          error={errors.city}
          {...register("city")}
        /> */}

        <S.CarType>
          <S.CarTypeTitle>Combustível</S.CarTypeTitle>

          <S.CarTypeOptions>
            {types.map((option) => {
              const { icon: Icon, label, value } = option
              const isActive = value === activeType

              return (
                <S.CarTypeOption
                  key={value}
                  onClick={() => setActiveType(value)}
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
                  onClick={() => setActiveTransmission(value)}
                >
                  <S.TransmissionOptionLabel isActive={isActive}>
                    {label}
                  </S.TransmissionOptionLabel>
                </S.TransmissionOption>
              )
            })}
          </S.TransmissionOptions>
        </S.Transmission>

        <S.Images>
          <S.ImagesTitle>Imagens</S.ImagesTitle>

          <FieldImages onChange={(newImages) => setImages(newImages)} />
        </S.Images>

        <S.Buttons>
          <Button
            label="Adicionar carro"
            width="100%"
            type="submit"
            isLoading={isSubmitting}
          />
        </S.Buttons>
      </S.Container>
    </ReactModernDrawer>
  )
}
