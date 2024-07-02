import clsx from "clsx"
import React, { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "main" | "secondary"
}
const buttonStyles = {
  main: "bg-main text-main_white",
  secondary: "bg-secondary text-main_white",
}
export const AppButton: React.FC<Props> = ({ variant = "main", ...props }) => {
  return (
    <button
      className={clsx(
        `flex gap-[5px] font-normal py-[10px] px-[8px] text-[16px] items-center`,
        buttonStyles[variant]
      )}
      {...props}
    />
  )
}
