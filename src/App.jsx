import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { setUser } from "./redux/auth/authSlice";
import LoginForm from "./components/AuthComponents/LoginForm";
import RegisterForm from "./components/AuthComponents/RegisterForm";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ✅ Store only serializable user data in Redux
        console.log(`in the useeffect in app.jsx, user email:${user.email}`);

        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user ? <LoginForm /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/register"
          element={!user ? <RegisterForm /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={user ? <DashboardPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
