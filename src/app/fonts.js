import { Space_Grotesk } from 'next/font/google'
import { Pacifico } from 'next/font/google'

export const sg = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '700']
})
export const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-pacifico"
})
