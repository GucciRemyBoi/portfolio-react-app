import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Python from '../assets/python.png';
import LReact from '../assets/react.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#050817] text-gray-300'>
        {/* Containter */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#656CD6]'>Skills</p>
                <p className='py-4'>// Languages I Have Used </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt ="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt ="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt ="JavaScript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt ="GitHub icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt ="Python icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#758CEB] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={LReact} alt ="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills