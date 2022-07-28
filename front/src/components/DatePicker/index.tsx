// Vendors
import { add } from "date-fns"
import pt from "date-fns/locale/pt"
import { CSSProperties } from "react"
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerProps
} from "react-datepicker"

// Components
import * as S from "./styles"

// Types
export type DatePickerProps = {
  containerStyle?: CSSProperties
} & ReactDatePickerProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

registerLocale("pt", pt)

export const DatePicker = (props: DatePickerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { containerStyle, ...reactDatePickerProps } = props

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
    <S.Container style={containerStyle}>
      <ReactDatePicker
        minDate={new Date()}
        startDate={new Date()}
        endDate={add(new Date(), {
          days: 5
        })}
        locale="pt"
        className="date-field-input"
        disabledKeyboardNavigation
        {...reactDatePickerProps}
      />
    </S.Container>
  )
}
