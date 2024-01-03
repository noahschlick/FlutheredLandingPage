import React from 'react'

function AboutCard({title, desc}) {
  return (
    <div className=" mb-5 lg:mb-0 w-full lg:w-60 lg:h-[300px] border-2 border-tulip-tree-400 text-white rounded-lg overflow-hidden">
        <div className="font-bold text-lg p-3">{title}</div>
        <p className="text-sm p-3 ">
            {desc}
        </p>
    </div>
  )
}

export default AboutCard