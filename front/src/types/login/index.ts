export type Login = {
  login: string
  token: string
}

export type Roles = "ROLE_MANAGERS"

export type LoginJWT = {
  authorities: Roles[]
  exp: number
  iat: number
}
