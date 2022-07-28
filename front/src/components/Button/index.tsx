// Vendors
import Link from "next/link"
import { ButtonHTMLAttributes } from "react"
import { ClassicSpinner } from "react-spinners-kit"
import { useTheme } from "styled-components"

// Components
import * as S from "./styles"

// Types
export type ButtonProps = {
  label: string
  variant?: "red" | "green" | "gray"
  outline?: boolean
  isLoading?: boolean
  href?: string
  width?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Button = (props: ButtonProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { space } = useTheme()

  const {
    label,
    color,
    variant = "red",
    outline,
    isLoading,
    href,
    width = space[96],
    ...buttonProps
  } = props

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
  return href ? (
    <Link href={href}>
      <a style={{ textDecoration: "none" }}>
        <S.Container
          color={color}
          variant={variant}
          outline={outline}
          isLoading={isLoading}
          width={width}
          {...buttonProps}
        >
          {isLoading && <ClassicSpinner size={20} />}
          {label}
        </S.Container>
      </a>
    </Link>
  ) : (
    <S.Container
      color={color}
      variant={variant}
      outline={outline}
      isLoading={isLoading}
      width={width ?? space[16]}
      {...buttonProps}
    >
      {isLoading && <ClassicSpinner size={20} />}
      {label}
    </S.Container>
  )
}
