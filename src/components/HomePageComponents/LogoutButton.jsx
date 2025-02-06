import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <button className="btn btn-success" onClick={() => dispatch(logoutUser())}>
      Logout
    </button>
  );
};

export default LogoutButton;
