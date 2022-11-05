import { useState, useEffect } from "react";

import Footer from "./Footer";
import classes from "./Contact.module.css";

const Contact = () => {
  const initialValues = { firstname: "", lastname: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChangeHandler = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setError(validateValues(formValues));
    setIsSubmit(true);

    formValues.firstname = "";
    formValues.lastname = "";
    formValues.email = "";
    formValues.message = "";
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [error, formValues, isSubmit]);

  const validateValues = (value) => {
    const errors = {};
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstname) {
      errors.firstname = "First name is required";
    }
    if (!value.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!value.email || !emailFormat.test(value.email)) {
      errors.email = "A valid email is required";
    }
    if (!value.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={submitFormHandler} className={classes.container}>
        <h1 className={classes.title}>Contact Me</h1>
        <p className={classes.subtext}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <div className={classes["name-container"]}>
          <div className={`${classes.nameField} ${classes.div}`}>
            <label htmlFor="firstname" className={classes.label}>
              First Name
            </label>
            <input
              className={classes.input}
              type="text"
              placeholder="Enter your first name"
              name="firstname"
              id="first_name"
              defaultValue={formValues.firstname}
              onChange={inputChangeHandler}
            />
            <p className={classes.error}>{error.firstname}</p>
          </div>

          <div className={`${classes.nameField} ${classes.div}`}>
            <label htmlFor="lastname" className={classes.label}>
              Last Name
            </label>
            <input
              className={classes.input}
              type="text"
              placeholder="Enter your last name"
              name="lastname"
              id="last_name"
              defaultValue={formValues.lastname}
              onChange={inputChangeHandler}
            />
            <p className={classes.error}>{error.lastname}</p>
          </div>
        </div>

        <div className={classes.div}>
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            className={classes.input}
            type="text"
            placeholder="Enter your email"
            id="email"
            defaultValue={formValues.email}
            onChange={inputChangeHandler}
          />
          <p className={classes.error}>{error.email}</p>
        </div>

        <div className={classes.div}>
          <label htmlFor="message" className={classes.label}>
            Message
          </label>
          <textarea
            className={classes.input}
            placeholder="Send me a message and I'll reply you as soon as possible"
            id="message"
            defaultValue={formValues.message}
            onChange={inputChangeHandler}
          />
          <p className={classes.error}>{error.message}</p>
        </div>

        <div className={classes["checkbox-container"]}>
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox">
            You agree to providing your data to{" "}
            <a href="https://khayt.netlify.app/" target="blank">
              Khadijah
            </a>{" "}
            who may contact you.
          </label>
        </div>

        <button className={classes["submit-btn"]} id="btn__submit">
          Send message
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
