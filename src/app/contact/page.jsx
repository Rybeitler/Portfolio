"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import gitLogo from '../../../public/github-mark.svg'
import linkedIn from '../../../public/linkedIn.png'
import mail from '../../../public/envelope-regular.svg'
import me1 from '../../../public/me1.jpg'
import me2 from '../../../public/me2.jpg'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel'

const Contact = () => {
    const [hover, setHover] = useState(false)
    return (
        <div className='flex flex-row h-[100vh] px-24 py-5 sm:flex-row'>
            <div className='flex flex-col p-5 items-center w-3/5 rounded-lg h-[72rem]'>
                <h2 className='text-6xl mb-4'>About me</h2>
                <ImageCarousel/>
                <p className='text-3xl p-6'>Drawing upon a strong foundation as a graduate of Coding Dojo and backed by a year of invaluable experience, motivated and curious I strive to deliver exceptional web development solutions. With a passion for creating seamless user experiences and an unwavering commitment to craftsmanship, I consistently strive to push the boundaries of technological innovation. Leveraging my expertise in cutting-edge programming languages, frameworks, and design principles, I am able to collaborate effectively within teams, translating complex concepts into elegant, scalable code. My dedication to continuous learning and adaptability helps me to stay at the forefront of industry trends, consistently exceeding client expectations and delivering transformative digital solutions. Through a meticulous attention to detail and an innate ability to solve problems creatively, I strive to consistently craft immersive and engaging web experiences that leave a lasting impact. </p>
            </div>
            <div className='flex flex-col pl-8 p-4  w-2/5 h-[72rem]'>
                <h2 className='text-6xl text-center m-4'>Contact Me</h2>

                <Link href="https://www.linkedin.com/in/ryan-beitler-258446269/" className='flex items-end mb-4 hover:scale-105'>
                    <Image 
                        src={linkedIn} width={100} height={100} alt='linkedin logo' 
                        className='m-2 hover:animate-wiggle'
                    />
                    <p className='text-4xl m-2 text-blue-400'>My LinkedIn</p>
                </Link>

                <Link href="https://github.com/Rybeitler" className='flex items-end mb-4 haver:scale-105'>
                    <Image 
                        src={gitLogo} width={100} height={100} alt='gitcat logo' 
                        className='m-2 hover:animate-wiggle'
                    />
                    <p className='text-4xl m-2 text-blue-400'>My Github</p>
                </Link>
            

                <a href="mailto:rybeitler@gmail.com" className='flex items-end mb-4 hover:scale-105'>
                    <Image 
                        src={mail} width={100} height={100} alt='mail icon' 
                        className='m-2 p-2 bg-yellow-200 rounded-md hover:animate-wiggle'
                    />
                    <p className='text-4xl m-2 text-blue-400'>Email, Rybeitler@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default Contact