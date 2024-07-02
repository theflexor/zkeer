import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import clsx from "clsx"
import { ReactNode } from "react"
import { v4 as uuidv4 } from "uuid"

interface Props {
  title: ReactNode
  items: { name: string; id: number }[]
}

export const AppDropdown: React.FC<Props> = ({ items = [], title }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className=" bg-main inline-flex w-full justify-center gap-x-1.5   px-3 py-2 text-sm font-semibold text-main_white shadow-sm   hover:bg-gray-50">
          {title}
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-white shadow-lg  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {items.map((item) => (
            <MenuItem key={uuidv4()}>
              {({ focus }) => (
                <div
                  className={clsx(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {item.name}
                </div>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
