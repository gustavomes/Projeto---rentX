// Vendors

// Components
import { Button } from "components/Button"
import Image from "next/image"
import * as S from "./styles"

// Types
export type StartTemplateProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const StartTemplate = (props: StartTemplateProps) => {
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
    <>
      <S.Container>
        <S.Content>
          <S.Aside>
            <S.InfosContainer>
              <Image
                src="/logotipo.svg"
                alt="logo"
                width="200px"
                height="22px"
                data-aos="fade-right"
                data-aos-delay="200"
              />
              <S.Title data-aos="fade-right" data-aos-delay="300">
                Alugue um <br />
                carro de maneira <br />
                simples e f??cil
              </S.Title>

              <S.Description data-aos="fade-right" data-aos-delay="400">
                V??rios modelos para voc?? dirigir <br /> seguro, com conforto e
                seguran??a.
              </S.Description>
            </S.InfosContainer>
            <Button
              data-aos="fade-right"
              data-aos-delay="600"
              label="Come??ar agora"
              href="/home"
            />
          </S.Aside>

          <S.CarContainer data-aos="fade-left" data-aos-delay="600">
            <Image src="/start.png" alt="logo" layout="fill" />
          </S.CarContainer>
        </S.Content>
      </S.Container>
    </>
  )
}
