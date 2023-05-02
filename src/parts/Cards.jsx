import React from 'react'
import Img from "../images/new folder25.jpg"
import Img1 from "../images/new folder26.jpg"
import Img2 from "../images/new folder27.jpg"
import Img3 from "../images/new folder28.jpg"
import Img4 from "../images/new folder29.jpg"
import Img5 from "../images/new folder30.jpg"
import Img6 from "../images/new folder31.jpg"




const Cards = () => {
  return (
    <>
    <div className='h-44 w-[100%] bg-black flex flex-row' >
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img1} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img2} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img3} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img4} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img5} alt="" />
        </div>
        <div className='h-[100%] w-[20%] hover:opacity-90'>
            <img className='h-[100%] w-[100%]' src={Img6} alt="" />
        </div>

    </div>
    </>
  )
}

export default Cards