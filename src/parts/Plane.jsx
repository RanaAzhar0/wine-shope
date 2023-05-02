import React from 'react'
import Img1 from "../images/newfolder20.png"
import Img2 from "../images/newfolder21.png"
import Img3 from "../images/newfolder22.png"

const Plane = () => {
  return (
    <>
      <div className='h-[98vh] w-[100%] bg-yellow-500 p-1'>
        <h1 className='text-5xl font-extrabold text-black font-mono mt-11 ml-[68vh]'>ARE YOU STILL THINKING</h1>
        <div className=' h-[65vh] w-[100%] flex items-center justify-around mt-11' >
          <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center  '>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img1} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>
              <p className=' text-slate-800 font-bold text-sm'>You can change your subscription preferences at any time.</p>
            </div>
          </div>
          <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center'>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img2} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>
              <p className=' text-slate-800 font-bold text-sm'>Poți anula oricând abonamentul.</p>
            </div>
          </div> <div className='h-[45vh] w-[30%] flex flex-col justify-between items-center '>
            <div className='h-32 w-32   '>
              <img className='h-[100%] w-[100%]' src={Img3} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center flex-col'>

              <p className=' text-slate-800'>Dacă nu-ți place vinul pe care l-am ales (deși suntem convinși că<br /> nu se va întampla asta), îți dăm o sticlă diferită.</p>
            </div>
          </div>
        </div>
        <div className='h-[8vh] w-[100%] flex justify-center items-center'>
          <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
        </div>
      </div>
    </>
  )
}

export default Plane