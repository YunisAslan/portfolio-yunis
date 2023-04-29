import React from "react";

import BackHomeBtn from "../components/ui/BackHomeBtn";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, []);

  return (
    <>
      <BackHomeBtn />

      <section className="contact flex flex-col items-center justify-center">
        <h2 className="bg-gradient-main bg-clip-text pb-3 pt-3 text-4xl font-semibold text-transparent dark:text-white">
          Contact Me
        </h2>

        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
