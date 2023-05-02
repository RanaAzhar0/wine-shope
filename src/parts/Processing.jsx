import React from 'react'
import Img1 from "../images/newfolder16.png"
import Img2 from "../images/newfolder17.png"
import Img3 from "../images/newfolder18.png"

const Processing = () => {
  return (
    <>
       <div className='h-[90vh] w-[100%] bg-yellow-500 p-1'>
        <h1 className='text-5xl font-extrabold text-black font-mono mt-11 ml-[78vh]'>HOW IT WORKS</h1>
        <div className=' h-[65vh] w-[100%] flex items-center justify-around mt-11' >
          <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center  '>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img1} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>
                <h1 className='font-bold text-lg '>Choose your preferred plan</h1>
              <p className=' text-slate-800'>You receive carefully chosen wines, by sommelie<br />rs and hobbyists, from wine cellars who love<br /> grapes and wine, equally.</p>
            </div>
          </div>
          <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center'>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img2} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>
                <h1 className='font-bold text-lg '>You get the box</h1>
              <p className=' text-slate-800'>Every month, on the day you subscribed, you<br />receive the wines from the subscription, <br/>along with the related guides.</p>
            </div>
          </div> <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center '>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img3} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>
                <h1 className='font-bold text-lg '>Enjoy the experience</h1>
              <p className=' text-slate-800'>You taste the wines, learn more about them, refine yo <br/>ur taste and then you can amaze your friends with <br/> your discoveries.</p>
            </div>
          </div>


          
        </div>
      </div>
    </>
  )
}

export default Processing