import styled from "styled-components"

export const Container = styled.div``

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ButtonAddMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.principal};

  width: ${({ theme }) => theme.space[12]};
  height: ${({ theme }) => theme.space[12]};

  border: none;
  outline: none;

  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal_hover};
  }
`

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const CarList = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
