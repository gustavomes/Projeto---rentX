// Vendors
import { useAuth } from "context/AuthContext"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { FiLock } from "react-icons/fi"
import { IoMdCar, IoMdHome, IoMdPerson } from "react-icons/io"

// Components
import * as S from "./styles"

// Types
export type SidebarProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Sidebar = (props: SidebarProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
   */
  const { pathname } = useRouter()
  const { isAdmin } = useAuth()

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

  const items = useMemo(
    () => [
      {
        icon: IoMdHome,
        href: "/home"
      },
      {
        icon: IoMdCar,
        href: "/filter"
      },
      {
        icon: IoMdPerson,
        href: "/me"
      }
    ],
    []
  )

  const adminItems = useMemo(
    () => [
      ...items,
      {
        icon: FiLock,
        href: "/admin"
      }
    ],
    [items]
  )

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      <Link href="/">
        <a>
          <S.LogoContainer>
            <Image src="/logo.svg" width="30px" height="18px" alt="Logo" />
          </S.LogoContainer>
        </a>
      </Link>

      <S.Menu>
        {(isAdmin ? adminItems : items).map((item) => {
          const { icon: Icon, href } = item

          const isActive =
            href === "/" ? href === pathname : pathname.includes(href)

          return (
            <Link href={href} key={href} passHref>
              <S.MenuItemContainer isActive={isActive}>
                <Icon size={24} color="white" />
              </S.MenuItemContainer>
            </Link>
          )
        })}
      </S.Menu>
    </S.Container>
  )
}
