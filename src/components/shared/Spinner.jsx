import React from 'react'
import loader from '../../assets/loader.gif';

function Spinner() {
  return (
    <img src={loader} alt='Loading...' style={{width: '100px', margin: 'auto', display: 'block'}}></img>
  )
}

export default Spinner