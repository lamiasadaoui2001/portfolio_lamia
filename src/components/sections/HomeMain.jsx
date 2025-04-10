import React from 'react'
import HomeText from './HomeText'
import HomePic
 from './HomePic'
const HomeMain = () => {
  return (
    <div  className=" pt-72 pb-16">
    <div className="flex md:flex-row sm:flex-col  max-w-[1500px] mx-auto justify-between items-center relative px-4">
    
    <div className="">
    <HomeText />
    </div>
    <div className="">
    <HomePic />
    </div>
    </div>
    </div>
  )
}

export default HomeMain;
