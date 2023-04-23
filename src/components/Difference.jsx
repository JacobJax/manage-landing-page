import './Difference.css'

export default function Difference() {
   return(
      <section id="difference"
         className="
            flex
            flex-col
            md:flex-row
            md:justify-between
            py-16
            gap-12
         "
      >
         <div id="difference-top" className='text-center md:w-2/5 md:text-left'>
            <h1
               className="
                  text-3xl
                  font-bold
               "
            >Whats different about Manage?</h1>
            <p className='py-3'>Manage provides all the functionality your team need, without the complexity. Our software is tailor-made for modern digital product teams.</p>
         </div>
         <div id="difference-bottom" className='md:w-1/2'>
            <ul
               className="
                  flex
                  flex-col
                  gap-6
               "
            >
               <li>
                  <span
                     className="
                        font-bold
                        text-lg
                        pl-2
                        inline-block
                        w-fit
                     "
                  >Track company-wide progress</span>
                  <p className='my-6 lg:pl-14'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milesone level all the wat done to the smallest of details. Never lose sight of the bigger picture again.</p>
               </li>
               <li>
                  <span
                     className="
                        font-bold
                        text-lg
                        pl-2
                        inline-block
                        w-fit
                     "
                  >Advanced built-in reports</span>
                  <p className='my-6 lg:pl-14'>Set internal delivery system and track progress toward goals. Our customisable dashboard helps you build out the reports you need to keep stakeholders informed.</p>
               </li>
               <li>
                  <span
                     className="
                        font-bold
                        text-lg
                        pl-2
                        inline-block
                        w-fit
                     "
                  >Everything you need in one place</span>
                  <p className='my-6 lg:pl-14'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers and all-in-one team productivity solution.</p>
               </li>
            </ul>
         </div>
      </section>
   )
}