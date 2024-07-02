import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSubmitSchema } from "./validation"

export interface ISubmitPayload {
  email: string
  phone: string
  dealer: string
  name: string
  surname: string
  isActive: boolean
}

export const useSubmitFormData = () => {
  const form = useForm<ISubmitPayload>({
    defaultValues: {
      email: "",
      phone: "",
      dealer: "",
      name: "",
      surname: "",
    },
    // @ts-ignore
    resolver: yupResolver(validationSubmitSchema),
  })

  const handlePost = (data: object) => {
    console.log(data)
  }

  return {
    handlePost,
    form,
  }
}
