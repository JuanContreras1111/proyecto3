import React from 'react'
import './style/buscador.css'

const LocationInfo = ({location}) => {
  return (
    
    <section>
      <br /> <br /> <br /><br /><br />
        <h2 className='titulo'>{location?.name}</h2>
        <ul className='lista'>
          <li className='listas'><span>Type: </span>{location?.type}</li>
          <li className='listas'><span>Dimension: </span>{location?.dimension}</li>
          <li className='listas'><span>Population: </span>{location?.residents.length}</li>
        </ul>
      </section>
  )
}

export default LocationInfo