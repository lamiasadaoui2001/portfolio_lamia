import React from 'react'

const links = [
  { link: "Home", section: "home" },
  { link: "About Me", section: "about" },
  { link: "Services", section: "services" },
  { link: "Resume", section: "resum" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[100%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-bleuProfond/15 backdrop-blur-lg lg:bg-bleuProfond sm:w-[100%] py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
              <a href="#"
              className="cursor-pointer text-blanc hover:text-framboise transition-all duration-500 "
              >
              {link.link}</a>
              <div className="mx-auto bg-framboise w-0 lg:group-hover:w-full sm:group-hover:w-[15%] h-[1px] transition-all duration-500"></div>
              </li>
        );
      })}
    </ul>
  )
}

export default NavbarLinks;
