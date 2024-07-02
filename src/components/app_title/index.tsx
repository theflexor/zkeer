import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const AppTitle: React.FC<Props> = ({ children }) => {
  return <h1 className="font-medium text-[#24292B] text-[32px]">{children}</h1>
}
