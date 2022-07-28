// Vendors
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from "react"
import { FieldError } from "react-hook-form"
import { IconType } from "react-icons"
import { HiOutlineEye } from "react-icons/hi"
import { useTheme } from "styled-components"

// Components
import * as S from "./styles"

// Types
export type FieldTextProps = {
  label?: string
  rightIcon?: IconType
  leftIcon?: IconType
  isPassword?: boolean
  error?: FieldError

  // styles
  width?: string
} & InputHTMLAttributes<HTMLInputElement>

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FieldTextBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
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
    isPassword,
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
  const [type, setType] = useState(isPassword ? "password" : "text")

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
          <S.Input type={type} ref={ref} {...inputProps} />
        </S.Content>

        {isPassword && (
          <S.EyeContainer
            onClick={() =>
              setType((previousType) =>
                previousType === "text" ? "password" : "text"
              )
            }
          >
            <HiOutlineEye size={20} color={colors.text} />
          </S.EyeContainer>
        )}

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

export const FieldText = forwardRef(FieldTextBase)
