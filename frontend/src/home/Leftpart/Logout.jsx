import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useState } from "react";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    console.log("hii");
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/logout`
        { withCredentials: true }
      ); // ⬅️ required to clear cookie);
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
    <div className="h-[10vh] bg-transparent">
      <form onSubmit={handleLogout}>
        <div className="flex space-x-3 items-center ">
          <button>
            <IoMdLogOut className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1" />
          </button>
          <h1> Logout</h1>
        </div>
      </form>
    </div>
  );
}

export default Logout;
