import { useTheme } from "styled-components"

export const useToastStyles = () => {
  const { colors } = useTheme()

  const getDefaultStyles = () => {
    return {
      boxShadow: "none",
      backgroundColor: colors.shape,
      color: "#FFF",
      padding: "1rem",
      borderRadius: "0"
    }
  }

  return { getDefaultStyles }
}
