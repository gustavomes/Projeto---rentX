import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Tracker = styled.div`
  height: 36px;
  display: flex;
  width: 100%;
`

export const TrackerLine = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 0px;
  align-self: center;
`

export const Thumb = styled.div`
  width: 32px;
  height: 24px;

  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ThumbValue = styled.div`
  position: absolute;
  top: -28px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 14px;

  padding: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.principal};
`
