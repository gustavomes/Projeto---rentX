/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import-helpers/order-imports */
// Vendors
import { useCallback, useEffect, useMemo, useState } from "react"
import { useTheme } from "styled-components"
import { useRouter } from "next/router"

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import {
  BiArrowFromBottom,
  BiChevronLeft,
  BiChevronRight
} from "react-icons/bi"
import { SiSpeedtest } from "react-icons/si"
import { CgArrowsExchangeAltV } from "react-icons/cg"

import { Button } from "components/Button"
import { useCarType } from "hooks/useCarType"
import formatCurrency from "utils/formatCurrency"

import * as S from "./styles"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Components

import { CarType } from "types/car"
import { IoMdPeople } from "react-icons/io"
import { RiSteering2Fill } from "react-icons/ri"
import { ModalRentPeriod } from "components/ModalRentPeriod"
import { MarkedDates } from "hooks/useMarkedDates"
import { FaChevronRight } from "react-icons/fa"
import { AiOutlineCalendar } from "react-icons/ai"
import { differenceInMinutes } from "date-fns"
import { api } from "services/api"
import { useIntervalDates } from "hooks/useIntervalDates"
import { STORAGE_EMAIL, useAuth } from "context/AuthContext"
import { useFetch } from "hooks/useFetch"
import { User } from "types/users"

// Types
export type CarTemplateProps = {
  car: CarType
}

type Tab = {
  key: string
  label: string
  content: JSX.Element
}

