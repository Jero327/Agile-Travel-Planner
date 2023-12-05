import React, { useState } from 'react'
import SelectedInfo from './SelectedPlan'
import SelectTrip from './SelectTrip'
import { useSearchParams } from 'react-router-dom'

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const selectedCity = searchParams.get('selectedCity')
  const selectedCity = searchParams.get('city')
  // const selectedDepartureDate = searchParams.get('selectedDepartureDate')
  const selectedDepartureDate = searchParams.get('start')
  // const selectedReturnDate = searchParams.get('selectedReturnDate')
  const selectedReturnDate = searchParams.get('end')
  console.log(searchParams)

  return (
    <>
      <div className="select">
        <h2>Trip to {selectedCity}</h2>
        <div>From {selectedDepartureDate} - </div>
        <div>{selectedReturnDate}</div>
      </div>

      <div className="explore">
        <div className="card-container">
          <div className="card">
            <img src="" alt="" />
            <h2>Top places for {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h2>Best restaurent in {selectedCity}</h2>
            <p>Most often seen on the web</p>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h2>Search hotels with transparent pricing</h2>
            <p>Unlike most sites, we do not sort based on commisions </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
