import { HTMLInputTypeAttribute } from "react"

interface Props {
  name?: string
  label?: string
  type?: HTMLInputTypeAttribute
  errors?: any
  register?: object
}

export const AppInput: React.FC<Props> = ({
  name,
  label,
  type = "text",
  register,
  errors,
}) => {
  const isError = name && errors && errors[name]
  return (
    <div className="mb-3 w-full">
      <input
        {...register}
        placeholder={label}
        type={type}
        id={name}
        className={`form-control block bg-[#f6f6f5] w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isError ? "border-main_red" : ""
        }`}
      />
      {isError && (
        <span
          className={`text-main_red text-xs ${
            isError ? "border-red-500" : ""
          } `}
        >
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  )
}
