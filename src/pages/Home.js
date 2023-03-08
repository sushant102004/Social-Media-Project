import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import AddPost from "./AddPost"
import Profile from "./Profile";


export default function Home() {
  const [page, setPage] = useState('home')
  return (
    <>
     {/* Header */}
     <div className="flex bg-custom-bg justify-between">
        <p className="text-2xl font-medium text-slate-700 mt-4 ml-12 mb-4">
          Happy Memories
        </p>

        {/* Menu */}
        <div className="menu-items-container space-x-6 text-slate-600 mr-12 mt-5">
          <Link to={"/home"} onClick = {() => {
            setPage('add-post')
          }}>Home</Link>
          <Link to={"/add-post"}>Add Post</Link>
          <Link to={"/profile"}>Profile</Link>
        </div>
      </div>
      <hr />

      {/* Main Area */}

      {page === 'home' ? <Home/> : page === 'add-post' ? <AddPost /> : page === 'profile' ? <Profile/> : ''}
    </>
  );
}
