import { Link } from "react-router-dom";
import LogoutButton from "../../HomePageComponents/LogoutButton";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user; // Convert user object to a boolean value
  console.log(
    `isAuthenticated: ${isAuthenticated} ,user email: ${user?.email}`
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <a className="navbar-brand ms-5" href="/">
        File management system
      </a>

      <ul className="navbar-nav ms-auto me-5">
        <>
          <li className="nav-item mx-2">
            <p className="my-0 mt-2 mx-2">
              <span className="text-dark">Welcome, </span>
              <span className="fw-bold">{user.displayName}</span>
            </p>
          </li>
          <li className="nav-item mx-2">
            <Link to="/" className=" btn btn-primary">
              Home
            </Link>
          </li>
          <li className="nav-item mx-2">
            <LogoutButton />
          </li>
        </>
      </ul>
    </nav>
  );
};

export default Navbar;
