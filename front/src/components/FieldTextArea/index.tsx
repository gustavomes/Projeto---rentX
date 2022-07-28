// Vendors
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from "react"
import { FieldError } from "react-hook-form"
import { IconType } from "react-icons"
import { useTheme } from "styled-components"

// Components
import * as S from "./styles"

// Types
export type FieldTextAreaProps = {
  label?: string
  rightIcon?: IconType
  leftIcon?: IconType
  isPassword?: boolean
  error?: FieldError

  // styles
  width?: string
} & InputHTMLAttributes<HTMLTextAreaElement>

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FieldTextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  FieldTextAreaProps
> = (props, ref) => {
  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { colors, space } = useTheme()

  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    label,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    error,
    width = space[96],
    ...inputProps
  } = props

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
    <S.FieldContainer width={width}>
      <S.InputContainer error={!!error}>
        {LeftIcon && (
          <S.IconContainer error={!!error} side="left">
            {<LeftIcon size={20} color={colors.text} />}
          </S.IconContainer>
        )}

        <S.Content>
          <S.Label>{label}</S.Label>
          <S.Input rows={5} ref={ref} {...inputProps} />
        </S.Content>

        {RightIcon && (
          <S.IconContainer error={!!error} side="right">
            {<RightIcon size={20} color={colors.text} />}
          </S.IconContainer>
        )}
      </S.InputContainer>

      {error?.message && <S.FieldError>{error.message}</S.FieldError>}
    </S.FieldContainer>
  )
}

export const FieldTextArea = forwardRef(FieldTextAreaBase)
