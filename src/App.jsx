import {useEffect} from "preact/compat";
import api from "./apis";

import Navigation from "./compoenents/navigation/Navigation";

import "./App.scss"

import routes from "./routes"
import {Route, Switch} from "react-router-dom";

function App(props) {
  
  return (
    <div className="bg-gray-2 min-h-screen">
      <Navigation />
        <Switch>
          {routes.map((route, i)=> <Route key={i} {...route} /> )}
        </Switch>
  
    </div>
  )
}

export default App