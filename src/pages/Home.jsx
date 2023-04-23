import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import TestimonialContainer from '../components/TestimonialContainer'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Introduction />
            </div>

            <Skills />
            <TestimonialContainer />
        </>
    )
}

export default Home