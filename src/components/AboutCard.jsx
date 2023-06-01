import React from 'react'

function AboutCard({title, desc}) {
  return (
    <div className="h-[300px] w-60 border-2 border-tulip-tree-400 text-white rounded-lg overflow-hidden">
        <div className="font-bold text-lg p-3">{title}</div>
        <p className="text-sm p-3 ">
            {desc}
        </p>
    </div>
  )
}

export default AboutCard