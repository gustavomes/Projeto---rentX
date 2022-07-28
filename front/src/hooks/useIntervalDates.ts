import { differenceInMinutes, sub } from "date-fns"

export const useIntervalDates = () => {
  const getIntervalDates = (end: Date, start: Date) => {
    const minutes = differenceInMinutes(end, start)
    const days = minutes / 60 / 24 + 1

    const dates = Array.from({ length: days }).map((_, index) => {
      const date = sub(new Date(end), {
        days: index
      })

      return date.toUTCString()
    })

    return dates
  }

  return { getIntervalDates }
}
