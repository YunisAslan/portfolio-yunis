import React from 'react'

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const UseNavigate = () => {

    const navigate = useNavigate();

    return (
        <>
            <button
                className='mm:mx-[1.6rem] md:mx-[3rem] lg:mx-[10rem] bottom-3
                flex items-center justify-center text-3xl relative rounded-full mm:w-[3rem] mm:h-[3rem] sm:w-[4rem] sm:h-[4rem] bg-white text-gray-600 cursor-pointer menu-trigger'
                onClick={() => navigate('/')}>
                <BiArrowBack className='absolute text-black' />
            </button>
        </>
    )
}

export default UseNavigate