"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from '../../public/circle-regular.svg'

import {
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import RainComponent from '@/components/RainComponent/RainComponent';

export default function Home() {
  const [hoverOne, setHoverOne] = useState(false)
  const [hoverTwo, setHoverTwo] = useState(false)
  const [hoverThree, setHoverThree] = useState(false)
  const [skills, setSkills] = useState(false)
  
  return (
    <main className="container flex flex-col p-1 md:p-5 lg:flex-row">
      <div className='lg:w-2/5 min-h-[80vh] m-4 p-4 rounded-lg h-full flex flex-col justify-between items-center  border-b-2 border-blue-300'>
        <h2 className='text-7xl'>Full Stack Web Developer</h2>
        <div>
          {
            !skills?
                  <p className="text-3xl"><span className='italic'>Simplicity is the ultimate sophistication.</span> - Leonardo da Vinci</p>
                  :
                  <div className='flex flex-wrap'>
                    <a className='h-30 w-30' href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="36" height="36" alt="C#" /></a>
                    <a className='' href="https://git-scm.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
                    <a className='h-30 w-30' href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
                    <a className='h-30 w-30' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
                    <a className='h-30 w-30' href="https://www.python.org/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
                    <a className='h-30 w-30' href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
                    <a className='h-30 w-30' href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
                    <a className='h-30 w-30' href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
                    <a className='h-30 w-30' href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24 bg-white rounded-md' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
                    <a className='h-30 w-30' href="https://jquery.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a>
                    <a className='h-30 w-30' href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
                    <a className='h-30 w-30' href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
                    <a className='h-30 w-30' href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
                    <a className='h-30 w-30' href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a>
                    <a className='h-30 w-30' href="https://mui.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" /></a>
                    <a className='h-30 w-30' href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
                    <a className='h-30 w-30' href="https://expressjs.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24 bg-white rounded-md' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
                    <a className='h-30 w-30' href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
                    <a className='h-30 w-30' href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
                    <a className='h-30 w-30' href="https://flask.palletsprojects.com/en/2.0.x/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24 bg-white rounded-md' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored.svg" width="36" height="36" alt="Flask" /></a>
                    <a className='h-30 w-30' href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width="36" height="36" alt="Django" /></a>
                    <a className='h-30 w-30' href="https://www.figma.com/" target="_blank" rel="noreferrer"><img className='w-12 md:w-18 xl:w-24' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
                  </div>
          }
        </div>
        <button onClick={()=>setSkills(skills=>skills===true?false:true)} className='mb-4 outline outline-blue-400 rounded-lg p-5 text-5xl hover:bg-blue-300 hover:text-black'>
          My Skills
        </button>
      </div>
      <div className='lg:w-3/5 m-4 grid grid-cols-1 min-h-[80vh] w-full'>
        <Link href='/projects'
          className="bg-red-200 m-1 md:m-4 h-[24vh] rounded-lg flex justify-center items-center  sm:w-full"
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
        >
          <div className='w-full h-full flex flex-col justify-center items-center relative sm:w-full'>
            {hoverOne &&
              <div className="p-0 absolute top-[5.5rem] -left-[2rem] -rotate-45 ">
                <div className="">
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[10px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin spinReverse className="absolute left-[60px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[110px] text-slate-700 text-7xl" />
                </div>
              </div>
            }
            <p className="text-slate-700 text-bold text-4xl md:text-7xl lg:text-9xl">PROJECTS</p>
            {hoverOne &&
              <div class="overflow-x-hidden w-full">
                <div class="py-12 animate-marquee whitespace-nowrap ">
                  <span class="mx-4 text-slate-800 text-4xl">A collection of projects I am proud to have worked on, alone or with others.</span>
                </div>
              </div>
            }

            {
              hoverOne &&
              <div className="p-0 absolute -top-[3rem] right-[6rem] rotate-45">
                <div className="relative">
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[10px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin spinReverse className="absolute left-[60px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[110px] text-slate-700 text-7xl" />
                </div>
              </div>
            }
          </div>
        </Link>

        <Link href='/contact'
          className="bg-green-200 m-1 md:m-4 rounded-lg flex justify-center items-center h-[24vh] sm:w-full"
          onMouseEnter={() => setHoverTwo(true)}
          onMouseLeave={() => setHoverTwo(false)}
        >
          <div className='relative flex flex-nowrap justify-center items-center w-full h-full overflow-hidden'>
            {!hoverTwo ?
              <p className="text-slate-700 text-bold text-4xl md:text-7xl lg:text-9xl">CONTACT</p>
              :
              <div className='relative w-inherit h-inherit'>
                <p className='text-5xl text-bold text-slate-800 absolute top-[15rem] left-[6rem]'>Contact Me!</p>
                <div className='relative'>
                  <Image src={circle} height={500} width={500} alt='' className='' />
                  <Image src={circle} height={500} width={500} alt='' className='absolute top-[1rem] ' />
                  <Image src={circle} height={500} width={500} alt='' className='absolute top-[1rem] animate-radio' />
                  <Image src={circle} height={500} width={500} alt='' className='absolute top-[1rem] animate-radio animation-delay-400' />
                  <Image src={circle} height={500} width={500} alt='' className='absolute top-[1rem] animate-radio animation-delay-800 ' />
                  <Image src={circle} height={500} width={500} alt='' className='absolute top-[1rem] animate-radio animation-delay-1200' />
                </div>
              </div>
            }
          </div>
        </Link>

        <Link href='/resume' className='relative bg-blue-200 m-1 md:m-4 rounded-lg flex justify-center items-center h-[24vh] sm:w-full '
            onMouseEnter={() => setHoverThree(true)}
            onMouseLeave={() => setHoverThree(false)}
        >
                  {
                    !hoverThree ?
                      <p className="text-slate-700 text-bold text-4xl md:text-7xl lg:text-9xl">RESUME</p>
                    :
                      <RainComponent className='absolute'/>
                  }
                  


        </Link>
      </div>
    </main>
  )
}
