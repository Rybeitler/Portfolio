"use client"
import React, {useState} from 'react' 
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rain from '../components/rain/Rain'

import {
  faGear
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [hoverOne, setHoverOne] = useState(false)
  return (
    <main className="flex flex-col min-h-screen p-24 sm:flex-row">
      <div className='bg-yellow-200 w-2/5 m-4 rounded-lg h-[80rem]'>
        <p className="text-8xl">something</p>
      </div>
      <div className='w-3/5 m-4 grid grid-cols-1 sm:w-full'>
        <Link href='/projects' 
          className="bg-red-200 m-4 rounded-lg flex justify-center items-center h-[25rem] sm:w-full"
          onMouseEnter={() => setHoverOne(true)}
          onMouseLeave={() => setHoverOne(false)}
          >
          <div className='w-full h-full flex flex-col justify-center items-center relative sm:w-full'>
            {hoverOne &&
              <div className="p-0 absolute top-[5.5rem] -left-[2rem] -rotate-45 ">
                <div className="">
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[10px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin spinReverse className="absolute left-[60px] text-slate-700 text-7xl" />
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[110px] text-slate-700 text-7xl"/>
                </div>
              </div>
            }
            <p className="text-slate-700 text-bold text-9xl">PROJECTS</p>
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
                  <FontAwesomeIcon icon={faGear} spin className="absolute top-[45px] left-[110px] text-slate-700 text-7xl"/>
                </div>
              </div>
            }
          </div>
        </Link>

        <Link href='/contact' className="bg-green-200 m-4 rounded-lg flex justify-center items-center h-[25rem] sm:w-full">
          <div className=''>
            <p className="text-slate-700 text-bold text-9xl">CONTACT</p>
          </div>
        </Link>

        <Link href='/resume' className='rain bg-blue-200 m-4 rounded-lg flex justify-center items-center h-[25rem] sm:w-full '>
          <div className=''>
            <p className="text-slate-700 text-bold text-9xl">RESUME</p>
              {/* <Rain/> */}
          </div>
        </Link>
      </div>
    </main>
  )
}
