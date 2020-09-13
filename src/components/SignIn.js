import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"

class SignIn extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				logged:false,
				login:"",
				password:""
			}
			this.onButtonClickLogged = this.onButtonClickLogged.bind(this);
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

        if(username === "Admin" && password === "12345" ){
        	console.log("")
        	localStorage.setItem("logged",true)
        	console.log(localStorage.getItem("logged"))
        	this.setState({logged:true})  


        }else{
        	console.log("")
        	localStorage.setItem("logged",false)
        	console.log(localStorage.getItem("logged")) 
        	this.setState({logged:false})
        	alert("Неправильный логин или пароль")
        }
        

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