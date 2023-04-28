import './Navbar.css'
import Logo from '../assets/logo.svg'
import Hamburger from '../assets/icon-hamburger.svg'
import Close from '../assets/icon-close.svg'
import { useState, useEffect } from 'react'

export default function Navbar() {
   const [open, setOpen] = useState(false)

   function toggleOpen() {
      setOpen(open => !open)
   }

   useEffect(() => {
      function handleResize() {
         if (open && window.innerWidth <= 768) {
            setOpen(false);
         } else {
            setOpen(true);
         }
      }

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <nav
         className='
            flex
            justify-between
            py-2
            container
         '
      >
         <div className="bg" id='header-bg'>
            <img src="" alt="" />
         </div>
         <div className="nav-item" id="logo">
            <img src={Logo} alt="Logo" />
         </div>
         <div className={!open ? "open" : "nav-item md:w-10/12"} id="nav-links">
            <div id="hambuger"
               className='
                  md:hidden
                  cursor-pointer
                  mb-8
                  md:pb-0
               '
               onClick={toggleOpen}
            >
               <img src={!open ? Close : Hamburger} alt="hamburger menu" />
            </div>
            <div id="links"
               className={open && 'hidden md:flex md:items-center md:justify-between md:w-full'}
            >
               <ul
                  className='
                     md:flex
                     md:gap-x-6
                     bg-white
                     md:bg-transparent
                     p-3
                     md:p-0
                     mx-auto
                     rounded
                     md:rounded-none
                     text-center
                     md:text-left
                  '
               >
                  <li className='py-2'><a href="#pricing">Pricing</a></li>
                  <li className='py-2'><a href="#product">Product</a></li>
                  <li className='py-2'><a href="#about">About Us</a></li>
                  <li className='py-2'><a href="#">Careers</a></li>
                  <li className='py-2'><a href="#whatpeoplesay">Community</a></li>
               </ul>
               <div className={!open && 'hidden'} id='nav-btn'>
                  <a href="#" className="btn">Get started</a>
               </div>
            </div>
         </div>
      </nav>
   )
}