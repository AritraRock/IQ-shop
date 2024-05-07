import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className=' absolute top-[-7rem] z-10 mx-auto'>
            <img  className=' aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={review.image}></img>
            <div className='rounded-full w-[140px] h-[140px] bg-violet-500 absolute z-[-20]
            top-[-6px] left-[10px]'></div>
        </div>

        <div className=' text-center mt-7'>
            <p className=' font-bold text-2xl capitalize tracking-wider text-slate-500'>{review.name}</p>
            <p className=' text-violet-500 uppercase text-sm'>{review.job}</p>
        </div>

        <div className=' text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className=' text-center text-slate-500 mt-4'>
            {review.text}
        </div>

        <div className=' text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

        
    </div>
  )
}

export default Card