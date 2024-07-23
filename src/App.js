import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import MyNetwork from "./pages/MyNetwork";
import Notifications from "./pages/notifications";
import Job from "./pages/Job";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import RequireAuth from "./components/RequireAuth";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="">
      <Header />
      <div
        style={{ backgroundColor: "#f4f2ee" }}
        className="py-3 px-7 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen"
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/mynetwork"
            element={
              <RequireAuth>
                <MyNetwork />
              </RequireAuth>
            }
          />
          <Route
            path="/job"
            element={
              <RequireAuth>
                <Job />
              </RequireAuth>
            }
          />
          <Route
            path="/notifications"
            element={
              <RequireAuth>
                <Notifications />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
