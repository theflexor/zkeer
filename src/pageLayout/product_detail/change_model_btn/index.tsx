import { CompareArrows_Icon } from "@assets/icons"
import { AppDropdown } from "@components/app_dropdown"
import { useEffect, useState } from "react"
import { getModels } from "../../../api/detail_page"

export const ChangeModelButton = () => {
  const [models, setModels] = useState()
  useEffect(() => {
    getModels().then((res) => setModels(res.data))
  }, [])
  console.log(models)

  return (
    <AppDropdown
      title={
        <div className="flex items-center gap-[5px]">
          <img src={CompareArrows_Icon} alt="" />
          Сменить модель
        </div>
      }
      items={models?.results || []}
    />
  )
}
