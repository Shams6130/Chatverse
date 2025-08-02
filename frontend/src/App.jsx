import { useState } from "react";
import Signup from "./components/Signup";
import {Navigate, Routes ,Route} from "react-router-dom";
import "./App.css";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
           
                <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster/>
    </>
    
  );
}

export default App;
