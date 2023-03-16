import React, { useState } from 'react'
import PlanetCardList from './PlanetCardList'
import './PlanetStyles.css'


export default function Planets() {
    const [planetcards, setplanets] = useState(SAMPLE_PLANETCARDS)
    return (
        <PlanetCardList planetcards={planetcards} />
        
    )
}

//sample data for the planet cards
const SAMPLE_PLANETCARDS = [
    {
        id: 1,
        name: "Neptune",
        mass: 0.0537,
        radius: 0.346,
        temperature: 72,
        distance_light_year: 0.000478,
    }
]
