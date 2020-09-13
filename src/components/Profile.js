import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from "react-router-dom"

class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logged:false,
			x:true,
			y:false
		}
	this.onButtonClickLogged = this.onButtonClickLogged.bind(this);
				
	}
	
	onButtonClickLogged(event){
        event.preventDefault();
     	localStorage.setItem("logged",false)
     	this.setState({logged:false})
     	console.log(localStorage.getItem("logged"))

    }
	
	render(){
//!this.state.logged
		if (localStorage.getItem("logged") === "false"){
            return <Redirect to="/sign-in" />;
		}
		return(
			<div>

				<div>Profile</div><br/>
				<button type="button" onClick={this.onButtonClickLogged} class="btn btn-primary">Выйти</button>
				
				
			</div>
			)
	}
}
export default Profile;