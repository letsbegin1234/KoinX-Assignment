"use client";
import Image from "next/image";
import logo1 from '../../public/logo1.jpg';
import React, { useState } from 'react';
import { BookOpenIcon, Bars3Icon, XMarkIcon, } from '@heroicons/react/24/solid'

const Header = () => {
    let Links = [
        { name: "Crypto Taxes", link: "/" },
        { name: "Free Tools", link: "/" },
        { name: "Resource Center", link: "/" },

    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed  top-0 left-0 z-50 '>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

                <Image
                    src={logo1}
                    width={100}
                    height={500}
                    alt="Picture of the author"
                />

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 text-sm font-semibold'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-blue-600 text-sm text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;
