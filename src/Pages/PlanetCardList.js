import React from 'react'
import PlanetCard from './PlanetCard'

export default function PlanetCardList({ planetcards }) {
    return (
        <div className="card-grid">
            {planetcards.map(planetcard => {
                return <PlanetCard planetcard={planetcard} key={planetcard.id} />
            })}
        </div>
    )
}
