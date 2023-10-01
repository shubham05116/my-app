import React from 'react'
import { PiSteeringWheelLight } from "react-icons/pi"
import { BsPeople, BsSpeedometer2 } from "react-icons/bs"
import { LuFuel } from "react-icons/lu"
const Card = ({ data }) => {
  return (
    <div className='flex flex-col mx-4 mt-2 shadow-2xl
    rounded-3xl mb-2'>
      <div className='flex justify-center items-center m-5'>
        <img className='rounded-lg h-[185px] w-[340px] ' src={data.image} alt="" />
      </div>
      <div className='flex justify-between mx-5'>
        <h1 className='font-semibold'>{data.name} Series</h1>
        <p className='border-2 border-blue-400 border-dashed rounded-full px-3'>{data.year_launched}</p>
      </div>
      <div className='grid grid-cols-2 justify-center items-center mx-5 gap-3 mb-2'>
        <p className='flex items-center'>
        <BsPeople className='text-blue-400 font-semibold' />
        {data.seating_capacity} People</p>
        <p className='flex items-center  '>
        <LuFuel className='text-blue-400 font-semibold  ' />
        {data.fuel_type}</p>
        <p className='flex  items-center  '><BsSpeedometer2 className=' text-blue-400 font-semibold  ' />
        {data.mileage} km / 1-litre</p>
        <p className='flex items-center  '><PiSteeringWheelLight className=' text-blue-400 font-semibold  ' />{data.transmission}</p>
      </div>
      <hr />
      <div className='flex justify-between mx-5 mt-2 pb-3'>
        <p className='font-bold'>${data.price}</p>
        <button className='bg-blue-400 rounded text-white p-2'>Rent Now</button>
      </div>


    </div>
  )
}

export default Card
