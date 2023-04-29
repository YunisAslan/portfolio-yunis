import React, { useRef, useState } from "react";

import { MdErrorOutline, MdDone } from "react-icons/md";
// EMAILJS
import emailjs from '@emailjs/browser';
import Button from '../components/ui/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {

    const formElement = useRef();
    const [successMsg, setSusccessMsg] = useState(false)

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Adınızı yazın').max(20, "Maksimum 20 simvol ola bilər"),
            email: Yup.string().required('Email tələb olunur').email("Emaili düzgün daxil edin"),
            message: Yup.string().required('Mesaj tələb olunur').min(10, "10 simvoldan az mesaj göndərilə bilməz")
        }),

        onSubmit: (values, { resetForm }) => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: values.name,
                email: values.email,
                message: values.message
            }, PUBLIC_KEY)
                .then((result) => {
                    console.log(result);
                    resetForm()
                    setSusccessMsg(true)
                    setTimeout(() => {
                        setSusccessMsg(false)
                    }, 3000);
                }, (error) => {
                    console.log(error);
                    setSusccessMsg(false)
                })
        }
    })

    return (
        <>
            <form
                action=""
                className='form flex flex-col items-center'
                onSubmit={formik.handleSubmit}
                ref={formElement}>

                <div className="form-control relative space-y-3">
                    <label htmlFor="name" className='absolute top-5 text-sm pl-3 text-taxonomyBlack font-[600]'>
                        Name
                    </label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='What Should I call you ?'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`form-input outline-none border h-16 mm:w-72 sm:w-[30rem] px-3 pt-5 rounded-md border-lightBorder ${formik.errors.name && formik.touched.name
                            ? 'form-control is-invalid-name border-red-500'
                            : 'form-control is-valid-name '}`}
                    />

                    {formik.errors.name && formik.touched.name &&
                        (<span className='text-red-500 flex items-center h-2 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 mm:text-lg sm:text-xl' />
                            {formik.errors.name}
                        </span>)
                    }
                </div>

                <div className="form-control relative space-y-3">
                    <label htmlFor="email" className='absolute top-5 text-sm pl-3 text-taxonomyBlack font-[600]'>
                        Email Address
                    </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Where should I respond ?'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`form-input outline-none border h-16 mm:w-72 sm:w-[30rem] px-3 pt-5 rounded-md border-lightBorder ${formik.errors.email && formik.touched.email
                            ? 'form-control is-invalid-name border-red-500'
                            : 'form-control is-valid-name '}`}
                    />

                    {formik.errors.email && formik.touched.email &&
                        (<span className='text-red-500 flex items-center h-2 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 mm:text-lg sm:text-xl' />
                            {formik.errors.email}
                        </span>)
                    }
                </div>

                <div className="form-control relative space-y-2 mt-1">
                    <label htmlFor="message" className='absolute top-4 text-sm pl-3 text-taxonomyBlack 
                    font-[600]'>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        cols="30" rows="10"
                        placeholder='How can I help you'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className={`form-input outline-none border h-40 mm:w-72 sm:w-[30rem] px-3 pt-7 rounded-md border-lightBorder resize-none 
                            ${formik.errors.message && formik.touched.message ? 'form-control is-invalid-name border-red-500' : 'form-control is-valid-name'}`}>
                    </textarea>

                    {formik.errors.message && formik.touched.message &&
                        (<h6 className='text-red-500 flex items-center h-2 sm:text-base mm:text-sm'>
                            <MdErrorOutline className='mr-1 mm:text-lg sm:text-xl' />
                            {formik.errors.message}
                        </h6>)
                    }
                </div>

                <Button
                    type="submit"
                    className="button-left left mt-5 relative mm:w-72 sm:w-[30rem]"
                    variant="primary"
                >
                    Submit
                </Button>
            </form>

            <AnimatePresence>
                {
                    successMsg &&
                    <motion.div className='done-msg fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center bg-green-600 text-white text-xl rounded-sm z-50 p-2'
                        initial={{ x: "-50%", y: -30, opacity: 0 }}
                        animate={{ x: "-50%", y: 0, opacity: 1 }}
                        exit={{ x: "-50%", y: -30, opacity: 0 }}
                        transition={{ duration: .5, ease: "easeInOut" }}
                    >
                        <span className='flex items-center px-2'>
                            <MdDone /> <span className='text-sm pl-2'>The message sent successfully.</span>
                        </span>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
};

export default ContactForm;
