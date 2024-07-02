import { DetailDirection } from ".."
import { DetailSideBarCustomizationStep } from "./customization"
import { DetailSidebarSubmitFormStep } from "./submit_form"

interface Props {
  step: DetailDirection
  setStep: (b: DetailDirection) => void
}

export const DetailSidebar: React.FC<Props> = ({ setStep, step }) => {
  return (
    <div className="p-7">
      {step == DetailDirection.CUSTOMIZATION ? (
        <DetailSideBarCustomizationStep />
      ) : (
        <DetailSidebarSubmitFormStep setStep={setStep} step={step} />
      )}
    </div>
  )
}
