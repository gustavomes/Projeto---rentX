/* eslint-disable no-unused-vars */
import { useCallback } from "react"
import { FiDroplet } from "react-icons/fi"
import { HiOutlineLightningBolt } from "react-icons/hi"
import { IconType } from "react-icons/lib"
import { RiLeafLine } from "react-icons/ri"
import { CarTypeType } from "types/car"

export function useCarType() {
  const getIcon = useCallback((type: CarTypeType) => {
    const icons: Record<CarTypeType, IconType> = {
      gasoline: FiDroplet,
      electric: HiOutlineLightningBolt,
      alcohol: RiLeafLine,
      diesel: FiDroplet
    }

    return icons[type] || FiDroplet
  }, [])

  const getLabel = useCallback((type: CarTypeType) => {
    const icons: Record<CarTypeType, string> = {
      gasoline: "Gasolina",
      electric: "Elétrico",
      alcohol: "Álcool",
      diesel: "Diesel"
    }

    return icons[type]
  }, [])

  return { getIcon, getLabel }
}
