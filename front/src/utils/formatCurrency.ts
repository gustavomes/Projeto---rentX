const formatCurrency = (
  value: number,
  options?: Intl.NumberFormatOptions
): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    ...options
  }).format(value)
}

export default formatCurrency
