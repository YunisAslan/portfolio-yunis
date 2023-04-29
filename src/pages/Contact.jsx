import React from 'react'

import BackHomeBtn from '../components/ui/BackHomeBtn';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    return (
        <>
            <BackHomeBtn />

            <section className="contact flex flex-col justify-center items-center">
                <h2 className='text-4xl font-semibold text-transparent bg-clip-text pt-3 pb-3 dark:text-white'>
                    Contact Me
                </h2>

                <ContactForm />
            </section>
        </>
    )
}

export default Contact