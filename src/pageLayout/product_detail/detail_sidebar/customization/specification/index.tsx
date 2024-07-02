import { PDF_Icon } from "@assets/icons"
import { AppTitle } from "@components/app_title"

export const DetailSidebarSpecification = () => {
  return (
    <div>
      <AppTitle>Zeekr 001</AppTitle>
      <p className="flex text-main ">
        <img src={PDF_Icon} alt="" />
        Спецификация
      </p>
      <div className="flex my-5">
        <div className="flex flex-1 flex-col items-center ">
          <strong className="font-medium text-[24px] text-secondary">
            590 км
          </strong>
          <span className="text-[12px] text-tertiary opacity-70">
            Дальность хода
          </span>
        </div>
        <div className=" flex flex-1 flex-col items-center border-x-2 border-sky-500">
          <strong className="font-medium text-[24px] text-secondary ">
            3,8 с
          </strong>
          <span className="text-[12px] text-tertiary opacity-70">
            0-100 км/ч
          </span>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <strong className="font-medium text-[24px] text-secondary">
            400 кВт
          </strong>
          <span className="text-[12px] text-tertiary opacity-70">
            Макс. мощность
          </span>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-around p-7  bg-main_white ">
            <p className="text-secondary text-[16px]">Премиум AWD</p>
            <div>
              <p className="text-main text-[16px]">от 70 000 $</p>
              <p className="text-secondary text-[16px]">под ключ</p>
            </div>
          </div>
          <div className="flex items-center justify-around p-7 border border-main  bg-main_white ">
            <p className="text-secondary text-[16px]">Флагман AWD</p>
            <div>
              <p className="text-main text-[16px]">от 70 000 $</p>
              <p className="text-secondary text-[16px]">под ключ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
