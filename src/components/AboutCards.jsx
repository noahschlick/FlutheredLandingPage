import React from 'react'
import AboutCard from './AboutCard'

function AboutCards() {
  return (
    <div className="flex justify-around w-full py-5 bg-tulip-tree-600      ">
        <AboutCard 
            title="Entertain Guess" 
            desc="Fluthered is a fun and interactive party game that combines daring challenges. It's designed to liven up any gathering, from casual hangouts with friends to wild parties."
        />
        <AboutCard 
            title="Outrageous Challenges" 
            desc="Get ready to take on outrageous challenges, share hilarious stories, and enjoy some tasty drinks while playing Fluthered. Just remember to play responsibly and drink in moderation. Cheers to a night full of laughter, unforgettable moments, and a whole lot of fun!"
        />
        <AboutCard 
            title="Fun Experience" 
            desc="In the game, players take turns swiping cards that contain either a hilarious or daring challenge. The challenges can range from silly acts and embarrassing dares to thought-provoking questions and outrageous activities."
        />
    </div>
  )
} 

export default AboutCards