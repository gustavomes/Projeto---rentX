import NextImage from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};

  position: relative;
  overflow: hidden;

  &:hover {
    main:before {
      background-color: #00000030;
      backdrop-filter: blur(4px);
    }

    .delete-button {
      transform: translateX(0);
    }

    main {
      cursor: pointer;
    }

    main:after {
      transform: scale(1);
    }

    img {
      transform: scale(0.6);
    }
  }
`

export const ImageContainer = styled.main`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 25;

    position: absolute;
    transition: all 0.2s;
  }

  &:after {
    content: "Ver detalhes";

    background-color: ${({ theme }) => theme.colors.shape};

    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.space[2]};

    white-space: nowrap;
    position: absolute;

    font-family: "Archivo";
    font-weight: 500;
    font-size: 14px;
    line-height: 13px;

    z-index: 26;
    transform: scale(0);
    transform-origin: center;

    transition: all 0.2s;
  }
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateX(200%);
  transition: all 0.2s;

  position: absolute;
  top: 4px;
  right: 4px;

  background-color: ${({ theme }) => theme.colors.principal};
  border: none;

  z-index: 999;
  padding: 8px;
  cursor: pointer;
`

export const ImageWrapper = styled.figure`
  width: 100%;
  aspect-ratio: 16 / 9;

  position: relative;
  padding: ${({ theme }) => theme.space[6]};
`

export const Image = styled(NextImage)`
  object-fit: contain;

  transition: transform 0.2s;
  transform: scale(0.8);
`

export const Infos = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[6]};

  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const BasicInfos = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[6]};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`

export const InfoLabel = styled.sup`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;

  color: ${({ theme }) => theme.colors.details};
  text-transform: uppercase;
`

export const InfoValue = styled.h4`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const Price = styled.h4`
  font-family: "Archivo";
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.principal};
`
