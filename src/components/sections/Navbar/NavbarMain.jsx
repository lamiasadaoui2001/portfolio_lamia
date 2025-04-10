import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Icône de fermeture

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
            <div className="flex justify-between w-full max-w-[1200px] mx-auto items-center p-6 rounded-r-full rounded-l-full border-lilasPâle border-[1.8px]">
                <NavbarLogo />
                <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>
        
        
            <div className="flex lg:hidden sm:block p-6 bg-noire items-center justify-center rounded-full border-lilasPâle border-[1.8px]"
                 onClick={toggleMenu}>
                <button className='text-2xl p-3 border border-lilasPâle rounded-full text-blanc'>
                    {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />} 
                </button>
            </div>
        </nav>
    );
}

export default NavbarMain;
