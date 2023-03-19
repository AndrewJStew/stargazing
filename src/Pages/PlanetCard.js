import React from 'react'
import card from '../styles/card.css'
import neptuneIMG from '../assets/360_F_457951330_Mo8GWUxg1IuEEoYxczcmOiXvdscPB2oo.jpeg'

export default function PlanetCard() {
  return (
    <div class="card">
  <img class="card-img-top" src={neptuneIMG} alt="an image of neptune"/>
  <div class="card-body">
    <h5 class="card-title">Neptune</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    // <div className="card text-center">
    //   <div className="overflow">
    //     <img src={neptuneIMG} alt=""/>
    //   </div>
    //   <div className="card-body text-dark">
    //     <h4 className="card-title">Neptune</h4>
    //   </div>
    // </div>
  )
}
