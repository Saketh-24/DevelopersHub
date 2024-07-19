import React, { useState } from "react";
import Nav from "../Nav";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    fullname: "",
    email: "",
    mobile: "",
    skills: "",
    password: "",
  };

  const Navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = ({ fullname, email, mobile, skills, password }) => {
    const errors = {};

    // Validate fullname
    if (fullname.trim() === "") {
      errors.fullname = "Please enter fullname";
    } else if (fullname.trim().length < 3) {
      errors.fullname = "Fullname must be at least 3 characters long";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (email.trim() === "") {
      errors.email = "Please enter email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate mobile
    const mobileRegex = /^[0-9]{10}$/;
    if (mobile.trim() === "") {
      errors.mobile = "Please enter mobile number";
    } else if (!mobileRegex.test(mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    // Validate skills
    if (skills.trim() === "") {
      errors.skills = "Please enter at least one skill";
    }

    // Validate password
    if (password.trim() === "") {
      errors.password = "Please enter password";
    } else if (password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setFormErrors(errors);
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        await axios.post("http://localhost:8080/api/user/register", formValues);
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      } catch (error) {
        toast.error(error.response.data);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Nav />
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleSubmit} className="credentials">
            <h1>SignUp</h1>
            <input
              name="fullname"
              value={formValues.fullname}
              onChange={handleChange}
              type="text"
              placeholder="Fullname"
            />
            {formErrors.fullname && <p>{formErrors.fullname}</p>}

            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            {formErrors.email && <p>{formErrors.email}</p>}

            <input
              name="mobile"
              value={formValues.mobile}
              onChange={handleChange}
              type="text"
              placeholder="Mobile"
            />
            {formErrors.mobile && <p>{formErrors.mobile}</p>}

            <input
              name="skills"
              value={formValues.skills}
              onChange={handleChange}
              type="text"
              placeholder="Enter skills separated by comma ','"
            />
            {formErrors.skills && <p>{formErrors.skills}</p>}

            <input
              name="password"
              value={formValues.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            {formErrors.password && <p>{formErrors.password}</p>}

            <button className="login-btn" type="submit" disabled={isSubmitting}>
              SignUp
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
};

export default SignUp;
