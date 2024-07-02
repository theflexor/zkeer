import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperClass } from "swiper/types"
import { v4 as uuidv4 } from "uuid"

import "swiper/css"
import { Controller, Pagination } from "swiper/modules"
import clsx from "clsx"

interface Props {
  variant?: "default" | "small"
  list: string[]
}

export const AppCarousel: React.FC<Props> = ({ list }) => {
  const [swiper, setSwiper] = React.useState<SwiperClass>()
  const [currentIndex, setCurrentIndex] = React.useState<number>(0)

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }

  return (
    <div className="w-full h-full">
      <div className="relative flex flex-col justify-between h-full ">
        <div className="md:flex-1 parent-container items-center">
          <Swiper
            modules={[Controller, Pagination]}
            spaceBetween={0}
            onSwiper={setSwiper}
            slidesPerView="auto"
          >
            {list.map((url, index) => (
              <SwiperSlide className="flex justify-center" key={index}>
                <img className={`object-contain h-[70vh] w-full`} src={url} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div>
          <AppButton
            className=" z-10 absolute top-1/2 left-0"
            onClick={() => {
              swiper?.slidePrev()
            }}
          >
            left
          </AppButton>
          <AppButton
            className=" z-10 absolute top-1/2 right-0"
            onClick={() => swiper?.slideNext()}
          >
            right
          </AppButton>
        </div> */}
        <div className="flex gap-5 my-3">
          {list.map((url, index) => (
            <div
              key={index}
              onClick={() => {
                goToSlide(index)
                setCurrentIndex(index)
              }}
            >
              <img
                className={clsx(
                  "w-14 h-14 object-contain",
                  index == currentIndex ? "border border-main" : ""
                )}
                key={uuidv4()}
                src={url}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
