import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.space[4]};
`

export const Content = styled.div`
  max-width: 929px;
  max-height: 582px;

  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    z-index: 0;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`

export const ContentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  z-index: 9999;
`

export const Title = styled.h1`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 54px;
  line-height: 59px;

  margin-top: ${({ theme }) => theme.space[14]};

  text-align: center;
  color: #ffffff;
`

export const Description = styled.p`
  max-width: 385px;
  text-align: center;

  margin-top: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[12]};
`
