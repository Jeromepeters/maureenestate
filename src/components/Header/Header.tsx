"use client";

import Sidebar from "../Sidebar/Sidebar";
import Link from "next/link";
import { menuItems } from "../../data/menuItems";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <header className="z">
      {/* ----TOP-NAV-------*/}
      <div className=" bg-[#013B94] flex text-white items-center justify-end gap-4 py-2">
        <div className="flex items-center gap-1 ">
          <BsFillTelephoneFill size={14} className="text-xs" />
          <p className="text-xs">+2347067009192</p>
        </div>
        <p>|</p>
        <div className="flex items-center gap-1">
          <MdEmail size={14} className="text-xs" />
          <p className="text-xs">Email Us</p>
        </div>
      </div>
      <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full  2xl:px-16">
          <Link href="/">
            <Image
              src="/assets/logo-text.svg"
              alt="logo"
              height={120}
              width={120}
            />
          </Link>

          {/* ----MAIN-NAV-------*/}
          <div className="hidden  sm:flex">
            <ul className="hidden sm:flex items-center gap-4">
              {menuItems.map((item, i) =>
                item.dropdown ? (
                  <div className="relative group" key={i}>
                    <Link href={item.href} className="">
                      <p className="text-sm flex gap-1">
                        {item.name}
                        <IoIosArrowDown className="h-5 w-5 flex-none" />
                      </p>
                    </Link>
                    <div className="absolute hidden group-hover:block transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[#013B94] text-white p-4 rounded-3xl z-10 shadow-md pt-4 w-48">
                      <ul>
                        {item.dropdown.map((subItem, ibndex) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className="block py-2 px-4 hover:bg-[#91acc2]"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={i}
                    href={item.href}
                    className=" hover:text-gray-400 text-sm"
                  >
                    <p> {item.name}</p>
                  </Link>
                )
              )}
            </ul>
          </div>
          {/* MobileMenu*/}

          <Sidebar menuItems={menuItems} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
