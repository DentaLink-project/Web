"use client"
import React from 'react'
import insta from '../../public/images/icons/Instagram.svg'
import face from '../../public/images/icons/facebook.svg'
import twitter from '../../public/images/icons/twitter.svg'
import Logo from './ui/Logo'
import phone from '../../public/images/icons/telephone.svg'
import msg from '../../public/images/icons/message.svg'
import Image from 'next/image'
import Link from 'next/link'
import mainLinks from '@/data/mainlinks'
import { usePathname } from 'next/navigation'  
const Footer = () => {
    const pathname = usePathname();
    return (
        <footer
            className="relative bg-cover bg-center bg-no-repeat pt-56 "
            style={{
                backgroundImage: "url('/images/footer.svg')",
                backgroundSize: '1540px 1200px',
                backgroundPositionY: '-200px'
            }}
        >
            <div className="container mx-auto px-6 py-10 flex flex-wrap justify-between text-[#1E1E1E]">
                {/* Logo Section */}
                <div className="mb-6 md:mb-0 ">
                    <Logo />
                    <div>
                        <Link href="/" className='flex flex-row gap-2 mt-5'>
                            <Image src={phone} alt="phone" width={30} height={30} />
                            <span>123-456-789-10</span> 
                        </Link>
                    </div>
                    <div >
                        <Link href="/" className='flex flex-row  mt-2 ml-2  gap-2'>
                            <Image src={msg} alt="phone" width={20} height={20} />
                            <span>DentaLink123@gmail.com</span> 
                        </Link>
                    </div>
                </div>


                {/* Quick Links Section */}
                <div>
                    <h3 className="text-2xl mb-2 ">Quick Links</h3>
                    <ul className="space-y-2">
                    {mainLinks.map((link => (
                            <li key={link.label}>
                                <Link href={link.href} style={{fontSize:'16px', color: pathname == link.href ? '#247CFF' : '#1E1E1E',textDecoration:pathname == link.href ?'underline':"none"}}>{link.label}</Link>
                            </li>
                        )))}
                    </ul>
                </div>

                {/* Service Section */}
                <div>
                    <h3 className="text-2xl mb-2">Service</h3>
                    <ul className="space-y-2">
                        <li>
                        <Link href='/find' style={{fontSize:'16px'}}>Find patient</Link>
                        </li>
                        <li><Link href='/find' style={{fontSize:'16px'}}>Buy</Link></li>
                        <li><Link href='/find' style={{fontSize:'16px'}}>Exchange</Link></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h3 className="text-2xl mb-2">Follow Us</h3>
                    <ul className="space-y-2">
                        <li>
                        <div>
                        <Link href="/" className='flex flex-row gap-2 mt-5'>
                            <Image src={face} alt="phone" width={32} height={30} />
                            <span>DentaLink@Yahoo.com</span> 
                        </Link>
                    </div>
                        </li>
                        <li>
                        <div>
                        <Link href="/" className='flex flex-row gap-2 mt-5'>
                            <Image src={insta} alt="phone" width={30} height={30} />
                            <span>DentaLin86</span> 
                        </Link>
                    </div>
                        </li>
                        <li>
                        <div>
                        <Link href="/" className='flex flex-row gap-2 mt-5'>
                            <Image src={twitter} alt="phone" width={30} height={30} />
                            <span>DentaLink86</span> 
                        </Link>
                    </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center py-4 ">
                <p className="text-sm text-gray-700">© 2025 DentaLink. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer