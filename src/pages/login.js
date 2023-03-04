import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch(() => {});
  }

  return (
    <>
      <div className="h-screen bg-custom-bg text-center pt-16">
        <p className="text-custom-text-focused text-5xl">Welcome Back!</p>
        <p className="text-custom-text-focused text-lg pt-4">
          Login in your account
        </p>

        {/* Auth Container */}
        <div className="p-6 h-1/2 ml-4 bg-slate-50 mr-4 mt-8 rounded-xl border-2 border-slate-300 lg:h-3/5 lg:w-1/4 lg:ml-auto lg:mr-auto">
          {/* Auth Selector */}
          <div className="flex ml-auto mr-auto w-56 h-12 bg-slate-50 border-2 border-slate-300 rounded-lg">
            <p className="m-auto pt-1 pb-1 pl-4 pr-4 rounded-md text-slate-700">
              <a href="/">Sign Up</a>
            </p>
            <p className="m-auto bg-blue-800 pt-1 pb-1 pl-4 pr-4 rounded-md text-slate-100">
              Login
            </p>
          </div>
          <p className="text-left ml-2 mt-12 mb-2 text-slate-700">Email: </p>
          <input
            className="focus:outline-0 bg-slate-50 border-2 rounded-md w-80 p-2"
            placeholder="sushant@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p className="text-left ml-2 mt-6 mb-2 text-slate-700">Password: </p>
          <input
            className="focus:outline-0 bg-slate-50 border-2 rounded-md w-80 p-2"
            placeholder="aStrongPassword#"
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <div className="flex m-auto  mt-6 bg-blue-800 rounded-md w-24 h-9 cursor-pointer" onClick={() => {login()}}>
            <p className="text-slate-100 m-auto">Log In</p>
          </div>
        </div>
      </div>
      <Loader/>
    </>
  );
}
