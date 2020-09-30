import React from 'react';
import {Redirect} from "react-router-dom"


class SignIn extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				arr:null
			}

			this.onButtonClickLogged = this.onButtonClickLogged.bind(this);
   	 	}

   	

		onButtonClickLogged(event){
        event.preventDefault();
       
        const username = document.getElementById("login").value;
        const password = document.getElementById("password").value;
        console.log(username,password)
        let array = JSON.parse(localStorage.getItem("array"))
        console.log(this.state.arr)

        	this.setState({arr : array})
        	array.forEach(function(item,i,arr){
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
        	if(localStorage.getItem("logged") === "false"){
        		alert("Enter login and password again")
        	}
        	
        }
      
     
	render(){
		
		if(localStorage.getItem("logged") === "true"){
			return <Redirect to="/news" />;
		}
		return(
			<div>

				<form>
				  <div className="row">
				    <div className="col">
				      <input type="text" 
				        className="form-control" 
				        id="login"
				        placeholder="Login"/>
				    </div>
				    <div className="col">
				      <input type="password" 
				      id="password" 
				       className="form-control" 
				       placeholder="Password"/>
				    </div>
				  </div>
				  <br/>
				  <button type="button" onClick={this.onButtonClickLogged} className="btn btn-primary">Sig In</button>
				   
				</form>

			</div>
			)
	}
}
export default SignIn;