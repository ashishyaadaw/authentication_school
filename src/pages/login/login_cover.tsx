import { Link } from "react-router-dom";
import "./login.css";
import React, { Children, useEffect, useState } from "react";
export default function LoginCover({ institute_name }) {
  const [tnc_check, setTnc] = useState(false);
  useEffect(() => {}, []);

  return (
    <>
      <section className="m-10 h-full text-center">
        <div className="flex justify-center p-24">
          <img className="h-28 " src="\cliparts\logo.png" alt="Logo img" />
        </div>
        <h1 className="font-serif text-6xl">{institute_name}</h1>
        <div className="flex justify-center ">
          <img
            className="h-16 "
            src="\cliparts\icons8-loading.gif"
            alt="Logo img"
          />
        </div>
        <div>
          <button
            className="absolute"
            onClick={() => {
              if (!tnc_check) {
                setTnc(true);
                document
                  .getElementById("tnc_check")
                  .setAttribute(
                    "src",
                    "https://img.icons8.com/sf-ultralight-filled/25/circled.png"
                  );
                document
                  .getElementById("btn_to_register")
                  .setAttribute("disabled", "");
              } else {
                setTnc(false);

                document
                  .getElementById("tnc_check")
                  .setAttribute(
                    "src",
                    "https://img.icons8.com/fluency/48/checked-radio-button--v1.png"
                  );
                document
                  .getElementById("btn_to_register")
                  .removeAttribute("disabled");
              }
            }}
          >
            <img
              id="tnc_check"
              width="24"
              height="24"
              className=""
              src="https://img.icons8.com/fluency/48/checked-radio-button--v1.png"
              alt="circled"
            />
          </button>
          <a href="#" className="m-5 ml-8">
            Accept Terms & Condition
          </a>
        </div>
        <br></br>
        <button
          onClick={() => {
            window.location.href = "/login";
          }}
          className="rounded-3xl w-64 pl-4 pr-4 p-1 m-5 border-2 border-yellow-600"
        >
          Already have an account
        </button>
        <button
          id="btn_to_register"
          onClick={() => {
            window.location.href = "/register";
          }}
          className="rounded-3xl w-64 pl-4 disabled:bg-yellow-300/[0.75]  disabled:border-yellow-300/[0.50] disabled:text-slate-500/[0.75] pr-4 p-1 m-5 bg-yellow-600 border-2 border-yellow-600"
        >
          Next
        </button>
      </section>
    </>
  );
}

