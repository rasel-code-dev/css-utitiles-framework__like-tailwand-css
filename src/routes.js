import {lazy} from "react";
import Test from "./pages/test/Text";

// this function function for lazy route load...........
const ReactLazyPreload  = (importStatementFn)=>{
  const Component = lazy(importStatementFn)
  
  // Component.preload call when preload link clicked
  Component.preload = importStatementFn
  return Component
}

const Posts = ReactLazyPreload(()=>import("./pages/posts/Posts"));
const Login = ReactLazyPreload(()=>import("./pages/auth/src/page/auth/Login"));
const Registration = ReactLazyPreload(()=>import("./pages/auth/src/page/auth/Registration"));
const Peoples = ReactLazyPreload(()=>import("./pages/findPeoples/Peoples"));
const LoginHomePage = ReactLazyPreload(()=>import("./pages/loginHomePage/LoginHomePage"));


export default (isAuth)=>{
  if(isAuth) {
    return [
      {path: "/", exact: true, component: Posts},
      {path: "/t", exact: true, component: Test},
      {path: "/find-friends", exact: true, component: Peoples},
      {path: "/auth/login", exact: true, component: Login},
      {path: "/auth/registration", exact: true, component: Registration},
    ]
  } else {
    return  [
      {path: "/", exact: true, component: LoginHomePage}
    ]
  }
}