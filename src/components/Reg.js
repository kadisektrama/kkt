import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"
import axios from "axios"

const api = axios.create({
  baseURL:`http://localhost:3000/info.json`
})

class Reg extends React.Component{
		constructor(props){
			super(props);
			this.state = {
				arr:null,	
				data:"10"
			}
			this.onClick = this.onClick.bind(this)
			this.setState({arr: JSON.parse(localStorage.getItem("array"))})
			
   	 	}   

   	 	componentWillReceiveProps(){
   	 		document.location.reload()
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
				  <div class="row">
				    <div class="col">
				      <input type="text" 
				        class="form-control" 
				        id="login"
				        placeholder="Login"
				        required/>
				    </div>
				    <div class="col">
				      <input type="password" 
				      id="password" 
				       class="form-control" 

				       placeholder="Password"
				       required/>
				    </div>
				    <div class="col">
				      <input type="text" 
				        class="form-control" 
				        id="name"
				        placeholder="Name"/>
				    </div>
				    <div class="col">
				      <input type="text" 
				        class="form-control" 
				        id="surname"
				        placeholder="Surname"/>
				    </div>
				    <div class="col">
				      <input type="email" 
				        class="form-control" 
				        id="email"
				        placeholder="Email"
				        required
				        pattern="\S+@[a-z]+.[a-z]+"/>
				    </div>
				  </div>

				  <br/>
				  <button onClick={this.onClick} type="button"  class="btn btn-primary">Reg</button>
				   
				</form>

			</div>
			)
	}
}
export default Reg;