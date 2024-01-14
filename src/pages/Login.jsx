// import React from "react";
import Logo from "./../assets/Logo.png";
import GoogleIcon from "./../assets/Google.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="bg-[#083246] flex flex-row w-screen h-screen">
      <div className="w-1/2 flex justify-center items-center h-full">
        <img src={Logo} className="w-48"></img>
      </div>
      <div className="w-1/2 bg-white rounded-l-[80px]">
        <div className="flex w-full mx-auto h-full justify-center items-center flex-col gap-8">
          <div className="font-bold text-2xl">Sign In</div>
          <button className="flex flex-row gap-2 bg-white border-[1px] font-bold border-[#6C6767] w-1/2 py-3 text-[16px] rounded-[4px] justify-center items-center ">
            <span>Sign in with google</span>
            <img src={GoogleIcon} className="w-6" />
          </button>
          <div className="w-48 bg-[#6C6767] h-[1px] relative">
            <div className="absolute left-[50%] text-[16px] font-bold px-2 bg-white -translate-x-[50%] -translate-y-[55%]">
              or
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full mx-auto justify-center items-center">
            <input
              className="flex flex-row gap-2 w-1/2 bg-white border-[1px] border-[#9F9F9F] py-3 text-[16px] rounded-[4px] justify-center items-center outline-none pl-[24px]"
              placeholder="User name"
            />
            <input
              className="flex flex-row gap-2 w-1/2 bg-white border-[1px] border-[#9F9F9F] py-3 text-[16px] rounded-[4px] justify-center items-center outline-none pl-[24px]"
              placeholder="Password"
            />
            <Link
              to="/aptara"
              className="flex flex-row gap-2 mt-2 bg-[#F44336] border-[1px] font-bold text-white w-1/2 py-3 text-[16px] rounded-[4px] justify-center items-center "
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
