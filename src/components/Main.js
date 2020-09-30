import React from 'react';
import axios from 'axios';

class Main extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		arr:null	
		}
		if(localStorage.getItem("data") === "true"){}else{
		axios.get(`http://localhost:3000/info.json`).then(res => {
	 			this.setState({arr:res.data})
	 			console.log(res)
	 			  	 			

	 			localStorage.setItem("array",JSON.stringify(res.data))
	 			
	 		})
	 		
		localStorage.setItem("array",this.state.arr)
		}
		
	}
	
   
	onClickUnlogged(){
		localStorage.removeItem("logged")
		localStorage.setItem("logged",false)
		console.log(localStorage.getItem("logged"))
	}

	onClickLogged(){
		localStorage.removeItem("logged")
		localStorage.setItem("logged",true)
		console.log(localStorage.getItem("logged"))
	}

	render(){
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>

				<div>Main_page</div>
				<button type="button" onClick={this.onClickLogged} className="btn btn-primary">true</button>
				<button type="button" onClick={this.onClickUnlogged} className="btn btn-primary">false</button>
			</div>
			)
	}
}

export default Main;