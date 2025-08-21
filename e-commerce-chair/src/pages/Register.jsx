import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[350px] h-[500px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-lg p-5 box-border">
        <p className="text-center font-[800] text-[28px] font-[Lucida_Sans] mt-2 mb-8">
          Welcome to Grk
        </p>

        <form className="flex flex-col gap-[18px] mb-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-full border border-gray-400 outline-none p-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-full border border-gray-400 outline-none p-3"
          />
          <p className="underline underline-offset-2 text-right text-gray-500">
            <span className="cursor-pointer text-[9px] font-bold hover:text-black">
              Forgot Password?
            </span>
          </p>
          <button className="py-2 px-4 rounded-full bg-teal-600 text-white font-semibold shadow-md hover:shadow-lg active:shadow-none">
            Register
          </button>
        </form>

        <p className="text-[10px] text-gray-500">
          Already have an account?
          <Link to='/login' className="ml-1 text-[11px] underline text-teal-600 font-extrabold cursor-pointer">
              Sign up
          </Link>
        </p>

        <div className="flex flex-col mt-5 gap-4">
          

          {/* Google Login */}
          <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full border-2 border-gray-500 cursor-pointer shadow-md">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 48 48"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                  c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                  C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span className="text-[11px]">Register with Google</span>
          </div>

          {/* Back to Home */}
                  <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-black text-white border-2 border-black cursor-pointer shadow-md">
                     <Link to='/'><h3>Back to Home</h3></Link>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
