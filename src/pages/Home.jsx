import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Introduction />
            </div>

            <Skills />
            <Projects />
            <Testimonials />
        </>
    )
}

export default Home