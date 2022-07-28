import Image from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;

  min-height: 70vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    height: auto;
  }
`

/*
|-----------------------------------------------------------------------------
| Aside
|-----------------------------------------------------------------------------
|
|
*/

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[16]};

  border-right-width: 2px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    padding-right: 0;

    border-right-width: 0px;
    border-right-style: solid;
    border-right-color: transparent;
  }
`

export const AsideProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AsideProfileImageWrapper = styled.figure`
  width: ${({ theme }) => theme.space[48]};
  height: ${({ theme }) => theme.space[48]};

  position: relative;
  overflow: hidden;
  border-radius: 50%;
`

export const AsideProfileImage = styled(Image).attrs({})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

/*
|-----------------------------------------------------------------------------
| Tabs
|-----------------------------------------------------------------------------
|
|
*/

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  border-bottom: 1px solid #ebebf0;
`

export const Tab = styled.div<{
  isActive: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  text-transform: uppercase;

  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.subtitle : "#dedee3"};

  cursor: pointer;

  border-bottom: ${({ isActive }) => (isActive ? "2px" : "0px")} solid
    ${({ theme }) => theme.colors.principal};

  transition: color 0.2s;
`

/*
|-----------------------------------------------------------------------------
| Data
|-----------------------------------------------------------------------------
|
|
*/

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  width: 100%;
`

/*
|-----------------------------------------------------------------------------
| Main
|-----------------------------------------------------------------------------
|
|
*/

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.space[6]};
  width: 100%;
`

/*
|-----------------------------------------------------------------------------
| Rents
|-----------------------------------------------------------------------------
|
|
*/

export const Rents = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};

  width: 100%;
`

export const Title = styled.h2`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;

  color: ${({ theme }) => theme.colors.title};
`

export const Rent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const RentCar = styled.div`
  width: 100%;
  background: #fff;

  padding: ${({ theme }) => theme.space[10]};

  display: flex;
  justify-content: space-between;

  border: 1px solid #ebebf0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`

export const RentCarDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`

export const RentCarDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const RentCarDetailsFlex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[6]};
  align-items: center;
`

export const RentCarLabel = styled.h4`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #aeaeb3;
`

export const RentCarTitle = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  color: #47474d;
`

export const RentCarPrice = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;

  color: #dc1637;
`

export const RentCarImageContainer = styled.figure`
  aspect-ratio: 288 / 132;
  width: 50%;

  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RentCarImage = styled(Image)`
  object-fit: contain;
`

export const RentPeriod = styled.div`
  padding-left: ${({ theme }) => theme.space[8]};
  padding-right: ${({ theme }) => theme.space[8]};

  padding-bottom: ${({ theme }) => theme.space[4]};
  padding-top: ${({ theme }) => theme.space[4]};

  background: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: 1px solid #ebebf0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`

export const RentPeriodLabel = styled.h5`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;

  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #aeaeb3;
`

export const RentPeriodValues = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};
`

export const RentPeriodValue = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #47474d;
`

export const EmptyRents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  height: 100%;
`

export const EmptyTitle = styled.h5`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 59px;

  text-align: center;
`

export const Bookings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
