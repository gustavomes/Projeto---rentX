// Vendors
import { ReactNode, useCallback } from "react"
import ReactModal, { Props as ReactModalProps } from "react-modal"
ReactModal.setAppElement("#modal")

// Components

type Size = "sm" | "md" | "lg" | "xl" | "2xl"

// Types
export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  size: Size
  children: ReactNode
} & ReactModalProps

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Modal = (props: ModalProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { isOpen, onClose, size = "md", children, ...reactModalProps } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */

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
  const contentStyles = useCallback(() => {
    return {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "0px"
    }
  }, [])

  const getWidthBySize = useCallback((size: Size) => {
    const sizes: Record<Size, string> = {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em"
    }

    return sizes[size]
  }, [])

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
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          ...contentStyles(),
          width: getWidthBySize(size)
        },
        overlay: {
          zIndex: 999999999,
          backgroundColor: "#000000cc"
        }
      }}
      {...reactModalProps}
    >
      {children}
    </ReactModal>
  )
}
