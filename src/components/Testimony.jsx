import './Testimonial.css'

export default function Testimony(props) {
   return(
      <div className="testimony rounded-md drop-shadow-md">
         <div className="testimony-img">
            <img src={ props.item.imageUrl } alt={ `${props.item.name} Avatar` } />
         </div>
         <div className="tetsimony-text text-center flex flex-col gap-8">
            <p className="name font-bold text-xl">{ props.item.name }</p>
            <p className='font-bold'>{ props.item.testimony }</p>
         </div>
      </div>
   )
}