import React from "react";
import User from "./User";
import "../.././index.css";
import Marquee from "react-fast-marquee";
import useGetAllUsers from "../../context/useGetAllUsers";
function Users() {
  const [allUsers,loading]=useGetAllUsers();
  
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-green-300 rounded-md " >
        <Marquee speed={100}  >Connect With friends </Marquee>
      </h1>
      <div className=" overflow-y-auto scrollbar-hide max-h-[calc(84vh-10vh)] min-h-[calc(84vh-10vh)]">
        {/* yaha yeh function likhne se height fix and scrollable hoti hai */}
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
        
      </div>
    </div>
  );
}

export default Users;
