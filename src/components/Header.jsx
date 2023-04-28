import HeaderImage from '../assets/illustration-intro.svg'
import './Header.css'
import Pill from '../assets/bg-tablet-pattern.svg'

export default function Header() {
   return (
      <section id="header" >
         <div
            className='
               text-center
               md:flex
               md:flex-row-reverse
               md:items-center
               md:justify-between
               container
            '
         >
            <div className="bg" id='header-bg'>
               <img src={Pill} alt="Background pill" />
            </div>
            <div id="header-img" className='md:w-1/2'>
               <img src={HeaderImage} alt="Header image" />
            </div>
            <div id="header-text"
               className='
               md:text-left
               flex
               flex-col
               gap-6
               md:gap-9
               md:w-2/5
            '
            >
               <h1
                  className='
                  text-4xl
                  font-bold
               '
               >Bring everyone together to build better products.</h1>
               <p
                  className='
                  text-xl
               '
               >Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
               <div id="header-btn" className='p-2'>
                  <a href="#" className="btn shadow-lg">Get Started</a>
               </div>
            </div>
         </div>
      </section>
   )
}