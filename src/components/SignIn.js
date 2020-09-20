import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"
import axios from "axios"

class SignIn extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				logged:false,
				login:"",
				password:"",
				arr:[
					{login:"Admin",
					password:"12345"},
					{login:"Admin1",
					password:"12345"},
					{login:"Admin2",
					password:"12345"}
				],
				now:null,
				lo:null
			}

			this.onButtonClickLogged = this.onButtonClickLogged.bind(this);
   	 	}

   	 	componentDidMount(){
   	 		
   	 	}

		onButtonClickLogged(event){
        event.preventDefault();
        this.setState({
        		login:document.getElementById("login").value,
        		password:document.getElementById("password").value

        })
        const username = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        console.log(username,password)
        let array = JSON.parse(localStorage.getItem("array"))
        console.log(this.state.arr)

        	this.setState({arr : array})
        	this.state.arr.forEach(function(item,i,arr){
        		if(username === item.login && password === item.password){
        			console.log("You logged" + item.login + "  " + item.password)
        			localStorage.setItem("logged","true")
        			console.log(localStorage.getItem("logged"))
        			localStorage.setItem("id",item.id);
        			localStorage.setItem("name",item.name);
        			localStorage.setItem("surname",item.surname);
        			localStorage.setItem("color",item.color);
        			localStorage.setItem("time",item.time);
        			localStorage.setItem("logged","true")	
        			document.location.reload();
        			document.location.reload();
        			localStorage.setItem("logged","true");
        			localStorage.setItem("data","true")

        		}
        		
        		    		
        	})
        	
        }
      
     
	render(){
		
		if(localStorage.getItem("logged") === "true"){
			return <Redirect to="/news" />;
		}
		return(
			<div>

				<form>
				  <div class="row">
				    <div class="col">
				      <input type="text" 
				        class="form-control" 
				        id="login"
				        placeholder="Login"/>
				    </div>
				    <div class="col">
				      <input type="password" 
				      id="password" 
				       class="form-control" 
				       placeholder="Password"/>
				    </div>
				  </div>
				  <br/>
				  <button type="button" onClick={this.onButtonClickLogged} class="btn btn-primary">Войти</button>
				   
				</form>

			</div>
			)
	}
}
export default SignIn;