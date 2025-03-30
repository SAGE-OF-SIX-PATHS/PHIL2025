import React, { useState, useRef, useEffect } from "react";
import validator from "validator";
import { useScrollContext } from "../hooks/useScrollContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { dispatch } = useScrollContext();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errMssg, setErrMssg] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Revalidate the input field as the user types
    const errors = { ...errMssg };
    if (name === "name" && !validator.isEmpty(value)) {
      delete errors.name;
    } else if (name === "email" && validator.isEmail(value)) {
      delete errors.email;
    } else if (name === "message" && !validator.isEmpty(value)) {
      delete errors.message;
    }
    setErrMssg(errors);
  };

  const inputsValid = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (validator.isEmpty(name)) {
      errors.name = "I'd love to know your name!";
    }
    if (!validator.isEmail(email)) {
      errors.email = "I'd need a valid email to reply you!";
    }
    if (validator.isEmpty(message)) {
      errors.message = "Please leave me some message!";
    }

    setErrMssg(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!inputsValid()) {
      return;
    }

    setSubmitting(true);
    emailjs
      .sendForm("service_etijegc", "template_zrohmna", form.current, {
        publicKey: "Jevwt9uRllCInf_FC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSubmitting(false);
        }
      );
  };

  useEffect(() => {
    if (success) {
      const delay = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(delay);
    }
  }, [success]);

  return (
    <div className="relative w-screen bg-[url('/images/Get-in-touch.jpg')] bg-fixed bg-center bg-no-repeat bg-cover p-20 ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-md w-full bg-transparent shadow-lg rounded-lg">
        <h2 className="text-4xl mb-6 text-primary">Get In Touch</h2>
        <hr className="w-24 border-t-4 my-4 border-text-orange" />
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-2xl text-primary font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className={
                `mt-1 block w-full border-b-2  bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ` +
                (!errMssg.name ? "border-primary" : " border-text-orange")
              }
            />
            <span className="text-text-orange">{errMssg.name}</span>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-2xl text-primary font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className={
                `mt-1 block w-full border-b-2  bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ` +
                (!errMssg.email ? "border-primary" : " border-text-orange")
              }
            />
            <span className="text-text-orange">{errMssg.email}</span>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-primary text-2xl font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              rows="4"
              className={
                `mt-1 block w-full border-b-2  bg-[#00000044] text-primary p-2 pb-1 font-semibold focus:border-b-2 focus:outline-none ` +
                (!errMssg.message ? "border-primary" : " border-text-orange")
              }
            />
            <span className="text-text-orange">{errMssg.message}</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="text-2xl w-full py-2 px-4 border-4 border-primary  text-primary hover:bg-secondary hover:text-primary font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {submitting ? "Submitting..." : "Send Message"}
          </button>
          {success && (
            <span className="text-primary">Message sent successfully!</span>
          )}
        </form>
      </div>
      <button
        onClick={() => dispatch({ type: "top" })}
        className="absolute bottom-8 right-20 text-2xl text-primary"
      >
        Goto Top
      </button>
    </div>
  );
};

export default Contact;
