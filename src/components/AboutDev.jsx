import React from 'react'
import pic from '../assets/Noah.jpeg'

function AboutDev() {
  return (
    <div className="py-32 lg:flex w-full text-white overflow-hidden bg-tulip-tree-600 ">
        <div className="lg:w-1/2 lg:px-32 ">
            <div>
                <h2 className="font-bold text-lg">About Dev</h2>
                <p>Ever since I started programming, I have been obsessed with creating new applications that can contribute to the world. If you are in need of a developer that can help put your companies ideas into fruition, feel free to contact me. I would be happy to help. Due to a lack of funding, Fluthered has not been able to be deployed to the App Store. If you are a recruiter and want to review source code, please contact me through email.</p>
            </div>
            <div className="text-sm mt-6">
                <p>Noah Schlickeisen</p>
                <p>noahschlick@gmail.com</p>
                <a href="https://www.noahschlick.com">https://www.noahschlick.com</a>
            </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <img className="rounded-full w-80" src={pic} alt=""/>
        </div>
        
    </div>
  )
}

export default AboutDev