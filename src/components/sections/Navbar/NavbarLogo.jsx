import React from 'react'

const NavbarLogo = () => {
  return (
    <div>
      <h1 className='text-blanc text-[29px] font-bold font-logo sm:hidden md:block'>
        LS<span className='text-framboise '>.</span>Tech
      </h1>
      <h1 className='text-blanc text-[21px] font-bold font-logo text-4xl md:hidden sm:block'>
        LS<span className='text-framboise'>.</span>T
      </h1>
    </div>
  )
}

export default NavbarLogo;
