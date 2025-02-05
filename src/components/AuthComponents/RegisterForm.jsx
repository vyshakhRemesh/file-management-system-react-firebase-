import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authSlice";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirmation) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Re-type Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-type password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {/* Display error message */}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary my-2 form-control">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
