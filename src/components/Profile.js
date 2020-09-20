import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logged:false,
			x:true,
			y:false,
			
		}
	this.onButtonClickLogged = this.onButtonClickLogged.bind(this);
	console.log(localStorage.getItem('time'))
				
	}
	
	onButtonClickLogged(event){
        event.preventDefault();
     	localStorage.setItem("logged",false)
     	this.setState({logged:false})
     	console.log(localStorage.getItem("logged"))
     	localStorage.setItem("color","white")
     	document.location.reload()
    }
	
	changeColor(){
		localStorage.setItem("color",document.getElementById('color').value)
		let array = JSON.parse(localStorage.getItem("array"))
		let ourId
		array.forEach(function(item,i,arr){
			if(localStorage.getItem("id") == item.id){
				array[i].color = document.getElementById('color').value;
				localStorage.setItem("array",JSON.stringify(array))
			}
		})

	}

	render(){
//!this.state.logged
		if (localStorage.getItem("logged") === "false"){
            return <Redirect to="/sign-in" />;
		}
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>



				<div><b>Profile:</b></div><br/>
				<div>Name:  {localStorage.getItem('name')}</div>
				<div>Surname: {localStorage.getItem('surname')}</div><br/>
				<div>Впишите цвет на который хотите поменять:</div>
				<input id="color" type="text"></input>
				<button onClick={this.changeColor}>Поменять</button><br/>
				Информация о вас:
				<p>Время регистрации: {localStorage.getItem('time')}</p>
				
				<button type="button" onClick={this.onButtonClickLogged} class="btn btn-primary">Выйти</button>
				
				
			</div>
			)
	}
}
export default Profile;