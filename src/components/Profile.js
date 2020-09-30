import React from 'react';
import {Redirect} from "react-router-dom"

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			arr:null
		}
	this.onButtonClickLogged = this.onButtonClickLogged.bind(this);			
	}
	
	onButtonClickLogged(event){
        event.preventDefault();
     	localStorage.setItem("logged",false)
     	localStorage.setItem("color","white")
     	document.location.reload()
    }
	
	changeColor(){
		localStorage.setItem("color",document.getElementById('color').value)
		let array = JSON.parse(localStorage.getItem("array"))
		array.forEach(function(item,i,arr){
			if(localStorage.getItem("id") === item.id){
				array[i].color = document.getElementById('color').value;
				localStorage.setItem("array",JSON.stringify(array))
			}
		})

	}

	render(){
		if (localStorage.getItem("logged") === "false"){
            return <Redirect to="/sign-in" />;
		}
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>



				<div><b>Profile:</b></div><br/>
				<div>Name:  {localStorage.getItem('name')}</div>
				<div>Surname: {localStorage.getItem('surname')}</div><br/>
				<div>Change background color:</div>
				<input id="color" type="text"></input>
				<button onClick={this.changeColor}>change</button><br/>
				<b>Information about me:</b>
				<p>Registration time: {localStorage.getItem('time')}</p>
				
				<button type="button" onClick={this.onButtonClickLogged} class="btn btn-primary">Sign out</button>	
			</div>
			)
	}
}
export default Profile;