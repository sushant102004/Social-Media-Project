import React from "react";
import './../styles/signin.css'

const Header = () => {
    return (
        <>
            {/* AppBar Code */}
            <div className='navbar flex justify-between h-20 items-center border-b-2'>
            <h2 className="text-3xl font-lexend font-medium text-slate-800 mx-8">
                Social Memories
            </h2>
            <ul className='flex text-slate-700 font-lexend mx-8'>
                <li className='mx-4'><a href='/'>Home</a></li>
                <li className='mx-4'><a href='/'>Create Account</a></li>
                <li className='mx-4'><a href='/login'>Login</a></li>
                <li className='mx-4'><a href='https://linkedin.com/in/sushant102004'>LinkedIn</a></li>
            </ul>
            </div>
        </>
    )
}

export default Header