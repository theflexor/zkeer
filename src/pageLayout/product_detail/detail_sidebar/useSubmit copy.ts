import { useForm } from "react-hook-form"

interface ISubmitPayload {
  email: string
  phone: string
  dealer: string
  name: string
  surname: string
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
  })

  const handleSubmit = (data: object) => {
    console.log(data)
  }

  return {
    handleSubmit,
    form,
  }
}
