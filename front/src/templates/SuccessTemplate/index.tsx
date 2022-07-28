// Vendors

// Components
import { Button } from "components/Button"
import Image from "next/image"
import { useRouter } from "next/router"
import { BiCheck } from "react-icons/bi"
import * as S from "./styles"

// Types
export type SuccessTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const SuccessTemplate = (props: SuccessTemplateProps) => {
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
  const { push } = useRouter()

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

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      <Image src="/x.svg" layout="fill" alt="x" />
      <S.Content>
        <S.ContentContent>
          <BiCheck
            size={100}
            color="#03B252"
            data-aos="flip-left"
            data-aos-delay="50"
          />

          <S.Title data-aos="fade-right" data-aos-delay="200">
            Carro alugado!
          </S.Title>

          <S.Description data-aos="fade-right" data-aos-delay="300">
            Agora você só precisa ir até a concessionária da RentX pegar o seu
            automóvel.
          </S.Description>

          <Button
            label="Ok"
            width="120px"
            variant="gray"
            data-aos="fade-right"
            data-aos-delay="400"
            onClick={() => push("/home")}
          />
        </S.ContentContent>
      </S.Content>
    </S.Container>
  )
}
