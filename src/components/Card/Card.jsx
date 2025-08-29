import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import CustomButton from '../CustomButton/CustomButton'

const Card = (props) => {
  return (
    <div className='flex flex-col  bg-zinc-200 px-2 py-3 rounded-xl '>
        <div className='flex justify-between'>
            <span className='text-red-600'>
                <FaHeart/>
            </span>
            <button className='bg-orange-500 text-white rounded-[5px] px-3 py-2'>
                <FaPlus/>
            </button>
        </div>
        <div className=''>
            <img src={props.image} height='100px' width='100px'  />
        </div>
        <div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <CustomButton bText="Shop Now"/>
        </div>
    </div>
  )
}

export default Card