/* eslint-disable no-unused-vars */
import { StylesConfig } from "react-select"
import styled from "styled-components"

export const FormControl = styled.div``

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.details};
`

export const FieldError = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.principal};
`

export const fieldSelectStyles: (isError: boolean) => StylesConfig = (
  isError: boolean
) => {
  return {
    control: (styles, state) => ({
      ...styles,
      border: isError
        ? "1px solid red"
        : state.isFocused
        ? "1px solid #AEAEB3 !important"
        : "1px solid #ebebf0",
      boxShadow: "none",
      background: "#FFFFFF",
      borderRadius: "1px",
      fontSize: "14px",
      padding: "0 12px;"
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#AEAEB3"
    }),
    container: (styles) => ({
      ...styles,
      border: "1px solid transparent",
      margin: "1px",
      borderRadius: "8px"
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      border: "1px solid #ebebf0",
      boxShadow: "none",
      background: "#FFFFFF",
      borderRadius: "1px",
      fontSize: "14px"
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#FFFFFF" : "#47474D",
      padding: "12px 20px",
      background: state.isSelected ? "#DC1637" : "#FFFFFF",
      "&:hover": {
        background: "#DC1637",
        color: "#FFF"
      }
    })
  }
}
