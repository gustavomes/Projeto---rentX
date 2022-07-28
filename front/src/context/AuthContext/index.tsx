/* eslint-disable no-unused-vars */
// Vendors
import { useToastStyles } from "hooks/useToastStyles"
import jwt from "jwt-decode"
import { useRouter } from "next/dist/client/router"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react"
import toast from "react-hot-toast"
import { api } from "services/api"
import { useTheme } from "styled-components"
import { Login, LoginJWT } from "types/login"

// Types
import { AuthContextType } from "./types"

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProviderProps = {
  children: ReactNode
}

export const STORAGE_KEY = "@rentx:token"
export const STORAGE_EMAIL = "@rentx:email"

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */

  const { children } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { push } = useRouter()

  const { getDefaultStyles } = useToastStyles()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const saveTokenOnLocalStorage = useCallback((token: string) => {
    localStorage.setItem(STORAGE_KEY, token)
  }, [])

  const removeTokenLocalStorage = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const saveEmailOnLocalStorage = useCallback((email: string) => {
    localStorage.setItem(STORAGE_EMAIL, email)
  }, [])

  const removeEmailLocalStorage = useCallback(() => {
    localStorage.removeItem(STORAGE_EMAIL)
  }, [])

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const {
          data: { token }
        } = await api.post<Login>("/login", {
          email,
          password
        })

        const user = jwt<LoginJWT>(token)

        saveTokenOnLocalStorage(token)
        setIsAuthenticated(true)
        saveEmailOnLocalStorage(email)

        api.defaults.headers.common.Authorization = token

        if (user.authorities.includes("ROLE_MANAGERS")) {
          setIsAdmin(true)
        }

        await push("/home")
        toast.success("Login feito com sucesso", {
          style: getDefaultStyles()
        })
      } catch {
        toast.error("Verifique suas credenciais!", {
          style: getDefaultStyles()
        })
      }
    },
    [getDefaultStyles, push, saveEmailOnLocalStorage, saveTokenOnLocalStorage]
  )

  const logout = useCallback(async () => {
    try {
      removeTokenLocalStorage()
      removeEmailLocalStorage()

      setIsAuthenticated(false)
      setIsAdmin(false)

      await push("/home")

      toast.success("Logout feito com sucesso", {
        style: getDefaultStyles()
      })
    } catch {
      toast.success("Erro ao sair da plataforma.", {
        style: getDefaultStyles()
      })
    }
  }, [getDefaultStyles, push, removeEmailLocalStorage, removeTokenLocalStorage])

  const signUp = useCallback(
    async (
      email: string,
      password: string,
      data: {
        name: string
        lastName: string
        cnh: string
      }
    ) => {
      try {
        await api.post("/users", {
          name: data.name,
          lastName: data.lastName,
          email,
          password,
          roles: "USERS"
        })

        toast.success("Usuário cadastrado com sucesso", {
          style: getDefaultStyles()
        })

        push("/login")
      } catch {
        toast.error(
          "Usuário já cadastrado na plataforma, verifique as credenciais e tente novamente. ",
          {
            style: getDefaultStyles()
          }
        )
      }
    },
    [getDefaultStyles, push]
  )

  const recoveryAuth = useCallback(() => {
    try {
      const token = localStorage.getItem(STORAGE_KEY)
      const email = localStorage.getItem(STORAGE_EMAIL)

      if (token) {
        const user = jwt<LoginJWT>(token)

        setIsAuthenticated(true)
        api.defaults.headers.common.Authorization = token

        if (user.authorities.includes("ROLE_MANAGERS")) {
          setIsAdmin(true)
        }
      }
    } catch {}
  }, [])

  useEffect(() => {
    recoveryAuth()
  }, [recoveryAuth])

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
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext)

  return value
}
