import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Login from "./Login.jsx";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }

    try {
      const res = await axios.post("http://localhost:3000/user/signup", userData);
      console.log(res.data);
      if (res.data) {
        navigate(from, { replace: true });
        toast.success("Signed Up Successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      localStorage.setItem("User", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">SignUp</h3>
              
              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              
              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 py-1">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-400 duration-200">SignUp</button>
                <p>Already Registered? <button type="button" className="text-blue-500 underline cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
      <Login />
    </>
  );
}

export default Signup;
