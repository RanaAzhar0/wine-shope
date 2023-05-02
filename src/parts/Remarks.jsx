import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../images/newfolder07.png"
import "../styley.css";


import { Parallax, Pagination, Navigation } from "swiper";

export default function Remarks() {
    return (
        <>
            <div className="h-[110vh] w-[100%] bg-yellow-500 p-1 ">
                <div className="h-32 w-[100%] flex mt-[20vh] items-center flex-col">
                    <h1 className="text-4xl font-extrabold ">WHAT WINEFUL CUSTOMERS</h1>
                    <h1 className="text-4xl font-extrabold "> SAY</h1>

                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper "
                >
                    {/* <div
          slot="container-start"
          className="parallax-bg bg-yellow-600"
        //   style={{ backgroundImage: `url(${Img}) `, backgroundSize: "100% 100%" }}
          data-swiper-parallax="-23%"
        >

        </div> */}



                    <SwiperSlide>


                        <div className="text" data-swiper-parallax="-100">
                            <p className="text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                            <div className="subtitle text-black" data-swiper-parallax="-200">
                                lurna
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>


                        <div className="text" data-swiper-parallax="-100">
                            <p className="text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                            <div className="subtitle text-black" data-swiper-parallax="-200">
                                Silvia
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>


                        <div className="text" data-swiper-parallax="-100">
                            <p className="text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                            <div className="subtitle text-black" data-swiper-parallax="-200">
                                Rutaru Rida
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    );
}
