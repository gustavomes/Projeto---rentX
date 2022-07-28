/* eslint-disable no-unused-vars */
// Vendors

// Components
import { useToastStyles } from "hooks/useToastStyles"
import { ChangeEvent, DragEvent, useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FiTrash, FiUpload } from "react-icons/fi"
import { api } from "services/api"
import { imgbb } from "services/imgbb"
import * as S from "./styles"
import { ResponseImage } from "./types"

// Types
export type FieldImagesProps = {
  onChange: (images: string[]) => void
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FieldImages = (props: FieldImagesProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { onChange } = props

  const [images, setImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { getDefaultStyles } = useToastStyles()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */
  const handleUpload = useCallback(
    async (file: File) => {
      const formData = new FormData()
      formData.append("image", file)

      try {
        const { data } = await imgbb.post<ResponseImage>("/upload", formData)

        const imageURL = data.data.url
        const imageTitle = data.data.title

        api.post("/images", {
          url: imageURL,
          title: imageTitle
        })

        setImages((prevImages) => [...prevImages, imageURL])

        toast.success("Image enviada com sucesso", {
          style: getDefaultStyles()
        })
      } catch {
        toast.error(
          "Ocorreu um erro ao enviar a imagem, tente novamente mais tarde",
          {
            style: getDefaultStyles()
          }
        )
      } finally {
        setIsLoading(false)
      }
    },
    [getDefaultStyles]
  )

  const handleUploadByInput = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files

      if (files) {
        const file = files[0]

        handleUpload(file)
      }
    },
    [handleUpload]
  )

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.stopPropagation()
      e.preventDefault()

      const files = [...e.dataTransfer.files]
      const image = files[0]

      handleUpload(image)
    },
    [handleUpload]
  )

  const handleDeleteImage = useCallback((image: string) => {
    setImages((prevImages) => prevImages.filter((i) => i !== image))
  }, [])

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */
  useEffect(() => {
    onChange(images)
  }, [images, onChange])

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <S.Container>
      <S.Content>
        <S.InputContainer
          type="file"
          accept="image/*"
          onChange={handleUploadByInput}
          onDrop={onDrop}
        />

        {!images.length && (
          <S.EmptyContainer>
            <FiUpload size={40} />
          </S.EmptyContainer>
        )}

        {images.length ? (
          <S.ImagesGrid>
            {images.map((image) => {
              return (
                <S.ImageContainer key={image}>
                  <S.ImageDelete
                    onClick={() => handleDeleteImage(image)}
                    className="delete-image"
                  >
                    <FiTrash color="white" />
                  </S.ImageDelete>
                  <S.Image src={image} layout="fill" />
                </S.ImageContainer>
              )
            })}
          </S.ImagesGrid>
        ) : (
          <></>
        )}
      </S.Content>
      <S.Description>
        <S.DescriptionMarker></S.DescriptionMarker>
        <S.DescriptionLabel>
          Arraste imagens ou clique para explorar!
        </S.DescriptionLabel>
      </S.Description>
    </S.Container>
  )
}
