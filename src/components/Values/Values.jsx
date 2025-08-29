import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import ValueImg from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValue=value.slice(0,2).map((item)=>{
        return(
            <div className='flex md:flex-row-reverse items-center gap-7 my-7.5' key={item.id}>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.desc}</p>
                </div>
            </div>
        )
    })

    const rightValue=value.slice(2).map((item)=>{
        return(
            <div className='flex items-center gap-7 my-7.5' key={item.id}>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>
                <div >
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600'>{item.desc}</p>
                </div>
            </div>
        )
    })


  return (
    <section>
        <div className='max-w-[1200px] mx-auto px-10 py-5'>
        <Heading highlight="Our" content="Values" />
        <div className='flex md:flex-row flex-col md:gap-15 mt-15'>
            <div className=' flex flex-col justify-between'>
{leftValue}
            </div>
            <div className="hidden md:flex w-1/2 ">
                <img src={ValueImg} alt="" />
            </div>
            <div className=' flex flex-col justify-between'>
{rightValue}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Values

const value=[
    {
        id:1,
        title:"Trust",
        desc:"It is a long established fact that a reader will be distracted by the readable.",
        icon:<FaHeart/>
    },
    {
        id:2,
        title:"Always Fresh",
        desc:"It is a long established fact that a reader will be distracted by the readable.",
        icon:<FaLeaf/>
    },
    {
        id:3,
        title:"TrustFood Safety",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon:<FaShieldAlt/>
    },
    {
        id:4,
        title:"100% Organic",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon:<FaSeedling/>
    }
]