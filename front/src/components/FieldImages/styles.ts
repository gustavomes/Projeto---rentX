import NextImage from "next/image"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`

export const Content = styled.div`
  min-height: ${({ theme }) => theme.space[40]};
  width: 100%;

  border: 1px dashed ${({ theme }) => theme.colors.details};
  cursor: pointer;

  position: relative;
`

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;

  opacity: 0;

  position: absolute;
  top: 0;
  cursor: pointer;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.space[4]};

  height: 100%;
  cursor: pointer;
`

export const EmptyTitle = styled.p`
  font-family: "Archivo";

  font-weight: 500;
  font-size: 20px;
  line-height: 22px;

  color: ${({ theme }) => theme.colors.subtitle};
`

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[2]};

  padding: ${({ theme }) => theme.space[2]};
`

export const ImageContainer = styled.figure`
  aspect-ratio: 16/9;
  width: 100%;

  position: relative;

  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.details};

    .delete-image {
      opacity: 1;
    }
  }
`

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ImageDelete = styled.div`
  padding: ${({ theme }) => theme.space[1]};
  opacity: 0;

  position: absolute;
  transition: all 0.2s;

  top: 4px;
  right: 4px;
  z-index: 9999;

  background-color: ${({ theme }) => theme.colors.principal};

  display: flex;
  align-items: center;
`

export const Description = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[2]};
`

export const DescriptionMarker = styled.div`
  width: 5px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.principal};
`

export const DescriptionLabel = styled.sup``
