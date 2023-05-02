import React from 'react'
import Img from "../images/hero.webp"
import Img1 from "../images/newfolder05.png"
import Img2 from "../images/newfolder06.png"
import Img3 from "../images/newfolder07.png"


const Hero = () => {
  return (
    <>
      <div className='h-[100vh] w-[100%] bg-black flex flex-col items-center justify-around ' style={{ backgroundImage: `url(${Img}) `, backgroundSize: "100% 100%" }}>
        <h1 className='text-white text-6xl font-[oswald] font-extrabold mt-24'>YOUR WINE <br />SUBCRIPTION<br /> CHOSEN BY <br />RANA AZHAR</h1>
        <p className='text-white text-lg font-[rubik]'>Discover your New Favorite Wine Shop the world's  largest <br /> wine store Red Wines White Wines Biggest Savings SHOP POPULAR WINE  <br />TYPES Cab Sauv Bordeaux Pinot Noir Sangiovese</p>
        <div className='h-120 w-[21%] mt-40 flex items-center justify-between  overflow-hidden'>

          <button className='bg-green-500 py-3 px-5 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1 hover:text-slate-300 text-white duration-300'>SUBSCRIE</button>
          <button className='bg-white py-3 px-5 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1 hover:bg-slate-300  duration-300'>GIVE AS A GIFT</button>
        </div>

      </div>
      <div className='h-[90vh] w-[100%] bg-yellow-400 p-1'>
        <h1 className='text-5xl font-extrabold text-white font-[oswald] mt-11 ml-[78vh]'>WHY SUBSCRIBE?</h1>
        <div className=' h-[65vh] w-[100%] flex items-center justify-around mt-11' >
          <div className='h-[55vh] w-[30%] flex flex-col justify-between items-center'>
            <div className='h-52 w-52 '>
              <img src={Img1} alt="" />
            </div>
            <div className='h-24 w-[100%]   flex justify-center items-center'>
              <p className='font-bold'>You receive carefully chosen wines, by sommelie<br />rs and hobbyists, from wine cellars who love<br /> grapes and wine, equally.</p>
            </div>
          </div>


          <div className='h-[55vh] w-[30%] flex flex-col justify-between items-center'>
            <div className='h-52 w-52 '>
              <img src={Img2} alt="" />
            </div>
            <div className='h-24 w-[100%]  flex justify-center items-center'>
              <p className='font-bold'>You receive carefully chosen wines, by sommelie<br />rs and hobbyists, from wine cellars who love<br /> grapes and wine, equally.</p>
            </div>
          </div>
          <div className='h-[55vh] w-[30%]  flex flex-col justify-between items-center'>
            <div className='h-52 w-52'>
              <img src={Img3} alt="" />
            </div>
            <div className='h-24 w-[100%] flex justify-center items-center'>
              <p className='font-bold'>You receive carefully chosen wines, by sommelie<br />rs and hobbyists, from wine cellars who love<br /> grapes and wine, equally.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero