"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MenuItem } from "../../data/menuItems";

interface SidebarProps {
  menuItems: MenuItem[];
}
const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  return (
    <div className="sm:hidden">
      <button onClick={toggleSidebar} className="text-black">
        <AiOutlineMenu />
      </button>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-[65%] sm:hidden bg-[#013B94] text-white py-10 ease-in duration-500 z-20"
            : "fixed left-[-100%] top-0 py-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end px-10">
          <div onClick={toggleSidebar} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>

        <div className="flex-col py-4">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="relative border-b border-white last:border-b-0 px-10"
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-white w-full flex gap-1  py-4 hover:bg-blue-800"
                    >
                      {item.name}
                      <IoIosArrowDown className="h-5 w-5 flex-none" />
                    </button>
                    <ul
                      className={`${
                        openDropdown === item.name ? "block" : "hidden"
                      } pl-4 mt-2`}
                    >
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="block w-full py-2 px-4 text-white hover:bg-blue-800 border-b border-white"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="text-white w-full  py-4 hover:bg-blue-800">
                    <Link href={item.href} className="text-white w-full">
                      {item.name}...
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
