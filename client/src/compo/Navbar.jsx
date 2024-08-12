import React from 'react';
import {Outlet, Link } from 'react-router-dom';
import { Facebook, Twitter, Gitlab , Github, Linkedin } from 'lucide-react';

export const Navbar = () => {
  return ( 
    <>
        <div className="contain fixed top-0 w-screen mx-auto flex justify-center items-center bg-black h-16 z-10 font-mono">
            <div className="navbar flex space-x-80 text-white ">
                <div className="menu flex space-x-16 text-sm pt-2">
                    <Link to="/" className='cursor-pointer'>Home</Link>
                    <Link to="/about" className=' cursor-pointer'>About</Link>
                    <Link to="/contact" className=' cursor-pointer'>Contact</Link>
                    <Link to="/projects" className=' cursor-pointer'>Projects</Link>
                </div>
                <div className=' text-4xl text-blue-500  '><Gitlab  size={28}  /></div>
                <div className="socialMedia flex space-x-16 text-sm pt-3">
                    <div className='cursor-pointer'><Facebook size={17} /></div>
                    <div className='cursor-pointer'><Twitter size={17}/></div>
                    <div className='cursor-pointer'><Github  size={17}/></div>
                    <div className='cursor-pointer'><Linkedin size={17}/></div>
                </div>
            </div>
        </div>
        <Outlet/>
    </>
  )
}
