interface Props {
  items: { label: string; value: string }[]
  register: object
  errors?: any
  name: string
}

export const AppSelect: React.FC<Props> = ({
  items = [],
  register,
  errors,
  name,
}) => {
  const isError = name && errors && errors[name]
  return (
    <div className="mt-2">
      <select
        {...register}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {items.map((item) => (
          <option className="p-3 text-lg" key={item.value} value={item.value}>
            <div>{item.label}</div>
          </option>
        ))}
      </select>
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
