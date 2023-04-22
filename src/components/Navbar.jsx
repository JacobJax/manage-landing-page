import Logo from '../assets/logo.svg'
import Hamburger from '../assets/icon-hamburger.svg'

export default function Navbar() {
   return(
      <nav
         className='
            flex
            justify-between
         '
      >
         <div className="nav-item" id="logo">
            <img src={ Logo } alt="Logo" />
         </div>
         <div className="nav-item" id="nav-links">
            <div id="hambuger"
               className='
                  lg:hidden
                  md:hidden
               '
            >
               <img src={Hamburger} alt="hamburger menu" />
            </div>
            <div id="links"
               className='
                  hidden
                  md:block
               '
            >
               <ul
                  className='
                     md:flex
                     md:gap-x-3
                  '
               >
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#product">Product</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#whatpeoplesay">Community</a></li>
               </ul>
            </div>
         </div>
      </nav>
   )
}