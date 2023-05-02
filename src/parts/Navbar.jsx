import React, { useEffect, useState } from 'react'
import { navbarData } from "../Data"
import { BsFillCartPlusFill } from 'react-icons/bs'
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <div className={colorChange ? 'navbar colorChange h-16  w-[100%] flex  duration-200 flex-row justify-around  z-50 top-0 sticky' : 'navbar h-16  w-[100%] flex flex-row justify-around z-50 top-0 absolute duration-200'}>
                <div className='h-14 w-[8%] py-2.5 px-5 flex items-center'>
                    {
                        navbarData.logo.map(ele => <img src={ele} />)
                    }
                </div>
                <div className='flex  flex-row w-64 mr-[35vh] justify-between'>

                    <ul className="flex  justify-between items-center w-[100%]">
                        <h1 className='text-black cursor-pointer text-lg font-bold hover:text-slate-400 hover:duration-700 mt-1'>SUBCRIPTIONS</h1>
                        <li className='text-black cursor-pointer text-sm font-semibold hover:text-slate-400 hover:duration-700 font-'>SHOP


                        </li>
                        <li className='text-black cursor-pointer text-sm font-semibold hover:text-slate-400 hover:duration-700'>GIFTS</li>

                    </ul>
                </div>
                <div className=' flex w-[60vh] ml-14'>
                    <div className='w-[40vh] flex items-center'>
                        <ul className='flex justify-between w-[100%]'>
                            {
                                navbarData.liL.map(ele => <li className='text-black text-sm cursor-pointer hover:text-slate-400 hover:duration-700'>{ele}</li>)
                            }
                        </ul>
                    </div>

                    <div className='flex items-center justify-between w-[25vh] ml-10 text-black text-2xl'>
                        <BsFillCartPlusFill className=' cursor-pointer  hover:text-slate-400 hover:duration-700' />
                        <BsFillPersonFill className=' cursor-pointer  hover:text-slate-400 hover:duration-700' />
                        <AiOutlineSearch className=' cursor-pointer  hover:text-slate-400 hover:duration-700' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar