import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav";
import "./Login.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
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

  const validate = ({ email, password }) => {
    const errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (email.trim() === "") {
      errors.email = "Please enter email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate password
    if (password.trim() === "") {
      errors.password = "Please enter password";
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
        const response = await axios.post(
          "http://localhost:8080/api/user/login",
          formValues
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        toast.success("Login successfull");
        setTimeout(() => {
          Navigate("/devPage");
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
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && <p>{formErrors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <p>{formErrors.password}</p>}

            <button className="login-btn" type="submit" disabled={isSubmitting}>
              Login
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

export default Login;
