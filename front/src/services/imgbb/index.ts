import axios from "axios"

export const imgbb = axios.create({
  baseURL: "https://api.imgbb.com/1",
  params: {
    key: process.env.NEXT_PUBLIC_IMGBB_URL
  }
})
