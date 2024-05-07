import React from 'react'
import Testimonials from '../components/Testimonials'
import reviews from "../data_testi";

const Home = ({isLoggedIn}) => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center text-white">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Testimonials reviews={reviews}></Testimonials>
    </div>
  </div>
  )
}

export default Home
