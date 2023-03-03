import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { initializeApp } from "firebase/app";

import './index.css'
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyAxjYScVNs43SLC3YuB3iOlcju1NzctgPY",
  authDomain: "social-memories-75048.firebaseapp.com",
  projectId: "social-memories-75048",
  storageBucket: "social-memories-75048.appspot.com",
  messagingSenderId: "149866044735",
  appId: "1:149866044735:web:2645a6fc983d9068d7478a"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)