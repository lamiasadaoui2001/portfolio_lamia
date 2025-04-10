import React from 'react'

const HomeText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center w-[70%]">
      <h3  className="lg:text-6xl sm:text-4xl uppercase  font-logo ">
        Hi ! I am <span className='text-framboise '>Sadaoui Lamia</span>
      </h3>
      <h2 className='font-logo  lg:text-4xl sm:text-2xl font-bold uppercase'>
      PhD Candidate | Software Engineer | Full Stack Web Developer.
      </h2>
      <p className='font-special text-lg mt-4'>
      Développeuse de logiciels et architecte de systèmes.
       Doctorante en Systèmes d’Information et Génie Logiciel à l’USTHB.
     Spécialisée dans la conception, le développement et l’optimisation de
      systèmes complexes. Ingénieure Avec une expérience pratique en
       développement logiciel, je maîtrise les technologies modernes et 
       les outils de modélisation . Mon objectif est de concevoir des
        solutions technologiques performantes et évolutives.
      </p>
    </div>
  )
}

export default HomeText;
