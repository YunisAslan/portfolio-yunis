import React, { useRef, useState } from "react";

import { MdErrorOutline, MdDone } from "react-icons/md";
// EMAILJS
import emailjs from "@emailjs/browser";
import Button from "../components/ui/Button";

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const formElement = useRef();
  const [successMsg, setSusccessMsg] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const requiredMsg = t("contact.requiredValidation");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required(requiredMsg)
        .max(20, t("contact.name_input.maxValidation")),
      email: Yup.string()
        .required(requiredMsg)
        .email(t("contact.email_input.validation")),
      message: Yup.string()
        .required(requiredMsg)
        .min(10, t("contact.message_input.minValidation")),
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
            {t("contact.name_input.label")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("contact.name_input.placeholder")}
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
            {t("contact.email_input.label")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("contact.email_input.placeholder")}
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
            {t("contact.message_input.label")}
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder={t("contact.message_input.placeholder")}
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
          {t("contact.submit_btn")}
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
              <MdDone />
              <span className="pl-2 text-sm">{t("contact.successMsg")}</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
