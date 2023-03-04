import React from "react"
import { useLocation } from "react-router-dom"

import SignUp from "./pages/signup"
import Login from "./pages/login"

function App() {
  const location = useLocation()

  return (
    <>
      <SignUp/>
    </>
  )
}

export default App