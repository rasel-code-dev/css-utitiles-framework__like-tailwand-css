import React, {useEffect, Suspense, lazy} from "react";

// import "./asserts/fontawesome-pro-5.14.0-web/css/all.css"

import "./App.scss"
import Button  from "./components/button/Button";

const App = ()=>{
  return (
    <div className="w-max-7xl">
      <div className="font-sm relative -top-3.5">Hi</div>
      
      <h1 className="font-100 hover:font-900 ">Hi This is H1 Tag</h1>

      <div className="text-page text-primary hover:text-opacity-50">Hover ME</div>
  
     {/* <div className="grid grid-temp-cols-2  gap-x-2 gap-y-2">
        <div className="bg-primary">A</div>
        <div className="bg-secondary">B</div>
        <div className="bg-primary">A</div>
        <div className="bg-secondary">B</div>
      </div>
       <div className="grid grid-temp-rows-2 grid-flow-col gap-2">
        <div className="bg-primary">A</div>
        <div className="bg-secondary">B</div>
        <div className="bg-primary">A</div>
        <div className="bg-secondary">B</div>
         <div className="bg-primary">A</div>
         <div className="bg-secondary">B</div>
         <div className="bg-primary">A</div>
         <div className="bg-secondary">B</div>
      </div>
      
      <div className="container" style={{background: "green"}}>SM Container</div>
      <div className="md:container" style={{background: "red"}}>MD Container</div>
      <div className="lg:container" style={{background: "yellow"}}>LG Container</div>
      <div className="xl:container" style={{background: "pink"}}>XL Container</div>
      <div className="md:container" style={{background: "red"}}>MD Container</div>
      <div className="lg:container" style={{background: "gold"}}>LG Container</div>
      <header className="grid gap-2 sm:grid-temp-cols-2 grid-temp-cols-1 ">
        <div className="sm:col-span-2 bg-primary">A</div>
        <div className="bg-primary ">B</div>
        <div className=" bg-primary">C</div>
        <div className="bg-primary">D</div>
      </header>
  
      <form className="mx-2 sm:p-0 max-w-screen-sm my-10 mx-auto border-primary text-secondary  border bg-primary border-opacity-20 radius">
          <div className="p-1.5">
            <h1 className="text-center mb-10 m-0">Create a Account</h1>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Person Name..."
                className="
                w-full
               placeholder-secondary
               placeholder-opacity-70
               bg-transparent
               border-primary
               border-opacity-50
               outline-none
               place
               radius
               text-primary
               border px-2 py-1"
              />
            </div>
            <div className="form-group mt-1">
              <input
              type="text"
              placeholder="Enter Person Name..."
              className="
                w-full
               placeholder-primary
               placeholder-opacity-20
               bg-transparent
               border-primary
               border-opacity-50
               outline-none
               place
               radius
               text-primary
               border px-2 py-1"
              />
            </div>
            <button className="p-1 mt-1 radius">Submit</button>
          </div>
      </form>
  
      <input type="text" placeholder="Enter Your Name" className="placeholder-my3 placeholder-opacity-20"/>
      
  
      <div className="flex bg-orange-500 bg-opacity-30 shadow-1 gap-x-5" >
        <div className="" >HI</div>
        <div className="" >Hello</div>
      </div>
      
      
      <div className="max-w-2">
        <div className="grid bg-primary grid-temp-cols-4 py-2">
          <div className="flex bg-secondary align-center">
            <h4>Logo</h4>
            <input type="text" placeholder="Enter Person Name..."
                   className="
                   bg-transparent
                   border-primary
                   outline-none
                   place
                   text-primary
                   border px-2 py-2"/>
          </div>
          <div className="col-start-2 col-start-5 bg-secondary">
            <ul className="">
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
              <li className="px-1">SOCIAL</li>
            </ul>
          </div>
      
        </div>
      </div>
      <h1 className="hover:bg-primary md:bg-secondary hover:text-secondary">This IS TEXT</h1>
      
      <div className="bg-primary w-screen-sm mx-auto">
        <button className="m-1 absolute top-2">Hi</button>
        <button className="w-1/2">Hello</button>
      </div>
      
      <div className="bg-blue-100 xl:max-w-2xl ">
        <button>This is Button</button>
        <button>Another Button</button>
      </div>
      
      <div className="divide-primary divide-y divide-opacity-20">
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
      </div>*/}
      
      
    </div>
  )
}

export default App