import React from 'react'
import "../foot.css"
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {MdSlowMotionVideo} from 'react-icons/md'
import Img from "../images/new folder34.png"
import Img1 from "../images/new folder35.png"
import Img2 from "../images/new folder36.png"





export const Footer = () => {
  return (
    <>
    <div class="flex flex-wrap flex-col justify-around items-center h-[90vh] bg-green-600 p-6">
      <h1 className='text-4xl font-extrabold  font-[oswald]'>JOIN THE WINEFUL COMMUNITY!</h1>
      <div class="flex  mb-4 w-[80%] h-20  justify-evenly">
        <div class="w-9 sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
          <button class="text-lg py-3 px-5 bg-transparent border hover:bg-black rounded-sm hover:text-white border-black">Sign up with Facebook</button>
        </div>
        <div class="w-9 sm:w-1/2 md:w-1/2 lg:w-1/4  ">
        <button class="text-lg py-3 px-5 bg-transparent border hover:bg-black rounded-sm hover:text-white border-black">Sign up with Email</button>
        </div>
      </div>
      <div className='flex w-[70%] justify-center items-center h-14 '>
        <ul className='flex flex-row justify-around w-[100%]'>
          <li>Subcriptin</li>
          <li>Office</li>
          <li>FAQ</li>
          <li>Shop</li>
          <li>Privacy</li>
          <li>Cookis</li>
          <li>NACP</li>
          <li>Terms and Condictions</li>
          <li>Contacts</li>


        </ul>
      </div>
      <div className='flex w-[25%] justify-center items-center h-14'>
        <ul className='flex flex-row justify-around w-[100%]'>
          <li className='font-bold text-4xl'><AiOutlineFacebook/></li>
          <li className='font-bold text-4xl'><AiFillInstagram/></li>
          <li className='font-bold text-4xl'><MdSlowMotionVideo/></li>
        </ul>
      </div>
      <div className='flex w-[25%] justify-center items-center h-24 flex-col'>
      <p className='text-black font-bold text-xs'>payment method</p>

        <ul className='flex flex-row justify-around w-[100%]'>
          <img src={Img} alt="" />
          <img src={Img1} alt="" />    
          <img src={Img2} alt="" />
        </ul>
      </div>
    </div>
    <div class="bg-black p-2 pl-6 flex justify-between">
      <p class="bottom">Copyright © 2019 Wineful</p>
      <p>Terms and conditions</p>
    </div>
    
    </>
  )
}
