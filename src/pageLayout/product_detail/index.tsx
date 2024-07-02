import { Garanty_year_5 } from "@assets/achievements"
import { Header } from "@components/app_header"
import { AppCarousel } from "@components/app_corusel"
import { ChangeModelButton } from "./change_model_btn"
import {
  ZeekrBack,
  ZeekrFront,
  ZeekrInterBack,
  ZeekrInterFront,
  ZeekrSide,
} from "@assets/products"
import { RoadMap } from "./road_map"
import { Achievements } from "./achievements"
import { DetailSidebar } from "./detail_sidebar"
import { FormProvider } from "react-hook-form"
import { useSubmitFormData } from "./utils/useSubmit"
import { useState } from "react"

export enum DetailDirection {
  CUSTOMIZATION = "customization",
  SUBMIT_FORM = "submit_form",
}

export const ProductDetailLayout = () => {
  const [step, setStep] = useState(
    DetailDirection.CUSTOMIZATION
  )
  const { form, handlePost } = useSubmitFormData()
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handlePost)}>
        <div className="flex flex-col h-screen">
          <div className="flex-1 flex flex-col lg:flex-row">
            <div className=" max-lg:flex-initial  flex-1 pt-7 px-7 flex flex-col ">
              <Header
                achievements={
                  <Achievements
                    className="max-lg:hidden"
                    list={[{ image: Garanty_year_5 }]}
                  />
                }
                widget={<ChangeModelButton />}
              />
              <AppCarousel
                list={[
                  ZeekrFront,
                  ZeekrBack,
                  ZeekrSide,
                  ZeekrInterBack,
                  ZeekrInterFront,
                ]}
              />
              <Achievements
                className="flex flex-col  lg:hidden mt-6"
                list={[{ image: Garanty_year_5 }, { image: Garanty_year_5 }]}
              />
            </div>
            <div className=" bg-main_bg flex-[0.55] max-lg:mt-6 overflow-y-none lg:overflow-y-scroll lg:max-h-[90vh]">
              <DetailSidebar step={step} setStep={setStep} />
            </div>
          </div>
          <div className="border-t border-main_bg lg:h-[10vh]">
            <RoadMap step={step} setStep={setStep} />
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
