import styled from "styled-components"

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
  margin: 0 auto;

  gap: ${({ theme }) => theme.space[8]};
  padding: ${({ theme }) => theme.space[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

export const CalendarContainer = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    gap: ${({ theme }) => theme.space[4]};
  }
`

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  span {
    user-select: none;
    font-weight: bold;
    opacity: 0.5;

    font-size: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    flex-direction: row;
    gap: ${({ theme }) => theme.space[4]};
  }
`

export const Date = styled.div`
  width: 100%;

  margin-bottom: ${({ theme }) => theme.space[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

export const DateLabel = styled.label`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.details};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 10px;
  }
`

export const DateValue = styled.h5`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;

  color: ${({ theme }) => theme.colors.title};
  white-space: nowrap;

  margin-top: ${({ theme }) => theme.space[1]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`

export const DateLine = styled.div`
  width: 100%;
  height: 1px;

  border: 1px solid ${({ theme }) => theme.colors.details};
  margin-top: ${({ theme }) => theme.space[10]};

  opacity: 0.5;
`
