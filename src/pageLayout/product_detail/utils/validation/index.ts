import * as yup from "yup"

export const validationSubmitSchema = yup.object().shape({
  email: yup.string(),
  phone: yup.string().required("Необходимо заполнить поле Телефон."),
  dealer: yup.string(),
  name: yup.string().required("Необходимо заполнить поле Имя."),
  surname: yup.string(),
  isActive: yup.boolean().required().oneOf([true], "required"),
})
