import Posts from "./pages/posts/Posts";
import Login from "./pages/auth/src/page/auth/Login";
import Registration from "./pages/auth/src/page/auth/Registration";

export default [
  { path: "/", exact: true, component: Posts },
  { path: "/find-friends", exact: true, component: Posts },
  { path: "/auth/login", exact: true, component: Login },
  { path: "/auth/registration", exact: true, component: Registration },
]