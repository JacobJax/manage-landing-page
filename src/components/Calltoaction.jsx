import './Calltoaction.css'

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
            <h1 className='text-5xl font-bold mb-6 md:w-2/5 md:text-left'>Simplify how your team works today.</h1>
            <div className="btn-container p-2 my-8">
               <a href="#" className="btn btn-white">Get Started</a>
            </div>
         </div>
      </section>
   )
}