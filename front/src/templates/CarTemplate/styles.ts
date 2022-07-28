import NextImage from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  height: 70vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: auto;
  }
`

/*
|-----------------------------------------------------------------------------
| Header
|-----------------------------------------------------------------------------
|
|
*/

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[14]};
  align-items: center;

  padding-bottom: ${({ theme }) => theme.space[6]};
  border-bottom: 1px solid #dedee3;
`

export const BackButton = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
`

export const HeaderCarInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const HeaderCarBrand = styled.sup`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.details};
`

export const HeaderCarTitle = styled.h1`
  font-family: "Archivo";
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;

  color: ${({ theme }) => theme.colors.subtitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 18px;
  }
`

export const HeaderCarRentPeriod = styled.sup`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.details};
`

export const HeaderCarRentPrice = styled.h2`
  font-family: "Archivo";
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;

  color: #dc1637;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 18px;
  }
`

/*
|-----------------------------------------------------------------------------
| Content
|-----------------------------------------------------------------------------
|
|
*/

export const Content = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 60vh;

  align-items: center;
  gap: ${({ theme }) => theme.space[24]};
  margin-top: ${({ theme }) => theme.space[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.space[6]};
    flex-direction: column;
  }
`

export const ImagesContainer = styled.div`
  width: 57%;
  height: 100%;
  min-height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: 50vh;
  }
`

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ImagesController = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[6]};
  align-items: center;
`

export const ImagesNavigationButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Bullets = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`

export const Bullet = styled.div<{
  isActive: boolean
}>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.details};

  width: 8px;
  height: 8px;

  border-radius: 50%;
  cursor: pointer;
`

/*
|-----------------------------------------------------------------------------
| Infos
|-----------------------------------------------------------------------------
|
|
*/

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  width: 43%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

export const InfosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[12]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ theme }) => theme.space[6]};
  }
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[2]};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const InfoIcon = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  border-right: 2px solid ${({ theme }) => theme.colors.white};
`

export const InfoValue = styled.h4`
  font-family: "Inter";

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #7a7a80;
  padding: ${({ theme }) => theme.space[4]};
`

/*
|-----------------------------------------------------------------------------
| About
|-----------------------------------------------------------------------------
|
|
*/

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
`

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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

export const Panel = styled.div``

export const AboutContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space[4]};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

export const City = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  font-weight: 500;
`

export const CityMarker = styled.div`
  height: 22px;
  width: 4px;

  background-color: ${({ theme }) => theme.colors.principal};
`

export const CityLabel = styled.span`
  color: ${({ theme }) => theme.colors.details};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
`

/*
|-----------------------------------------------------------------------------
| Rent Period
|-----------------------------------------------------------------------------
|
|
*/

export const Rent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`

export const RentPeriod = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RentPeriodDates = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};
`

export const RentPeriodDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const RentPeriodLabel = styled.sup`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.details};
`

export const RentPeriodValue = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const RentCalendarButton = styled.button`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.principal};

  transition: all 0.2s;
  border: none;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal_hover};
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0px;

  border-top: 1px solid #ebebf0;
`

export const RentPrices = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RentPrice = styled.h3`
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 39px;

  color: #03b352;
`
