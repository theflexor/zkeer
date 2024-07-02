import { AppInput } from "@components/app_input"
import { AppTitle } from "@components/app_title"
import { ISubmitPayload } from "../../../utils/useSubmit"
import { AppCheckBox } from "@components/app_checkbox"
import { AppSelect } from "@components/app_select"
import { useFormContext } from "react-hook-form"

export const SubmitFormData = () => {
  const { register, formState } = useFormContext<ISubmitPayload>()

  return (
    <div className="flex flex-col">
      <AppTitle>Заполните заявку</AppTitle>
      <div className="flex justify-between gap-7 mt-1">
        <AppInput
          name="name"
          register={register("name")}
          errors={formState.errors}
          label="Имя*"
        />
        <AppInput
          name="surname"
          errors={formState.errors}
          register={register("surname")}
          label="Фамилия"
        />
      </div>
      <AppInput
        name="phone"
        register={register("phone")}
        errors={formState.errors}
        label="Телефон"
      />
      <AppInput
        name="email"
        register={register("email")}
        errors={formState.errors}
        label="E-mail"
      />
      <AppCheckBox
        name="isActive"
        errors={formState.errors}
        register={register("isActive")}
        title={
          <span className="text-sm">
            Настоящим подтверждаю, что я ознакомлен и согласен с условиями{" "}
            <a className="more-link text-main">
              Согласия о предоставлении персональных данных
            </a>
          </span>
        }
      />
      <AppSelect
        name="dealer"
        register={register("dealer")}
        errors={formState.errors}
        items={[
          { label: "asd", value: "1" },
          { label: "asd2", value: "2" },
          { label: "asd3", value: "3" },
        ]}
      />
      {/* <AppInput name="sad" label="asd" type="text" /> */}
    </div>
  )
}
