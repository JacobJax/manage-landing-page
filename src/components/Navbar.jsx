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
         '
      >
         <div className="nav-item" id="logo">
            <img src={Logo} alt="Logo" />
         </div>
         <div className={!open ? "open" : "nav-item"} id="nav-links">
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
               className={open && 'hidden md:block'}
            >
               <ul
                  className='
                     md:flex
                     md:gap-x-3
                     bg-white
                     p-3
                     md:p-0
                     mx-auto
                     rounded
                     md:rounded-none
                  '
               >
                  <li className='py-2'><a href="#pricing">Pricing</a></li>
                  <li className='py-2'><a href="#product">Product</a></li>
                  <li className='py-2'><a href="#about">About Us</a></li>
                  <li className='py-2'><a href="#">Careers</a></li>
                  <li className='py-2'><a href="#whatpeoplesay">Community</a></li>
               </ul>
            </div>
         </div>
      </nav>
   )
}