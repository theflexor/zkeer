import { DetailSidebarSpecification } from "./specification"
import { DetailSidebarExterior } from "./exterior"
import { DetailSidebarDescription } from "./description"

export const DetailSideBarCustomizationStep = () => {
  return (
    <div>
      <DetailSidebarSpecification />
      <div className="bg-tertiary h-[0.5px] my-[30px]"></div>
      <DetailSidebarExterior />
      <div className="bg-tertiary h-[0.5px] my-[30px]"></div>
      <DetailSidebarExterior />
      <div className="bg-tertiary h-[0.5px] my-[30px]"></div>
      <DetailSidebarDescription />
    </div>
  )
}
