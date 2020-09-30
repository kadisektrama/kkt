import React from "react"

class Menu extends React.Component{
render(){
	return(

<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/"><span className="sr-only"> </span>Main</a>
        </li> 

        <li className="nav-item">
          <a className="nav-link" href="/news"><span className="sr-only"></span>News</a>
        </li>
        {localStorage.getItem("logged") === "true" ? <li className="nav-item">
          <a className="nav-link " href="/profile"><span className="sr-only"></span>Profile</a>
        </li> : ""}

        {localStorage.getItem("logged") === "false" ?  <li className="nav-item">
          <a className="nav-link " href="/sign-in"><span className="sr-only"></span>Sign-in</a>
        </li> : ""}
        
        {localStorage.getItem("logged") === "false" ? <li className="nav-item">
          <a className="nav-link " href="/Reg"><span className="sr-only"></span>Registration</a>
        </li> : ""}
        
      </ul>
      
    </div>
  </nav>
</div>
		)
	}
}

export default Menu;