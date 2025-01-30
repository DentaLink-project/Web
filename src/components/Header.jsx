'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './ui/Logo'
import Button from './ui/Button/Button'
import { usePathname } from 'next/navigation'
import mainLinks from '@/data/mainlinks'


const Header = () => {
    const pathname = usePathname()
    return (
        <>
            <div className='flex flex-wrap flex-row justify-around items-center  p-6  md:p-8 bg-transparent absolute top-0 left-0 z-10 w-full'>
            <Logo />

                <div>
                    <ul className='flex flex-row gap-8 pt-4 '>
                        {mainLinks.map((link => (
                            <li key={link.label}>
                                <Link href={link.href} style={{fontSize:'20px', color: pathname == link.href ? '#247CFF' : '#1E1E1E'}}>{link.label}</Link>
                            </li>
                        )))}
                    </ul>
                </div>

                <div>
                    <Button title='Install App' link='/' />
                    <Button title='Log in' link='/sign-in' />
                </div>
            </div>
        </>
    )
}

export default Header