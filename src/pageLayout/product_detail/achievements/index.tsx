import clsx from "clsx"
import { v4 as uuidv4 } from "uuid"

interface Props {
  list: { image: string }[]
  className?: string
}

export const Achievements: React.FC<Props> = ({ list, className }) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      {list.map((item) => (
        <div
          className={
            "max-lg:border max-lg:border-main w-full flex justify-center max-lg:p-2"
          }
          key={uuidv4()}
        >
          <img className="h-[35px]" src={item.image} />
        </div>
      ))}
    </div>
  )
}
