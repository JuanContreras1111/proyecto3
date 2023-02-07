import React from 'react'
import './style/buscador.css'

const ResidentForm = ({handleSubmit}) => {
  return (
    
    <form className='formulariodebarra' onSubmit={handleSubmit}>
      <div className='inputdebarra'>
      <input type="search" id='idLocation' placeholder='type a location id' />
      </div>
        
        <button>Search</button>
      </form>
    
  )
}

export default ResidentForm

