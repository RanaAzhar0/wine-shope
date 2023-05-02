import React from 'react'
import Img from "../images/newfolder23.jpg"


const Serves = () => {
  return (
    <>
    <div className='h-[90vh] w-[100%]  flex flex-row justify-between'>
        <div className='h-[90vh] w-[50%]  flex justify-center items-center' >
            <div className='h-[70vh] w-[90%] '>
                <img className='h-[100%] w-[100%]' src={Img} alt="" />
            </div>
        </div>
        <div className='h-[90vh] w-[50%] flex justify-center items-center ' >
        <div className='h-[75vh] w-[90%]  flex justify-center flex-col'>
            <div className='h-[25vh] w-[90%] flex justify-center'>
                <h1 className='text-4xl font-bold'>DO YOU WANT TO<br/> SUBSCRIBE TO THE<br/> NEWSLETTER?</h1>
            </div>
            <div className='h-[10vh] w-[90%] flex'>
                <h1 className=''>Leave us your address and we will only send you one email per month in which<br/> we keep you up to date with everything that is new in<br/> the world of wine and beyond.</h1>
            </div>
            <div className='h-[25vh] w-[50%] flex flex-col justify-evenly'>
                <h1 className='font-bold'>Email Address</h1>
                <input type="email" className='px-7 py-3 border' />
          <button className='bg-green-600 py-4 px-7 font-bold w-[30vh] transition ease-in-out delay-150 hover:translate-y-1 duration-300'>SUBSCRIBE</button>

            </div>

                
            </div>
        </div>


    </div>
    </>
  )
}

export default Serves