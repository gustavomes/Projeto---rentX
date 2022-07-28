import styled from "styled-components"

export const Container = styled.div``

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
  }
`

export const Title = styled.h1`
  font-family: "Archivo";
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const Total = styled.span`
  color: ${({ theme }) => theme.colors.text};

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const CarList = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
