// Vendors

// Components

import { useCarType } from "hooks/useCarType"
import { useToastStyles } from "hooks/useToastStyles"
import Link from "next/link"
import { useCallback, useMemo } from "react"
import toast from "react-hot-toast"
import { FiTrash } from "react-icons/fi"
import { api } from "services/api"
import { mutate } from "swr"

import { CarType } from "types/car"
import formatCurrency from "utils/formatCurrency"

import * as S from "./styles"

// Types

export type CarCardProps = {
  car: CarType
  isAdmin?: boolean
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const CarCard = (props: CarCardProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { car, isAdmin } = props
  const { id, brand, images, price, title, fuelType, thumbnail } = car

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { getIcon } = useCarType()
  const Icon = getIcon(fuelType)
  const { getDefaultStyles } = useToastStyles()

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

  const handleDeleteCar = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/products/${id}`)

        mutate("/products")
        toast.success("Carro excluído com sucesso", {
          style: getDefaultStyles()
        })
      } catch {}
    },
    [getDefaultStyles]
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
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  const formattedThumbnail = useMemo(() => {
    const formattedThumbnail = thumbnail ?? images[0]

    return formattedThumbnail
  }, [images, thumbnail])

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      {isAdmin && (
        <S.DeleteButton
          className="delete-button"
          onClick={() => handleDeleteCar(id)}
        >
          <FiTrash size={20} color="white" />
        </S.DeleteButton>
      )}

      <Link href={`/cars/${id}`}>
        <a>
          <S.ImageContainer>
            <S.ImageWrapper>
              <S.Image src={formattedThumbnail} layout="fill" alt={title} />
            </S.ImageWrapper>
          </S.ImageContainer>
        </a>
      </Link>

      <S.Infos>
        <S.BasicInfos>
          <S.Info>
            <S.InfoLabel>{brand}</S.InfoLabel>
            <S.InfoValue>{title}</S.InfoValue>
          </S.Info>
          <S.Info>
            <S.InfoLabel>Ao dia</S.InfoLabel>
            <S.Price>
              {formatCurrency(+price, {
                maximumFractionDigits: 0
              })}
            </S.Price>
          </S.Info>
        </S.BasicInfos>
        {Icon && <Icon size={24} />}
      </S.Infos>
    </S.Container>
  )
}
