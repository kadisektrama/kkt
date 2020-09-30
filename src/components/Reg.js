import React from 'react';
import {Redirect} from "react-router-dom"

class Reg extends React.Component{
		constructor(props){
			super(props);
		
			this.onClick = this.onClick.bind(this)
			
			
   	 	}   


   		onClick(){
   			if(document.getElementById('name').value.length > 6 && document.getElementById('login').value.length > 6 && document.getElementById('surname').value.length > 6 && document.getElementById('password').value.length > 6 && document.getElementById('email').value.length > 10){
	   			let item = {
	   				"id": Math.floor(Math.random() * 10000),
	   				"name":document.getElementById('name').value,
					"surname":document.getElementById('surname').value,
					"login":document.getElementById('login').value,
					"password":document.getElementById('password').value,
					"color":"white",
					"time":new Date()
	   			}
	   			
	   			let array =  JSON.parse(localStorage.getItem("array"))
	   			array.push(item)
	   			localStorage.setItem("array",JSON.stringify(array))
	   			console.log(array)
	   			localStorage.setItem("logged","true")
	   			localStorage.setItem("data","true")
	   			document.location.reload()
	   			document.location.reload()
	   		}else{
	   			alert("Длина полей должна быть минимум 7 символа")
	   		}
   		} 
	    

	render(){
		
		if(localStorage.getItem("logged") === "true"){
			return <Redirect to="/news" />;
		}
		return(
			<div >

				<form>
				  <div className="row">
				    <div className="col">
				      <input type="text" 
				        className="form-control" 
				        id="login"
				        placeholder="Login"
				        required/>
				    </div>
				    <div className="col">
				      <input type="password" 
				      id="password" 
				       className="form-control" 

				       placeholder="Password"
				       required/>
				    </div>
				    <div className="col">
				      <input type="text" 
				        className="form-control" 
				        id="name"
				        placeholder="Name"/>
				    </div>
				    <div className="col">
				      <input type="text" 
				        className="form-control" 
				        id="surname"
				        placeholder="Surname"/>
				    </div>
				    <div className="col">
				      <input type="email" 
				        className="form-control" 
				        id="email"
				        placeholder="Email"
				        required
				        pattern="\S+@[a-z]+.[a-z]+"/>
				    </div>
				  </div>

				  <br/>
				  <button onClick={this.onClick} type="button"  className="btn btn-primary">Reg</button>
				   
				</form>

			</div>
			)
	}
}
export default Reg;