import React, { useRef } from 'react'

import Button from '../components/Button'
import UseNavigate from '../hooks/UseNavigate'

// EMAILJS
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formElement = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = "service_kxgmwfl"
        const TEMPLATE_ID = "template_i9m3jtr"
        const PUBLIC_KEY = "OpWPT5HkETJWQE-d5"

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        formElement.current.reset();
    };

    return (
        <>
            <section className="contact">

                <UseNavigate />

                <h2 className='text-4xl font-bold flex justify-center dark:text-gray-100'
                    data-aos="fade"
                    data-aos-easing="ease-out"
                    data-aos-duration="500"
                >
                    Contact Me
                </h2>

                <form
                    action=""
                    className='form flex flex-col items-center'
                    onSubmit={sendEmail}
                    ref={formElement}

                    data-aos="fade"
                    data-aos-easing="ease-out"
                    data-aos-duration="800"
                >

                    <div className="form-control relative p-3">
                        <label htmlFor="name" className='absolute top-5 text-sm pl-3 text-pink-900 font-[800]'>Name</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            placeholder='What Should I call you ?'
                            className='form-input border-[1px] top-2 h-[4rem] sm:w-[30rem] mm:w-[17rem] pl-[14px] pt-5 rounded-lg border-pink-900
                         focus:border-pink-900'/>
                    </div>

                    <div className="form-control relative p-3">
                        <label htmlFor="email" className='absolute top-5 text-sm pl-3 text-pink-900 font-[800]'>Email Address</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='Where should I respond ?'
                            className='form-input border-[1px] top-2 h-[4rem] sm:w-[30rem] mm:w-[17rem] pl-[14px] pt-5 rounded-lg border-pink-900
                         focus:border-pink-900'/>
                    </div>

                    <div className="form-control relative p-3">
                        <label htmlFor="message" className='absolute top-5 text-sm pl-3 text-pink-900 font-[800]'>Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30" rows="10"
                            placeholder='How can I help you'
                            className='form-input border-[1px] sm:w-[30rem] mm:w-[17rem] h-[10rem] pl-[14px] pt-7 rounded-lg border-pink-900
                         focus:border-pink-900'>
                        </textarea>
                    </div>


                    <Button type="submit" btnText="Submit" className="my-custom-btn submitBtn
                    button-left left" />

                </form>

            </section>
        </>
    )
}

export default Contact