import './Calltoaction.css'
import Pill from '../assets/bg-tablet-pattern.svg'

export default function Calltoaction() {
   return (
      <section id="calltoaction"
         className='
            text-center
            pt-10
            md:pt-6
         '
      >
         <div className="container md:flex md:items-center md:justify-between">

            <div className='h-bg md:w-6/12' id="call-left">
               <div className="bg" id='call-bg-left'>
                  <img src={Pill} alt="Background pill" />
               </div>
               <h1 className='text-5xl font-bold mb-6 md:text-left'>Simplify how your team works today.</h1>

            </div>
            <div className='h-bg' id="call-right">
               <div className="bg" id='call-bg-right'>
                  <img src={Pill} alt="Background pill" />
               </div>
            </div>
            <div className="btn-container p-2 my-8">
               <a href="#" className="btn btn-white">Get Started</a>
            </div>
         </div>

      </section>
   )
}