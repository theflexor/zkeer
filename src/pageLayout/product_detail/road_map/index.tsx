import { AppButton } from "@components/app_button"
import { DetailDirection } from ".."

interface Props {
  step: DetailDirection
  setStep: (b: DetailDirection) => void
}

export const RoadMap: React.FC<Props> = ({ step, setStep }) => {
  return (
    <div className="flex items-center flex-wrap h-full p-3  lg:p-1 justify-between w-full">
      <div className="flex-1 h-full items-center gap-6 justify-center px-10 hidden lg:flex">
        <div className="flex items-center gap-2">
          <div className="border  rounded-full w-8 h-8 flex items-center justify-center">
            1
          </div>
          <p className="">Выбрать комплектацию</p>
        </div>
        <div className="h-[1px] bg-tertiary w-16" />
        <div className="flex items-center gap-2">
          <div className="border  rounded-full w-8 h-8 flex items-center justify-center">
            2
          </div>
          <p>Заполнить данные</p>
        </div>
        <div className="h-[1px] bg-tertiary w-16" />
        <div className="flex items-center gap-2 ">
          <div className="border  rounded-full w-8 h-8 flex items-center justify-center">
            3
          </div>
          <p>Оставить заявку</p>
        </div>
      </div>
      <div className="flex-1 lg:flex-[0.55] flex justify-between items-center px-10">
        <div>
          <p className="text-main text-[16px]">Цена в июне:</p>
          <p className="text-secondary font-medium">от 70 000$</p>
        </div>
        <AppButton
          onClick={(e) => {
            if (step == DetailDirection.CUSTOMIZATION) {
              e.preventDefault()
              setStep(DetailDirection.SUBMIT_FORM)
              console.log("render")
              return
            }
            console.log("pizda")
          }}
          type="submit"
          variant="secondary"
        >
          Продолжить
        </AppButton>
      </div>
    </div>
  )
}
