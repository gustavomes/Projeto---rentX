// Vendors
import { add, format, isWithinInterval } from "date-fns"
import ReactCalendar, {
  CalendarProps as ReactCalendarProps
} from "react-calendar"
import "react-calendar/dist/Calendar.css"

// Components
import * as S from "./styles"

// Types
export type CalendarProps = {
  markedDates?: {
    start?: Date
    end?: Date
  }
  unavailableDates?: string[]
} & ReactCalendarProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Calendar = (props: CalendarProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { markedDates, unavailableDates } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */

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
  const currentDate = format(new Date(), "dd-MM-yyyy")

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
      <ReactCalendar
        tileClassName={({ date }) => {
          if (format(date, "dd-MM-yyyy") === currentDate) {
            return "react-calendar-date-disabled"
          }

          if (unavailableDates) {
            const formattedUnavailableDates = unavailableDates.map(
              (date: string) => {
                return format(new Date(date), "dd-MM-yyyy")
              }
            )

            const isDisabled = formattedUnavailableDates.includes(
              format(date, "dd-MM-yyyy")
            )

            if (isDisabled) {
              return "react-calendar-date-disabled"
            }
          }

          const isStart = date.getTime() === markedDates?.start?.getTime()
          const isEnd = date.getTime() === markedDates?.end?.getTime()

          if (isStart) {
            return "react-calendar_start--date"
          }

          if (isEnd) {
            return "react-calendar_end--date"
          }

          if (markedDates?.start && markedDates.end) {
            const isInterval = isWithinInterval(date, {
              start: markedDates.start,
              end: markedDates.end
            })

            if (isInterval) {
              return "react-calendar_interval--date"
            }
          }

          return "date"
        }}
        locale="pt-BR"
        minDate={add(new Date(), {
          days: 0
        })}
        {...props}
      />
    </S.Container>
  )
}
