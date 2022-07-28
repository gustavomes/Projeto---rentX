/* eslint-disable no-unused-vars */
// Vendors
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from "react"
import { MarkedDates, useMarkedDates } from "hooks/useMarkedDates"

// Components
import { Calendar } from "components/Calendar"
import { Modal, ModalProps } from "components/Modal"

import * as S from "./styles"
import { useForm } from "react-hook-form"
import { Button } from "components/Button"
import { useRouter } from "next/router"

// Types
export type ModalRentPeriodProps = {
  carId?: string
  setRentPeriod?: Dispatch<SetStateAction<MarkedDates>>
  unavailableDates?: string[]
  onChange?: (dates: MarkedDates) => void | Promise<void>
  onClose: () => void
} & Omit<ModalProps, "children" | "size">

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const ModalRentPeriod = (props: ModalRentPeriodProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { setRentPeriod, onChange, onClose, unavailableDates, ...modalProps } =
    props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()
  const { asPath } = useRouter()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [markedDates, setMarkedDates] = useState({} as MarkedDates)
  const { handleChangeMarkedDates } = useMarkedDates(
    markedDates,
    setMarkedDates
  )

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const onSubmit = useCallback(async () => {
    const hasDates = markedDates.end?.date && markedDates.start?.date

    if (hasDates) {
      setRentPeriod && setRentPeriod(markedDates)
      onChange && onChange(markedDates)
      onClose()
    }
  }, [markedDates, onChange, onClose, setRentPeriod])

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */
  useEffect(() => {
    setMarkedDates({})
  }, [asPath])

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
  return (
    <Modal size="lg" onClose={onClose} {...modalProps}>
      <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.CalendarContainer>
          <Calendar
            onChange={handleChangeMarkedDates}
            markedDates={{
              start: markedDates?.start?.date,
              end: markedDates?.end?.date
            }}
            unavailableDates={unavailableDates}
          />
        </S.CalendarContainer>

        <S.DatesContainer>
          <S.Dates>
            <S.Date>
              <S.DateLabel>DE</S.DateLabel>
              {markedDates.start?.label ? (
                <S.DateValue>{markedDates.start?.label}</S.DateValue>
              ) : (
                <S.DateLine />
              )}
            </S.Date>

            <S.Date>
              <S.DateLabel>ATÉ</S.DateLabel>

              {markedDates.end?.label ? (
                <S.DateValue>{markedDates.end?.label}</S.DateValue>
              ) : (
                <S.DateLine />
              )}
            </S.Date>
          </S.Dates>

          <Button
            label="Confirmar"
            width="100%"
            type="submit"
            isLoading={isSubmitting}
          />
        </S.DatesContainer>
      </S.Container>
    </Modal>
  )
}
