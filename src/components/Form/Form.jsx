import React from "react";
import "./Form.css";
import { useFormik } from "formik";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.phone) {
      errors.phone = "Phone is required";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //   console.log(formik.values);
  // console.log(formik.errors);
  //   console.log("Touched", formik.touched);

  return (
    <div className="main">
      <div className="header">
        <h1>Sign Up Form</h1>
        <div className="underline"></div>
      </div>

      {/* <hr className="underline" /> */}
      <div className="form-container">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="txt-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="txt-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="txt-field">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="txt-field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              pattern="[1-9]{1}[0-9]{9}"
              maxLength="10"
              placeholder="Enter your phone no."
              onChange={formik.handleChange}
              value={formik.values.phone}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="txt-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              onChange={formik.handleChange}
              value={formik.values.address}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <div>{formik.errors.address}</div>
            ) : null}
          </div>

          <div className="button">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
