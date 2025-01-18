import React from "react";

const RegisterForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  return (
    <form autoComplete="off">
      <div className="form-group my-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          name="passwordConfirmation"
          className="form-control"
          placeholder="Re-type Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary my-2 form-control">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
