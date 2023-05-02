import React from 'react'
import Img from "../images/basket1.png"
import Img1 from "../images/basket2.png"
import Img2 from "../images/download.png"
import Img3 from "../images/downloads.png"
import Img4 from "../images/downloaded.png"
// import "animate.css/animate.min.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Prize = () => {
    useEffect(()=>{

        Aos.init({duration:500});
    },[]);
    return (
        <>
            <div className='h-[140vh] w-[100%] '>
                <div className='h-72 w-[100%]  flex justify-center items-center flex-col '>
                    <h1 className='text-4xl font-extrabold '>CHOOSE THE BOX OF SURPRISE WINES</h1>
                    <h1 className='text-4xl font-extrabold '>TO TRY MONTH BY MONTH</h1>
                    <p className='text-gray-900 font-bold text-lg mt-4'>Don't waste any more time in front of the shelf and let the specialists choose for you. Choose your favorite plan!</p>
                </div>
                <div className='flex flex-row h-[85vh] w-[100%] '>
                    <div className='  h-[100%] w-[20%] flex flex-col items-center'>
                        <div data-aos='fade-up' className=' h-36 w-36  '>
                            <img className='h-[100%] w-[100%]' src={Img} alt="" />
                        </div>
                        <div className='h-44 w-[100%]  flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-2xl'>2 ROMANIAN WINES</h1>
                            <p className='text-lg text-gray-400'>Bottles of red, Romanian wine,<br /> along with their guides.</p>
                            <h1 className=' font-bold text-sm'>120 lei</h1>
                            <p className='text-xs'>+ Delivery from 0 to 20 lei per month</p>
                        </div>
                        <div className='h-32 w-[100%] flex flex-col items-center justify-around'>
                            <select className='py-3 px-8 border  font-thin text-xs'>
                                <option value="Montly" selected>Montly</option>
                                <option value="Three month plan">Three month plan</option>
                            </select>
                            <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
                        </div>
                   <p className='mt-5'><u>More details</u></p>
                    </div>
                    <div className='  h-[100%] w-[20%] flex flex-col items-center'>
                        <div data-aos='fade-up' className=' h-36 w-36  '>
                            <img className='h-[100%] w-[100%]' src={Img1} alt="" />
                        </div>
                        <div className='h-48 w-[100%]  flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-2xl'>2 ROMANIAN WHITE</h1>
                            <h1 className='font-semibold text-2xl'> WINES </h1>

                            <p className='text-lg text-gray-400'>Bottles of red, Romanian wine,<br /> along with their guides.</p>
                            <h1 className=' font-bold text-sm'>120 lei</h1>
                            <p className='text-xs'>+ Delivery from 0 to 20 lei per month</p>
                        </div>
                        <div className='h-32 w-[100%]  flex flex-col items-center justify-around'>
                            <select className='py-3 px-8  border font-thin text-xs'>
                                <option value="Montly" selected>Montly</option>
                                <option value="Three month plan">Three month plan</option>
                            </select>
                            <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
                        </div>
                   <p className='mt-5'><u>More details</u></p>
                    </div> 
                     <div className='  h-[100%] w-[20%] flex flex-col items-center'>
                        <div data-aos='fade-up' className=' h-36 w-36  '>
                            <img className='h-[100%] w-[100%]' src={Img2} alt="" />
                        </div>
                        <div className='h-52 w-[100%] flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-2xl'>2 MIXED ROMANIAN</h1>
                            <h1 className='font-semibold text-2xl'>WINES</h1>
                            <p className='text-lg text-gray-400'>Bottles of red, Romanian wine,<br /> along with their guides.</p>
                            <h1 className=' font-bold text-sm'>120 lei</h1>
                            <p className='text-xs'>+ Delivery from 0 to 20 lei per month</p>
                        </div>
                        <div className='h-32 w-[100%]  flex flex-col items-center justify-around'>
                            <select className='py-3 px-8 border  font-thin text-xs'>
                                <option value="Montly" selected>Montly</option>
                                <option value="Three month plan">Three month plan</option>
                            </select>
                            <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
                        </div>
                   <p className='mt-5'><u>More details</u></p>
                    </div> 
                     <div className='  h-[100%] w-[20%] flex flex-col items-center'>
                        <div data-aos='fade-up' className=' h-36 w-36  '>
                            <img  className='h-[100%] w-[100%]' src={Img3} alt="" />
                        </div>
                        <div className='h-52 w-[100%]  flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-2xl'>2 MIXED ROMANIAN </h1>
                            <h1 className='font-semibold text-2xl'> WINES</h1>

                            <p className='text-lg text-gray-400'>Bottles of red, Romanian wine,<br /> along with their guides.</p>
                            <h1 className=' font-bold text-sm'>120 lei</h1>
                            <p className='text-xs'>+ Delivery from 0 to 20 lei per month</p>
                        </div>
                        <div className='h-32 w-[100%] flex flex-col items-center justify-around'>
                            <select className='py-3 px-8 border font-thin text-xs'>
                                <option value="Montly" selected>Montly</option>
                                <option value="Three month plan">Three month plan</option>
                            </select>
                            <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
                        </div>
                   <p className='mt-5'><u>More details</u></p>
                    </div>  
                    <div className='  h-[100%] w-[20%] flex flex-col items-center'>
                        <div data-aos='fade-up' className=' h-36 w-36  '>
                            <img className='h-[100%] w-[100%]' src={Img4} alt="" />
                        </div>
                        <div className='h-52 w-[100%] flex flex-col items-center justify-center'>
                            <h1 className='font-semibold text-2xl'>2 NATIONAL MIXED</h1>
                            <h1 className='font-semibold text-2xl'>WINES</h1>
                            <p className='text-lg text-gray-400'>Bottles of red, Romanian wine,<br /> along with their guides.</p>
                            <h1 className=' font-bold text-sm'>120 lei</h1>
                            <p className='text-xs'>+ Delivery from 0 to 20 lei per month</p>
                        </div>
                        <div className='h-32 w-[100%]  flex flex-col items-center justify-around'>
                            <select className='py-3 px-8 border font-thin text-xs'>
                                <option value="Montly" selected>Montly</option>
                                <option value="Three month plan">Three month plan</option>
                            </select>
                            <button className='bg-green-500 shadow-md py-4 px-7 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>Chose This Plan</button>
                        </div>
                   <p className='mt-5'><u>More details</u></p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Prize