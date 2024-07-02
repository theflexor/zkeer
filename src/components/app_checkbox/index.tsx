import clsx from "clsx"
import React, { ReactNode } from "react"

interface Props {
  register?: object
  title: ReactNode
  errors: any
  name: string
}

export const AppCheckBox: React.FC<Props> = ({
  title,
  register,
  errors,
  name,
}) => {
  const isError = name && errors && errors[name]
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center gap-3">
        <label
          className="relative flex items-center  rounded-sm cursor-pointer"
          htmlFor="checkbox"
        >
          <input
            type="checkbox"
            className={clsx(
              "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10",
              isError ? "border-main_red" : ""
            )}
            id="checkbox"
            {...register}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <p>{title}</p>
      </div>
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
