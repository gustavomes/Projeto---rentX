import styled from "styled-components"

export const Container = styled.div``

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70vh;
`

/*
|-----------------------------------------------------------------------------
| Header
|-----------------------------------------------------------------------------
|
|
*/

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.space[6]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  margin-bottom: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
    align-items: flex-start;
  }
`

export const HeaderTitle = styled.h2`
  font-family: "Archivo";
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.title};
`

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.space[4]};

    width: 100%;
    justify-content: space-between;
  }
`

/*
|-----------------------------------------------------------------------------
| Dates
|-----------------------------------------------------------------------------
|
|
*/

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const DateLabel = styled.sub`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.details};
`

export const DateValue = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`

export const DateDivider = styled.span`
  color: ${({ theme }) => theme.colors.details};
  user-select: none;
`

/*
|-----------------------------------------------------------------------------
| Buttons
|-----------------------------------------------------------------------------
|
|
*/

export const IconButton = styled.button`
  padding: ${({ theme }) => theme.space[3]};

  cursor: pointer;

  border: none;
  background-color: ${({ theme }) => theme.colors.principal};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal_hover};
  }
`

export const Divider = styled.div`
  width: 1px;
  height: 24px;

  border: 1px solid #dedee3;
`

/*
|-----------------------------------------------------------------------------
| Cars
|-----------------------------------------------------------------------------
|
|
*/

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
