import React from "react";

const AuthForm = (props) => {
    return (
        <>
           <div className='flex mt-40 justify-center items-center'>
            <div className='w-96 flex flex-col'>
                <h2 className='text-3xl font-medium text-slate-800'>
                    {props.authType === 'SignUp' ? 'Create Account' : 'Welcome Back!'}</h2>

                <p className='mt-8 text-slate-800'>Email*</p>
                <input className='border-2 rounded border-slate-400 mt-2 h-10 pl-3' placeholder='eg: sushant@gmail.com'/>
                
                <p className='mt-4 text-slate-800'>Password*</p>
                <input className='border-2 rounded border-slate-400 mt-2 h-10 pl-3' placeholder='eg: aStrong#Password'/>

                <div className='flex items-center justify-between text-blue-700'>
                    <div className='border-2 w-24 bg-slate-900 text-white rounded-md text-center px-4 py-1 mt-4 cursor-pointer'>Login</div>
                    <a href='/' className='mt-4'>Forgot Password?</a>
                </div>
            
            </div>
            </div> 
        </>
    )
}

export default AuthForm