import React, { useRef, useState } from "react";

import { MdErrorOutline, MdDone } from "react-icons/md";
// EMAILJS
import emailjs from "@emailjs/browser";
import Button from "../components/ui/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const formElement = useRef();
  const [successMsg, setSusccessMsg] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const requiredMsg = "Please fill out required fields";
  const maxSymbolMsg = "Maksimum 20 simvol ola bilər";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required(requiredMsg)
        .max(20, "Please limit your input to 20 characters or less"),
      email: Yup.string()
        .required(requiredMsg)
        .email("Please enter a valid email address"),
      message: Yup.string()
        .required(requiredMsg)
        .min(10, "The input must be a minimum of 10 characters"),
    }),

    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result);
            resetForm();
            setSusccessMsg(true);
            setTimeout(() => {
              setSusccessMsg(false);
            }, 3000);
          },
          (error) => {
            console.log(error);
            setSusccessMsg(false);
          }
        );
    },
  });

  return (
    <>
      <form
        action=""
        className="form flex flex-col items-center"
        onSubmit={formik.handleSubmit}
        ref={formElement}
      >
        <div className="form-control relative space-y-3">
          <label
            htmlFor="name"
            className="absolute top-5 pl-3 text-sm font-[600] text-taxonomyBlack"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="What Should I call you ?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`form-input h-16 rounded-md border border-lightBorder px-3 pt-5 shadow-formShadow outline-none mm:w-72 sm:w-[30rem] ${
              formik.errors.name && formik.touched.name
                ? "form-control is-invalid-name border-red-500"
                : "form-control is-valid-name "
            }`}
          />

          {formik.errors.name && formik.touched.name && (
            <span className="flex h-2 items-center text-red-500 mm:text-sm sm:text-base">
              <MdErrorOutline className="mr-1 mm:text-lg sm:text-xl" />
              {formik.errors.name}
            </span>
          )}
        </div>

        <div className="form-control relative space-y-3">
          <label
            htmlFor="email"
            className="absolute top-5 pl-3 text-sm font-[600] text-taxonomyBlack"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Where should I respond ?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`form-input h-16 rounded-md border border-lightBorder px-3 pt-5 shadow-formShadow outline-none mm:w-72 sm:w-[30rem] ${
              formik.errors.email && formik.touched.email
                ? "form-control is-invalid-name border-red-500"
                : "form-control is-valid-name "
            }`}
          />

          {formik.errors.email && formik.touched.email && (
            <span className="flex h-2 items-center text-red-500 mm:text-sm sm:text-base">
              <MdErrorOutline className="mr-1 mm:text-lg sm:text-xl" />
              {formik.errors.email}
            </span>
          )}
        </div>

        <div className="form-control relative mt-1 space-y-2">
          <label
            htmlFor="message"
            className="absolute top-4 pl-3 text-sm font-[600] text-taxonomyBlack"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="How can I help you"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={`form-input h-40 resize-none rounded-md border border-lightBorder px-3 pt-7 shadow-formShadow outline-none mm:w-72 sm:w-[30rem] 
            ${
              formik.errors.message && formik.touched.message
                ? "form-control is-invalid-name border-red-500"
                : "form-control is-valid-name"
            }`}
          ></textarea>

          {formik.errors.message && formik.touched.message && (
            <span className="flex h-2 items-center text-red-500 mm:text-sm sm:text-base">
              <MdErrorOutline className="mr-1 mm:text-lg sm:text-xl" />
              {formik.errors.message}
            </span>
          )}
        </div>

        <Button
          type="submit"
          className="button-left left relative mt-5 mm:w-72 sm:w-[30rem]"
          variant="primary"
        >
          Submit
        </Button>
      </form>

      <AnimatePresence>
        {successMsg && (
          <motion.div
            className="done-msg fixed left-1/2 top-10 z-50 -translate-x-1/2  -translate-y-1/2 rounded-sm bg-green-600 p-2 text-center text-xl text-white"
            initial={{ x: "-50%", y: -30, opacity: 0 }}
            animate={{ x: "-50%", y: 0, opacity: 1 }}
            exit={{ x: "-50%", y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="flex items-center px-2">
              <MdDone />{" "}
              <span className="pl-2 text-sm">
                The message sent successfully.
              </span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
