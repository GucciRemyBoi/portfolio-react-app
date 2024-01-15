import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#050817]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#656CD6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#758CEB]'>Lorenz Wilkins</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#9697D9]'>I'm a Computer Science Student</h2>
            <p className='text-[#9697D9] py-4 max-w-[700px]'>I'm a computer science student working towards my Bachelor's at the University of Colorado Denver.
                I have a passion for coding since I was a child and through my studies I have learned about numerous computer science fields.
                I have a deep interest in software development and software engineering. I am open to learning more about computer science
                and cannot wait to see what else there is.
            </p>
            <div>
                <button className='text-[#FCFCFC] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#656CD6] hover:border-[#656CD6]'>
                    View Projects
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home