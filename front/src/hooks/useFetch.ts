import { api } from "services/api"
import useSWR from "swr"

export function useFetch<Data = any, Error = any>(endpoint: string) {
  const { data, error } = useSWR<Data, Error>(endpoint, async (endpoint) => {
    const { data } = await api.get(endpoint)

    return data
  })

  return { data, error }
}
