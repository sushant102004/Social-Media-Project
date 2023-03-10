import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


  async function signUp() {
    const auth = getAuth();
    const db = getFirestore();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;
        const userDetails = {
          name: name,
          email: user.email,
          uid: user.uid,
          profilePicture: "",
          bio: "Hi I'm using happy memories.",
        };
        await addDoc(collection(db, "users"), userDetails);
        navigate('/home')
      })
      .catch(() => {
        return toast.error('Sign Up failed')
      });
  }

  return (
    <>
      <div className="h-screen bg-custom-bg text-center pt-16">
        <p className="text-custom-text-focused text-5xl lg:text-5xl">
          Welcome to Happy Memories
        </p>
        <p className="text-custom-text-focused text-lg pt-4">
          Share you happy memories here
        </p>

        {/* Auth Container */}
        <div className="p-6 h-2/3 ml-4 bg-slate-50 mr-4 mt-8 rounded-xl border-2 border-slate-300 lg:h-3/4 lg:w-1/4 lg:ml-auto lg:mr-auto">
          {/* Auth Selector */}
          <div className="flex ml-auto mr-auto w-56 h-12 bg-slate-50 border-2 border-slate-300 rounded-lg">
            <p className="m-auto bg-blue-800 pt-1 pb-1 pl-4 pr-4 rounded-md text-slate-100">
              Sign Up
            </p>
            <p className="m-auto pt-1 pb-1 pl-4 pr-4 rounded-md text-slate-700 cursor-pointer">
              <a href="/login">Login</a>
            </p>
          </div>
          <p className="text-left mt-12 mb-2 text-slate-700 lg:ml-2">Name: </p>
          <input
            className="focus:outline-0 bg-slate-50 border-2 rounded-md w-80 p-2"
            placeholder="Sushant Dhiman"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <p className="text-left mt-6 mb-2 text-slate-700 lg:ml-2">Email: </p>
          <input
            className="focus:outline-0 bg-slate-50 border-2 rounded-md w-80 p-2"
            placeholder="sushant@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p className="text-left mt-6 mb-2 text-slate-700 lg:ml-2">Password: </p>
          <input
            className="focus:outline-0 bg-slate-50 border-2 rounded-md w-80 p-2"
            placeholder="aStrongPassword#"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <div
            className="flex m-auto  mt-6 bg-blue-800 rounded-md w-24 h-9 cursor-pointer"
            onClick={() => {
              if(email.length === 0){
                return toast.error('Email can\'t be empty')
              } else if(password.length === 0){
                return toast.error('Password can\'t be empty')
              } else if(name.length === 0){
                return toast.error('Name can\'t be empty')
              }

              signUp()
              navigate('/home')
            }}
          >
            <p className="text-slate-100 m-auto">Sign Up</p>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
