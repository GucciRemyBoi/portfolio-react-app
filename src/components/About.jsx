import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#050817] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#656CD6]'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Lorenz, great to meet you! Please take a look around my site.</p>
                    </div>
                    <div>
                        <p>I am passionate about computer science and love creating projects using language only
                            computers can decypher. With the world in the digital age, creating meaningful but impactful
                            projects are needed more than ever now. I hope to be one of those people that make multiple projects
                            that impact the lives of many. I look forward to my future in the tech field!
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About