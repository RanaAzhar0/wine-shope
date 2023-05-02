import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
import { Pagination } from "swiper";
import Img1 from "../images/newfolder09.jpg";
import Img2 from "../images/newfolder10.jpg";
import Img3 from "../images/newfolder11.jpg";
import Img4 from "../images/newfolder12.jpg";
import Img5 from "../images/newfolder13.jpg";
import Img6 from "../images/newfolder14.jpg";





export default function Slider() {
  return (
    <>
      <div className="h-[145vh] w-[100%] flex justify-around flex-col ">
        <div className="flex justify-center h-56 w-[100%]">
          <h1 className="items-center flex text-4xl  font-extrabold">WINES THAT YOU DO NOT COME ACROSS<br /> EVERY DAY AND YET YOU WOULD LIKE<br /> TO DRINK THEM DAILY</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  ">
        
          <SwiperSlide className="">
            <div className="h-[80vh] w-72 ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img1}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 7500</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh] w-72  ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img2}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 1500</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh] w-72  ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img3}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 5000</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh] w-72  ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img4}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 1000</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh] w-72  ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img5}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 8500</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[80vh] w-72  ">
              <div className="h-[58vh] w-72  " style={{ backgroundImage: `url(${Img6}) `, backgroundSize: "100% 100%" }}>
              </div>
              <div className="h-8 w-[100%]  flex  justify-center items-center ">
                <p className="font-thin text-sm  ">Chardonnay, Mitroi Domains</p>

              </div>
              <div className="h-16 w-[100%]  flex flex-col justify-center items-center  ">
                <p className="font-bold  text-sm   hover:hidden cursor-pointer">Rs 9000</p>
                <button className="hover:text-green-700 text-lg font-extrabold cursor-pointer ">Add cart</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='h-120 w-[100%] mt-10 flex items-center justify-center  overflow-hidden'>

          <button className='bg-green-500 py-3 px-6 font-bold   rounded  transition ease-in-out delay-150 hover:translate-y-1  hover:text-slate-300 text-white duration-300'>SUBSCRIE</button>
        </div>
      </div>
    </>
  );
}