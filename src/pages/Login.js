import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLoggedIn, selectAuthError, clearAuthError } from "../store/authSlice"; // Import auth actions

const Login = () => {
  const [formData, setFormData] = useState({ customerId: "", password: "" });
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const is_logged_in = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { customerId, password } = formData;

    if (!customerId || !password) {
      setFormError("Both Customer ID and Password are required.");
      dispatch(clearAuthError());
      return;
    }

    setFormError("");
    dispatch(login({ customerId, password }));
  };

  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-50 mt-5">
    <div className="w-25">
      <h2 className="text-center">Customer Login</h2>
      {formError && <div className="alert alert-danger mt-3">{formError}</div>}
      {authError && <div className="alert alert-danger mt-3">{authError}</div>}
      {is_logged_in && <div className="alert alert-success">Login successful!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 pt-3">
          <label htmlFor="customerId" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="customerId"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            autocomplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autocomplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      </div></div>
    </>
  );
};

export default Login;