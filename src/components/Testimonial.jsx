import './Testimonial.css'
import Testimony from './Testimony'
import testimonies from './testimonies'

export default function Testimonial() {
   const testimon = testimonies.map(testimony => {
      return(
         <Testimony 
            key = { testimony.id }
            item = { testimony }
         />
      )
   })

   return(
      <section id="testimonial" className='text-center container'>
         <h1 className='text-center text-4xl font-bold mb-8'>What they&apos;ve said</h1>
         <div id="testimony-container" className=''>
            { testimon }
         </div>
         <a href="#" className="btn shadow-lg">Get started</a>
      </section>
   )
}