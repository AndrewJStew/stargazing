import React from 'react'
import card from '../styles/card.css'
import neptuneIMG from '../assets/neptune.jpg'
import mercuryIMG from '../assets/mercury.jpg'
import marsIMG from '../assets/mars.jpg'

export default function PlanetCard() {
  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={neptuneIMG} alt="An image of neptune" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Neptune</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={mercuryIMG} alt="An image of mercury" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercury</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={marsIMG} alt="An image of mars" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mars</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={neptuneIMG} alt="An image of neptune" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Neptune</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={mercuryIMG} alt="An image of mercury" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercury</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={marsIMG} alt="An image of mars" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mars</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={neptuneIMG} alt="An image of neptune" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Neptune</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={mercuryIMG} alt="An image of mercury" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mercury</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={marsIMG} alt="An image of mars" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mars</h5>
              <p className="card-text">This will eventually pull my axios data through</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
