// Vendors

// Components
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react"
import { FieldError } from "react-hook-form"
import ReactSelect, { Props as ReactSelectProps } from "react-select"
import * as S from "./styles"

// Types
export type FieldSelectProps = {
  name: string
  label?: string | ReactNode
  error?: FieldError
} & ReactSelectProps
/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

const FieldSelectBase: ForwardRefRenderFunction<any, FieldSelectProps> = (
  props,
  ref
) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { name, error, ...reactSelectProps } = props

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
    <S.FormControl>
      {/* <S.Label htmlFor={name}>{label}</S.Label> */}

      <ReactSelect
        name={name}
        id={name}
        menuPlacement="bottom"
        styles={S.fieldSelectStyles(!!error)}
        {...reactSelectProps}
        ref={ref}
      />

      {error && <S.FieldError>{error.message}</S.FieldError>}
    </S.FormControl>
  )
}

export const FieldSelect = forwardRef(FieldSelectBase)
