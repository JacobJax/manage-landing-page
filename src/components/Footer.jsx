import './Footer.css'
import FBicon from '../assets/icon-facebook.svg'
import YBicon from '../assets/icon-youtube.svg'
import TWicon from '../assets/icon-twitter.svg'
import PNicon from '../assets/icon-pinterest.svg'
import INicon from '../assets/icon-instagram.svg'
import Logo from '../assets/logo.svg'

export default function Footer() {
   return (
      <footer className="text-white">
         <div className="container" id='footer-container'>
            <div className="footer-conten" id="update-form">
               <form action="" className='flex justify-between gap-4 md:max-w-md py-8'>
                  <input type="text" className='p-2 pl-4 rounded-3xl text-sm' name="email" id="email" placeholder='Updates in your inbox...' />
                  <button type='submit' className="btn">Go</button>
               </form>
            </div>
            <div className="footer-content" id="footer-links">
               <div className='flex justify-between p-8 md:px-16'>
                  <ul>
                     <li className='mb-4'><a href="#">Home</a></li>
                     <li className='mb-4'><a href="#">Pricing</a></li>
                     <li className='mb-4'><a href="#">Products</a></li>
                     <li className='mb-4'><a href="#">About Us</a></li>
                  </ul>
                  <ul>
                     <li className='mb-4'><a href="#">Careers</a></li>
                     <li className='mb-4'><a href="#">Community</a></li>
                     <li className='mb-4'><a href="#">Privacy Policy</a></li>
                  </ul>
               </div>
            </div>
            <div className="footer-content" id="social-links">
               <div className='flex justify-between py-8'>
                  <img src={FBicon} alt="" />
                  <img src={YBicon} alt="" />
                  <img src={TWicon} alt="" />
                  <img src={PNicon} alt="" />
                  <img src={INicon} alt="" />
               </div>
            </div>
            <div className="footer-content" id="footer-logo">
               <div className='grid place-items-center p-16 md:p-8'>
                  <img src={Logo} alt="" />
               </div>
            </div>
            <div className="footer-content" id="copyright-message">
               <div className='p-8 text-sm text-center'>
                  <p>Copyright 2020. All rights reserved</p>
               </div>
            </div>
         </div>
      </footer>
   )
}