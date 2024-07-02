import { LogoZeekr } from "@assets/common"
import { ReactNode } from "react"

interface Props {
  achievements?: ReactNode
  widget?: ReactNode
}

export const Header: React.FC<Props> = ({ achievements, widget }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-24">
        <img className="h-[28px] w-[114px]" src={LogoZeekr} alt="" />
        {achievements}
      </div>
      {widget}
    </div>
  )
}
