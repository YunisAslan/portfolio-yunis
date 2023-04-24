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
                className='mm:left-10 md:left-[70px] lg:left-48 text-[30px] w-14 h-14 relative bottom-3'
                variant="circle"
            >
                <BiArrowBack />
            </Button>
        </>
    )
}

export default BackHomeBtn