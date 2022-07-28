import styled, { css } from "styled-components"

type Error = {
  error?: boolean
}

type FieldContainerProps = {
  width?: string
}

type IconContainerProps = {
  side: "right" | "left"
} & Error

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};

  width: ${({ width }) => width};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

export const InputContainer = styled.div<Error>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  height: ${({ theme }) => theme.space[16]};
  overflow: hidden;

  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.details};
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.principal} !important;
    `}
`

export const IconContainer = styled.div<IconContainerProps>`
  height: 100%;
  padding: ${({ theme }) => theme.space[6]};
  /* border-right: 2px solid ${({ theme }) => theme.colors.border}; */

  ${({ side }) =>
    side === "left" &&
    css`
      border-right: 2px solid ${({ theme }) => theme.colors.border};
    `}

  ${({ side, error }) =>
    error &&
    side === "left" &&
    css`
      border-right: 1px solid ${({ theme }) => theme.colors.principal} !important;
    `}

  ${({ side }) =>
    side === "right" &&
    css`
      border-left: 2px solid ${({ theme }) => theme.colors.border};
    `}

  ${({ side, error }) =>
    error &&
    side === "right" &&
    css`
      border-left: 1px solid ${({ theme }) => theme.colors.principal} !important;
    `}
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]};

  padding-left: ${({ theme }) => theme.space[6]};
  padding-right: ${({ theme }) =>
    theme.space[12]}; // to show password visibility toggle icon
`

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.details};
`

export const Input = styled.input`
  width: 100%;

  border: none;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.subtitle};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.details};
    opacity: 0.5;
  }
`

export const EyeContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: ${({ theme }) => theme.space[6]};
  cursor: pointer;
`

export const FieldError = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.principal};
`
