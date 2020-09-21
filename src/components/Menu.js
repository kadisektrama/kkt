import React from "react"
import {NavLink} from 'react-router-dom'



class Menu extends React.Component{
render(){
	return(

<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/"><span class="sr-only"></span>Главная</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/news"><span class="sr-only"></span>Новости</a>
          
        </li>
        {localStorage.getItem("logged") =="true" ? <li class="nav-item">
          <a class="nav-link " href="/profile"><span class="sr-only"></span>Профиль</a>
        </li> : ""}

        {localStorage.getItem("logged") == "false" ?  <li class="nav-item">
          <a class="nav-link " href="/sign-in"><span class="sr-only"></span>Sign-in</a>
        </li> : ""}
        
        {localStorage.getItem("logged") == "false" ? <li class="nav-item">
          <a class="nav-link " href="/Reg"><span class="sr-only"></span>Registration</a>
        </li> : ""}
        
      </ul>
      
    </div>
  </nav>
</div>
		)
	}
}

export default Menu;