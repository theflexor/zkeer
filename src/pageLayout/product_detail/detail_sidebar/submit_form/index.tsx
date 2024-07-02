import { DetailDirection } from "@pageLayout/product_detail"
import { SubmitFormConfiguration } from "./configuration"
import { SubmitFormData } from "./form"

interface Props {
  step: DetailDirection
  setStep: (b: DetailDirection) => void
}

export const DetailSidebarSubmitFormStep: React.FC<Props> = ({
  setStep,
  step,
}) => {
  return (
    <div>
      <div onClick={() => setStep(DetailDirection.CUSTOMIZATION)}>back</div>
      <SubmitFormConfiguration />
      <div className="bg-tertiary h-[0.5px] mt-[30px] my-[10px]"></div>
      <SubmitFormData />
    </div>
  )
}
