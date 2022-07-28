import styled from "styled-components"

export const Container = styled.form`
  padding: ${({ theme }) => theme.space[20]} ${({ theme }) => theme.space[10]};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.background};

  height: 100%;
  overflow-y: scroll;
`

/*
|-----------------------------------------------------------------------------
| Header
|-----------------------------------------------------------------------------
|
|
*/

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: ${({ theme }) => theme.space[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Title = styled.h2`
  font-family: "Archivo";
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const CloseButton = styled.div`
  padding: ${({ theme }) => theme.space[2]};
  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`

/*
|-----------------------------------------------------------------------------
| CarType
|-----------------------------------------------------------------------------
|
|
*/

export const CarType = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`

export const CarTypeTitle = styled.h3`
  font-family: "Archivo";

  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const CarTypeOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  padding: ${({ theme }) => theme.space[1]};
`

export const CarTypeOption = styled.div<{
  isActive: boolean
}>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};

  padding: ${({ theme }) => theme.space[2]} 0;
  cursor: pointer;

  transition: all 0.2s;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.background : theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

export const CarTypeOptionLabel = styled.h5<{
  isActive: boolean
}>`
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.details};
`

/*
|-----------------------------------------------------------------------------
| Transmission
|-----------------------------------------------------------------------------
|
|
*/

export const Transmission = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`

export const TransmissionTitle = styled.h3`
  font-family: "Archivo";

  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const TransmissionOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  padding: ${({ theme }) => theme.space[1]};
`

export const TransmissionOption = styled.div<{
  isActive: boolean
}>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};

  padding: ${({ theme }) => theme.space[5]} 0;
  cursor: pointer;

  transition: all 0.2s;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.background : theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

export const TransmissionOptionLabel = styled.h5<{
  isActive: boolean
}>`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.title : theme.colors.details};
`

/*
|-----------------------------------------------------------------------------
| Buttons
|-----------------------------------------------------------------------------
|
|
*/

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};

  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

/*
|-----------------------------------------------------------------------------
| Buttons
|-----------------------------------------------------------------------------
|
|
*/

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`

export const ImagesTitle = styled.h3`
  font-family: "Archivo";

  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`
