import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/authSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <button type="submit" className="btn btn-primary my-2 form-control">
            Login
          </button>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
