import {NavLink} from "react-router-dom";
import "./navigation.scss"
import fullLink from "../../utils/fullLink";
import Badge from "../UI/badge/Badge";
import {useState} from "preact/compat";


const Navigation = (props) => {
  
  const [expandDropdown, setExpandDropdown] = useState("")
  
  
  function authDropdown(isShow) {
    return isShow && (
      <div className="absolute top-2">
        <div className="card bg-white px-3 text-sm font-500">
          <li className="hover:bg-blue-300  cursor-pointer my-2">Login</li>
          <li className="cursor-pointer my-2">Profile</li>
        </div>
      </div>
    )
  }
  
  
  return (
    <>
      <div className="navigation bg-primary fixed w-full drop-shadow-sm">
        
        <div className="max-w-8xl mx-auto px-2 py-3">
          <ul className="main-nav flex justify-between align-center">
          <div className="nav-logo flex-1">
            <div className="max-w-xl flex justify-between align-center input bg-white bg-opacity-25 text-white px-3.5 rounded-2xl text-sm">
              <input
                className="py-2 px-px text-white bg-transparent border-none outline-none"
                type="text"
                placeholder="Search username, posts"
              />
              <i className="fa fa-search hover:text-primary" />
            </div>
            
          </div>
          <div className="nav-center flex-1">
            <ul className="nav_items flex  justify-end align-center">
              <li className="">
                <NavLink to="/">
                  <i className="fa fa-home-alt" />
                </NavLink>
              </li>
              <li className="relative">
                <NavLink to="/find-friends">
                  <i className="fa fa-user" />
                </NavLink>
                <Badge className="bg-green-400 text-white absolute min-w-2 w-3 top-0 " count={10} />
              </li>
              <li className="relative">
                <i className="fa fa-bell" />
                <Badge className="bg-green-400 text-white absolute px-5 right-1" count={500} />
              </li>
              <li className="relative">
                <i className="fa fa-comment-dots" />
                <Badge className="bg-green-400 text-white absolute px-1 right-1" count={2} />
              </li>
              <li className="relative">
                <i className="fa fa-globe-americas" />
                {/*<Badge className="bg-green-400 text-white absolute px-1 -top-2.5 right-1" count={12} />*/}
              </li>
            </ul>
          </div>
          <div className="nav-auth flex-1">
            
            <ul className="nav_items flex justify-end align-center ">
              <div className="flex relative" onMouseLeave={()=>setExpandDropdown("")} onMouseEnter={()=>setExpandDropdown("user_menu")} >
                <h4 className="text-white font-400 mr-2">Rasel</h4>
                <span className="avatar_logo p-0 m-0 w-7 mr-3">
                  <img className="rounded-3xl w-full" src={fullLink("static/avatar/Alec-Thompson-card_20200415_1603252.10e65779.jpg")} alt=""/>
                </span>
                {authDropdown(expandDropdown === "user_menu")}
              </div>
              <li><i className="fa fa-cog" /> </li>
            </ul>
            
          </div>
        </ul>
        </div>
      </div>
      <div className="h-20" />
      
      <ul>
        <li>src
          <ul>
            <li>
              variables
              <ul>
                <li>makeScss.js</li>
                <li>variables.js</li>
              </ul>
            </li>
            <li>
              utilities-classes
              <span>
                variables
                <ul>
                  <li>_colors.scss</li>
                </ul>
              </span>
              <ul>
                <li>makeScss.js</li>
                <li>variables.js</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
    </>
  );
};


export default Navigation;