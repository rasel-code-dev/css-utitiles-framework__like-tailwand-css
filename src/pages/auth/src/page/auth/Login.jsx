import React from 'react';
import {Link} from "react-router-dom";

const Login = (props) => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
  
        <div className="bg-white px-6 py-4 rounded-5 max-w-xl mx-auto">
          <h1 className="text-2xl font-400 text-primary text-center">Login in your Account.</h1>
          <form className="py-10">
            <div className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">Email</label>
              <input
                placeholder="Enter Your Email."
                className="w-full px-2 py-2 outline-none border-primary border-1 rounded-3 border-opacity-50  " type="text" name="email" />
            </div>
            <div  className="mb-2 ">
              <label className="text-sm font-400 text-gray-dark-8 " htmlFor="">Password</label>
              <input
                placeholder="Enter Your Password."
                className="w-full px-2 py-2 outline-none border-primary border-1 rounded-3 border-opacity-50 "
                type="text" name="password"
              />
            </div>
            <div className="mt-2 mb-3">
              <h4 className="text-sm font-400">Not have a account?
                <span className="cursor-pointer text-blue-400 p-px ml-0.5 "><Link to="/auth/registration">Create a account new account</Link></span></h4>
            
            </div>
            <div>
              <button className="bg-primary px-4 py-1.5 rounded-2 text-sm text-white cursor-pointer">Login</button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Login;