import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import TestimonialContainer from '../components/TestimonialContainer'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Introduction />
            </div>

            <Skills />
            <Projects />
            {/* <TestimonialContainer /> */}
        </>
    )
}

export default Home