type SwiperManager = {
  swiper: SwiperCore
  activeIndex: number
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const CarTemplate = (props: CarTemplateProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { car } = props
  const {
    slug,
    title,
    description,
    brand,
    images,
    price,
    velocity,
    acceleration,
    fuelType,
    transmission,
    capacity,
    horsePower,
    unavailableDates,
    city
  } = car

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    colors: { text, subtitle }
  } = useTheme()

  const { back, asPath, push } = useRouter()
  const { getIcon, getLabel } = useCarType()
  const { getIntervalDates } = useIntervalDates()
  const { isAuthenticated } = useAuth()
  const { data: users } = useFetch<User[]>("/users")

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [manager, setManager] = useState<SwiperManager>({} as SwiperManager)
  const [isOpenRentModal, setIsOpenRentModal] = useState(false)
  const [activeTab, setActiveTab] = useState({} as Tab)
  const [rentPeriod, setRentPeriod] = useState({} as MarkedDates)
  const [isLoading, setIsLoading] = useState(false)

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  const submit = useCallback(async () => {
    const start = rentPeriod.start?.date?.toUTCString()
    const end = rentPeriod.end?.date?.toUTCString()

    if (start && end) {
      try {
        await api.post("/booking", {
          startDate: start,
          endDate: end,
          products: slug,
          users: localStorage.getItem(STORAGE_EMAIL)
        })

        await push("/success")
      } catch (err) {
        console.log(err)
      }
    }
  }, [push, rentPeriod, slug])

  const handleChangeSlide = useCallback(
    (index: number) => {
      manager.swiper.slideTo(index)

      setManager({
        ...manager,
        activeIndex: index
      })
    },
    [manager]
  )

  const Rent = useCallback(() => {
    const hasPeriod = rentPeriod.start?.date && rentPeriod.end?.date

    const minutes = hasPeriod
      ? differenceInMinutes(rentPeriod.end?.date!, rentPeriod.start?.date!)
      : 0

    const totalDays = minutes / 60 / 24
    const totalPrice = +price * totalDays

    return (
      <S.Rent>
        <S.RentPeriod>
          <S.RentPeriodDates>
            <S.RentPeriodDate>
              <S.RentPeriodLabel>DE</S.RentPeriodLabel>
              <S.RentPeriodValue>{rentPeriod?.start?.label}</S.RentPeriodValue>
            </S.RentPeriodDate>

            <FaChevronRight size={12} color="#AEAEB3" />

            <S.RentPeriodDate>
              <S.RentPeriodLabel>DE</S.RentPeriodLabel>
              <S.RentPeriodValue>{rentPeriod?.end?.label}</S.RentPeriodValue>
            </S.RentPeriodDate>
          </S.RentPeriodDates>

          <S.RentCalendarButton
            disabled={!isAuthenticated}
            onClick={() => setIsOpenRentModal(true)}
          >
            <AiOutlineCalendar size={24} color="white" />
          </S.RentCalendarButton>
        </S.RentPeriod>

        <S.Divider />

        <S.RentPrices>
          <S.RentPeriodDate>
            <S.RentPeriodLabel>TOTAL</S.RentPeriodLabel>
            <S.RentPeriodValue>
              R$ {price} x{totalDays} diárias
            </S.RentPeriodValue>
          </S.RentPeriodDate>
          <S.RentPrice>
            {formatCurrency(+totalPrice, {
              maximumFractionDigits: 0
            })}
          </S.RentPrice>
        </S.RentPrices>
      </S.Rent>
    )
  }, [isAuthenticated, price, rentPeriod])

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */
  const infos = useMemo(
    () => [
      {
        icon: SiSpeedtest,
        value: `${velocity}km/h`
      },
      {
        icon: BiArrowFromBottom,
        value: `${acceleration}s`
      },
      {
        icon: getIcon(fuelType),
        value: getLabel(fuelType)
      },
      {
        icon: CgArrowsExchangeAltV,
        value: transmission === "auto" ? "Automática" : "Manual"
      },
      {
        icon: IoMdPeople,
        value: +capacity === 1 ? `${capacity} pessoa` : `${capacity} pessoas`
      },
      {
        icon: RiSteering2Fill,
        value: `${horsePower} HP`
      }
    ],
    [
      acceleration,
      capacity,
      getIcon,
      getLabel,
      horsePower,
      transmission,
      fuelType,
      velocity
    ]
  )

  const tabs = useMemo(
    () => [
      {
        key: "about",
        label: "Sobre o carro",
        content: (
          <S.AboutContainer>
            <S.Description>{description}</S.Description>
            <S.City>
              <S.CityMarker />
              <S.CityLabel>Cidade atual:</S.CityLabel>
              {city}.
            </S.City>
          </S.AboutContainer>
        )
      },
      {
        key: "period",
        label: "PERíODO",
        content: <Rent />
      }
    ],
    [Rent, city, description]
  )

  useEffect(() => {
    if (rentPeriod.end) {
      return setActiveTab(tabs[1])
    }

    setActiveTab(tabs[0])
  }, [rentPeriod, tabs])

  useEffect(() => {
    if (rentPeriod.end && rentPeriod.start) {
      return setRentPeriod({})
    }
  }, [asPath])

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */

  return (
    <>
      <S.Container>
        <S.Header>
          <S.BackButton onClick={back}>
            <BiChevronLeft size={32} color={text} />
          </S.BackButton>

          <S.HeaderCarInfos>
            <S.HeaderCarBrand>{brand}</S.HeaderCarBrand>
            <S.HeaderCarTitle>{title}</S.HeaderCarTitle>
          </S.HeaderCarInfos>

          <S.HeaderCarInfos>
            <S.HeaderCarRentPeriod>AO DIA</S.HeaderCarRentPeriod>
            <S.HeaderCarRentPrice>
              {formatCurrency(+price, {
                maximumFractionDigits: 0
              })}
            </S.HeaderCarRentPrice>
          </S.HeaderCarInfos>
        </S.Header>

        <S.Content>
          <S.ImagesContainer>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              style={{
                width: "100%",
                height: "100%"
              }}
              onAfterInit={(s) =>
                setManager({
                  swiper: s,
                  activeIndex: 0
                })
              }
              onSlideChange={(s) =>
                setManager({ ...manager, activeIndex: s.activeIndex })
              }
              navigation={{
                nextEl: ".next",
                prevEl: ".prev"
              }}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              {images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <S.Image src={image} alt="" layout="fill" />
                  </SwiperSlide>
                )
              })}
            </Swiper>

            <S.ImagesController>
              <S.ImagesNavigationButton className="prev">
                <BiChevronLeft size={32} color={text} />
              </S.ImagesNavigationButton>

              <S.Bullets>
                {images.map((_, index) => {
                  const isActive = index === manager.activeIndex

                  return (
                    <S.Bullet
                      key={_}
                      onClick={() => handleChangeSlide(index)}
                      isActive={isActive}
                    />
                  )
                })}
              </S.Bullets>

              <S.ImagesNavigationButton className="next">
                <BiChevronRight size={32} color={text} />
              </S.ImagesNavigationButton>
            </S.ImagesController>
          </S.ImagesContainer>

          <S.InfosContainer>
            <S.InfosContent>
              <S.Infos>
                {infos.map((info) => {
                  const { icon: Icon, value } = info

                  return (
                    <S.Info key={value}>
                      <S.InfoIcon>
                        <Icon size={28} color={subtitle} />
                      </S.InfoIcon>
                      <S.InfoValue>{value}</S.InfoValue>
                    </S.Info>
                  )
                })}
              </S.Infos>

              <S.About>
                <S.Tabs>
                  {tabs.map((tab) => {
                    const { key, label } = tab
                    const isActive = key === activeTab.key

                    return (
                      <S.Tab
                        isActive={isActive}
                        key={label}
                        onClick={() => setActiveTab(tab)}
                      >
                        {label}
                      </S.Tab>
                    )
                  })}
                </S.Tabs>
                <S.Panel>{activeTab.content}</S.Panel>
              </S.About>
            </S.InfosContent>

            {rentPeriod.start ? (
              <Button
                width="100%"
                label="Alugar agora"
                variant="green"
                onClick={submit}
                isLoading={isLoading}
              />
            ) : (
              <Button
                width="100%"
                label={
                  isAuthenticated
                    ? "Escolher período do aluguel"
                    : "Entre para escolher seu carro!"
                }
                onClick={
                  isAuthenticated
                    ? () => setIsOpenRentModal(true)
                    : () => push("/login")
                }
              />
            )}
          </S.InfosContainer>
        </S.Content>
      </S.Container>

      <ModalRentPeriod
        isOpen={isOpenRentModal}
        onClose={() => setIsOpenRentModal(false)}
        setRentPeriod={setRentPeriod}
        unavailableDates={unavailableDates}
        carId={car.id}
      />
    </>
  )
}
