import { format } from "date-fns"
import { pt } from "date-fns/locale"
import { Dispatch, SetStateAction } from "react"

type MarkedDate = {
  time: number
  label: string
  date?: Date
}

export type MarkedDates = {
  start?: MarkedDate
  end?: MarkedDate
}

export function useMarkedDates(
  markedDates: MarkedDates,
  setMarkedDates: Dispatch<SetStateAction<MarkedDates>>
) {
  const handleChangeMarkedDates = (date: Date) => {
    const formattedDate = {
      time: date.getTime(),
      label: format(date, "dd 'de' MMMM", {
        locale: pt
      }),
      date
    }

    if (!markedDates.start) {
      setMarkedDates((prevMarkedDate) => {
        return {
          start: formattedDate,
          ...prevMarkedDate
        }
      })
    }

    if (markedDates.start) {
      if (formattedDate.time > markedDates.start.time) {
        setMarkedDates((prevMarkedDate) => {
          return {
            ...prevMarkedDate,
            end: formattedDate
          }
        })
      }

      if (formattedDate.time < markedDates.start.time) {
        setMarkedDates((prevMarkedDate) => {
          return {
            start: formattedDate,
            end: prevMarkedDate.start
          }
        })
      }

      if (formattedDate.time === markedDates.start.time) {
        setMarkedDates((prevMarkedDate) => {
          return {
            end: prevMarkedDate.end
          }
        })
      }
    }

    if (markedDates.end) {
      if (formattedDate.time === markedDates.end.time) {
        setMarkedDates((prevMarkedDate) => {
          return {
            start: prevMarkedDate.start
          }
        })
      }
    }
  }

  return { handleChangeMarkedDates }
}
