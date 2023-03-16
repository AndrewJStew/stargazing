import React, { useState } from 'react'

export default function PlanetCard({ planetcard }) {
  //constant for the flipping of the planet cards (from image to info)
  const [flip, setFlip] = useState(false)
  //Code for flipping cards - once side image, one side info
  return (
    <div className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      {/*front of card*/}
      <div className="front">
        <div className="planet-front">
          <p>{planetcard.name}</p>
        </div>
      </div>
      <div className="back">
        <p>{planetcard.mass}</p>
        <p>{planetcard.radius}</p>
        <p>{planetcard.temperature}</p>
      </div>
    </div>
  )
}
