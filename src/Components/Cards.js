import React from 'react'
import Card from './Card.js'


const Cards = ({ArrayData}) => {
  return (
    <div className='grid grid-cols-3 border-5  border-blue-300 '>
      {
        ArrayData.map((data)=>{
            return (
                <Card data={data} />
            )
        })
      }
    </div>
  )
}

export default Cards
