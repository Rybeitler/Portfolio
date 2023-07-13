"use client"
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import Link from 'next/link'
import { pacifico } from '../../app/fonts.js'

const Nav = () => {
    const pathname = usePathname()

    const navButtons = (pathname) => {
        switch (pathname) {
            case '/':
                return [];
            case '/projects':
                return [
                    { id: 1, path:'/', name: 'Home', color: 'yellow' },
                    { id: 3, path:'/contact', name: 'Contact', color: 'green' },
                    { id: 4, path:'/resume', name: 'Resume', color: 'blue' },
                ];
            case '/contact':
                return [
                    { id: 1, path:'/', name: 'Home', color: 'yellow' },
                    { id: 2, path:'/projects', name: 'Projects', color: 'red' },
                    { id: 4, path:'/resume', name: 'Resume', color: 'blue' },
                ];
            case '/resume':
                return [
                    { id: 1, path:'/', name: 'Home', color: 'yellow' },
                    { id: 2, path:'/projects', name: 'Projects', color: 'red' },
                    { id: 3, path:'/contact', name: 'Contact', color: 'green' },
                ];
            default:
                return [];
        }
    }

    
        const generateBtns = navButtons(pathname)


    return (
        <div className=' h-58 w-full flex flex-col md:flex-row justify-between items-center p-1 lg:py-5 lg:px-10 '>
            <h1 className='pacifico text-8xl bg-gradient-to-b from-blue-500 to-slate-400' style={{ 'fontFamily':pacifico,'WebkitBackgroundClip': 'text', 'WebkitTextFillColor': 'transparent' }}>Ryan Beitler</h1>
            <div className='flex flex-col md:flex-row items-center m-3'>
                <div>
                    {
                        generateBtns.map((item) => (
                            <Link key={item.id}
                                href={item.path}
                                className={`m-3 p-3 bg-${item.color}-200 text-4xl text-slate-800 rounded-md inline-block hover:scale-125`}
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>

                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Nav