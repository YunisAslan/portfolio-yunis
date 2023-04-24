import React from 'react'

import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from './Button';

const BackHomeBtn = () => {

    const navigate = useNavigate();

    return (
        <>
            <Button
                onClick={() => navigate('/')}
                className='mm:left-6 md:mx-12 text-[30px] w-[4rem] h-[4rem] lg:mx-[10rem] relative bottom-3'
                variant="circle"
            >
                <BiArrowBack />
            </Button>
        </>
    )
}

export default BackHomeBtn