export function LoginPage() {
  return (
    <>
      <section className="absolute bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')] w-[100%] h-full">
        <div className="w-[80%] h-[80%] bg-white ml-[10%] mt-[5%] rounded-md flex shadow-2xl shadow-slate-600">
          <div className="w-3/5  rounded-tl-md rounded-bl-md bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')]"></div>
          <div className="w-2/5 text-left gap-4 pt-10 pl-20 pr-20">
            <div className="text-center">
              <button className="rounded-full w-32 p-2 pl-3 pr-3  bg-yellow-500 border-2 border-yellow-500">
                Login
              </button>
              <button
                onClick={() => {
                  window.location.href = "/register";
                }}
                className="rounded-full w-32 p-2 pl-3 pr-3  "
              >
                Register
              </button>
            </div>
            <h1 className="font-bold text-5xl text-slate-950 mt-10">Welcome</h1>
            <p className="font-normal text-sm text-slate-450 opacity-75 ">
              Please login to your account
            </p>
            <form>
              <div className="mt-5">
                <label className="text-md text-gray-400 ">
                  Username or Email
                </label>
                <br></br>
                <input
                  type="text"
                  className=" rounded-none border-b w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-2"
                />
              </div>
              <div className="mt-5">
                <label className="text-md text-gray-400 ">Password</label>
                <br></br>
                <input
                  type="password"
                  className=" rounded-none border-b w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-2"
                />
              </div>{" "}
              <div className=" flex mt-10">
                <Link
                  to={"/resetPassword"}
                  className=" text-left rounded-full w-48 p-2 pl-3 pr-3 text-sm text-slate-450 opacity-75 underline-offset-2 underline "
                >
                  Forgot Password
                </Link>
                <button className="rounded-full w-32 p-2 pl-3 pr-3  bg-yellow-500 border-2 border-yellow-500">
                  OK
                </button>
              </div>
              <div className="text-center mt-10">
                <small className=" opacity-35">
                  Terms and Condition & Privacy Policy
                </small>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export function RegisterPage() {
  return (
    <>
      <section className="absolute bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')] w-[100%] h-full">
        <div className="w-[80%] h-[80%] bg-white ml-[10%] mt-[5%] rounded-md flex shadow-2xl shadow-slate-600">
          <div className="w-3/5  rounded-tl-md rounded-bl-md bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')]"></div>
          <div className="w-2/5 text-left gap-4 pt-10 pl-20 pr-20">
            <div className="text-center">
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                className="rounded-full w-32 p-2 pl-3 pr-3  "
              >
                Login
              </button>
              <button className="rounded-full w-32 p-2 pl-3 pr-3  bg-yellow-500 border-2 border-yellow-500">
                Register
              </button>
            </div>
            <h1 className="font-bold text-5xl text-slate-950 mt-10">Welcome</h1>
            <p className="font-normal text-sm text-slate-450 opacity-75 ">
              Please register to your account
            </p>
            <form>
              <div className="mt-5">
                <label className="text-sm text-gray-400 ">
                  Enter email address
                </label>
                <br></br>
                <input
                  type="mail"
                  className=" rounded-none border-b w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-1"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm text-gray-400 ">
                  Enter your organisation name
                </label>
                <br></br>
                <input
                  type="text"
                  className=" rounded-none border-b w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-1"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm text-gray-400 ">
                  Enter your school name
                </label>
                <br></br>
                <input
                  type="text"
                  className=" rounded-none border-b w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-1"
                />
              </div>{" "}
              <div className=" flex mt-10 float-right">
                <button className="rounded-full w-32 p-2 pl-3 pr-3  bg-yellow-500 border-2 border-yellow-500">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export function PasswordResetPage() {
  return (
    <>
      <section className="absolute bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')] w-[100%] h-full">
        <div className="w-[80%] h-[80%] bg-white ml-[10%] mt-[5%] rounded-md flex shadow-2xl shadow-slate-600">
          <div className="w-3/5  rounded-tl-md rounded-bl-md bg-cover bg-center bg-[url('/wallpaper/wallpaper.png')]"></div>
          <div className="w-2/5 text-left gap-4 pt-10 pl-20 pr-20">
            <div className="text-center">
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
                className="rounded-full w-32 p-2 pl-3 pr-3  "
              >
                Login
              </button>
              <button className="rounded-full w-32 p-2 pl-3 pr-3  bg-yellow-500 border-2 border-yellow-500">
                Register
              </button>
            </div>
            <h1 className="font-bold text-4xl text-slate-950 mt-6">
              Forgot your Password?
            </h1>

            <div id="reset_password_form_1" className="block">
              <form>
                <div className="mt-5 border p-5 pb-8 w-72 rounded-md shadow-md">
                  <label className="text-sm text-slate-900 font-semibold">
                    Email Address
                  </label>
                  <br></br>
                  <input
                    type="mail"
                    className=" rounded-none bg-white border-b border-slate-600/[0.75] w-64 focus:outline-none focus:text-slate-600 text-black font-semibold mt-1"
                  />
                </div>
              </form>
              <div className=" flex mt-10 ">
                <button
                  onClick={() => {
                    document
                      .getElementById("reset_password_form_1")
                      .classList.replace("block", "hidden");
                    document
                      .getElementById("load_reset_password")
                      .classList.replace("hidden", "flex");
                  }}
                  className="rounded-full  p-2 pl-3 pr-3  bg-green-700 border-2 border-green-700"
                >
                  Reset Password
                </button>
              </div>
            </div>
            <div className="text-center flex">
              <div id="load_reset_password" className=" mt-10 hidden">
                <img
                  className="h-16  "
                  src="\cliparts\icons8-loading.gif"
                  alt="Logo img"
                  id="loading_reset_password"
                  onLoad={() => {
                    const timer = setTimeout(() => {
                      document.getElementById(
                        "loading_reset_password"
                      ).style.display = "none";
                      document
                        .getElementById("reset_link_sent_confirmation")
                        .classList.replace("hidden", "block");
                    }, 3000);
                  }}
                />
                <br></br>
                <p
                  id="reset_link_sent_confirmation"
                  className="text-sm mt-10 text-slate-800 hidden"
                >
                  Successfully reset link is sent to your mail. Follow the mail
                  to reset password.<br></br>
                  <br></br>
                  <strong>Check your mail and back to login.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
