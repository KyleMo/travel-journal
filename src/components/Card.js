import React from 'react'
import pin from '../images/pin.png'

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.imageUrl}/>
      <div className="card-content">
        <div className="card-top-content">
          <img className="card-pin" width="9px;" src={pin}/>
          <h3 className="card-location">{props.location.toUpperCase()}</h3>
          <a href={props.googleMapsUrl}>View On Google Maps</a>
        </div>

        <h2 className="card-title">{props.title}</h2>

        <h4 className="card-duration">{`${props.startDate} - ${props.endDate}`}</h4>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  )
}
