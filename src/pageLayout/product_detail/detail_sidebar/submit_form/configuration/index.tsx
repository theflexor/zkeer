import { AppTitle } from "@components/app_title"

export const SubmitFormConfiguration = () => {
  return (
    <div>
      <AppTitle>Конфигурация</AppTitle>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center">
          <p>Премиум AWD</p>
          <p>22 250 000 ₸</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Электро-синий</p>
          <p>0 ₸</p>
        </div>
        <div className="flex justify-between items-center">
          <p>22-дюймовые легкосплавные диски</p>
          <p>0 ₸</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Угольно-черный и Каменно-серый</p>
          <p>0 ₸</p>
        </div>
      </div>
      <div className="flex justify-between bg-[#e4e0db] p-4">
        <h4>Итого</h4>
        <p>22 250 000 ₸</p>
      </div>
    </div>
  )
}
