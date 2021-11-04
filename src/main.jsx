import { render } from 'preact'
import store from "./store"
import { Provider } from  "react-redux"
import {BrowserRouter} from "react-router-dom";

import App from './App'
import './index.css'
import "./utilities-classes/index.css"
import "./asserts/fontawesome-pro-5.12.0-web/css/all.css"

render(
  <BrowserRouter>
  
  <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
