import React from 'react';
import {useAuth} from "../context/Auth";
import toast from "react-hot-toast";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleClick = () => {
        try {
            setAuthUser({
              ...authUser,
              user: null,
            });
            localStorage.removeItem("User");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            toast.success("Logout successfully");
      
            
          } catch (error) {
            toast.error("Error: " + error);
            setTimeout(() => {}, 1000);
          }
    };

  return (
    <>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleClick}
        >Logout</button>
    </>
  )
};

export default Logout;