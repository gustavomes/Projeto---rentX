// Vendors

// Components
import { Button } from "components/Button"
import { Calendar } from "components/Calendar"
import { format } from "date-fns"
import { MarkedDates, useMarkedDates } from "hooks/useMarkedDates"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"

import * as S from "./styles"

// Types
export type FilterTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FilterTemplate = (props: FilterTemplateProps) => {
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
  const {
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()
  const { push } = useRouter()

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
      const start_date = format(new Date(markedDates.start?.date!), "MM-dd-yyy")

      const end_date = format(new Date(markedDates.end?.date!), "MM-dd-yyy")

      await push({
        pathname: "/cars",
        query: {
          start_date,
          end_date
        }
      })
    }
  }, [markedDates, push])

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
  return (
    <S.Container>
      <S.Content>
        <S.Title>Escolha uma data de início e fim do aluguel</S.Title>

        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.CalendarContainer>
            <Calendar
              onChange={handleChangeMarkedDates}
              markedDates={{
                start: markedDates?.start?.date,
                end: markedDates?.end?.date
              }}
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
        </S.FormContainer>
      </S.Content>
    </S.Container>
  )
}
