import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const Content = styled.div<{
  background: string
}>`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 80px);
  max-height: calc(100vh);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100vw;
  }

  background: ${({ background }) => background};
`

export const ContentContainer = styled.div`
  max-height: calc(100vh);
  overflow-y: auto;
`

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.header.maxWidth};
  margin: ${({ theme }) => theme.space[10]} auto;
  padding: 0 ${({ theme }) => theme.space[4]};

  min-height: 100vh;
`
