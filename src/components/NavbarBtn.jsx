import React from 'react'
import { LuCircleArrowOutDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
  <button className=" px-4 py-2 rounded-full text-xl  font-body text-blanc border-lilasPâle border-[1.5px] flex items-center gap-1 bg-gradient-to-r  from-bleuProfond to-mauveGris transition-all duration-500 hover:scale-110 hover:border-framboise cursor-pointer hover:shadow-framboiseShadow ">
      Contact Me
      <div className="sm:hidden md:block">
      <LuCircleArrowOutDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn;
