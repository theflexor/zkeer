import {
  ColorBall_1,
  ColorBall_2,
  ColorBall_3,
  ColorBall_4,
} from "@assets/color_balls"
import { AppTitle } from "@components/app_title"
import { v4 as uuidv4 } from "uuid"

export const DetailSidebarExterior = () => {
  return (
    <div>
      <AppTitle>Экстерьер</AppTitle>
      <p className="text-secondary text-[16px]">Хрустально-белый</p>
      <p className="text-tertiary text-[16px] mt-[27px]">0 $</p>
      <div className="flex gap-3 flex-wrap mt-5">
        {[ColorBall_1, ColorBall_2, ColorBall_3, ColorBall_4].map((url) => {
          return <img key={uuidv4()} className="w-[31%]" src={url} />
        })}
      </div>
    </div>
  )
}
