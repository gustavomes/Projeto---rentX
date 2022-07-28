export type CarTypeType = "gasoline" | "electric" | "alcohol" | "diesel"

export type Transmission = "auto" | "manual"

export type CarType = {
  id: string
  description: string
  acceleration: string
  brand: string
  capacity: string
  horsePower: string
  price: number
  title: string
  slug: string
  thumbnail: string
  velocity: string
  images: string[]
  transmission: Transmission
  fuelType: CarTypeType
  category: string
  city: string
  unavailableDates: string[]
}
