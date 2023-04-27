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
            container
         "
      >
         <div id="difference-top" className='text-center md:w-2/5 md:text-left'>
            <h1
               className="
                  text-3xl
                  font-bold
               "
            >What&apos;s different about Manage?</h1>
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
                  <div className="reason">
                     <div className="reason-top">
                     <h3
                        className="
                           font-bold
                           text-md
                           pl-2
                           inline-block
                           w-fit
                        "
                     >Track company-wide progress</h3>
                     </div>
                     <p className='my-6 lg:pl-20'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milesone level all the wat done to the smallest of details. Never lose sight of the bigger picture again.</p>
                  </div>
                  
               </li>
               <li>
                  <div className="reason">
                     <div className="reason-top">
                        <h3
                           className="
                              font-bold
                              text-md
                              pl-2
                              inline-block
                              w-fit
                           "
                        >Advanced built-in reports</h3>
                     </div>
                        <p className='my-6 lg:pl-20'>Set internal delivery system and track progress toward goals. Our customisable dashboard helps you build out the reports you need to keep stakeholders informed.</p>
                  </div>
               </li>
               <li>
                  <div className="reason">
                     <div className="reason-top">
                        <h3
                           className="
                              font-bold
                              text-md
                              pl-2
                              inline-block
                              w-fit
                           "
                        >Everything you need in one place</h3>
                     </div>
                     <p className='my-6 lg:pl-20'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers and all-in-one team productivity solution.</p>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   )
}