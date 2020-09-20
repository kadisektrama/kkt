import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		logged:false,
		x:true,
		y:false,
		arr:null,	
		}
		if(localStorage.getItem("data") == "true"){}else{
		axios.get(`http://localhost:3000/info.json`).then(res => {
	 			this.setState({arr:res.data})
	 			console.log(res)
	 			let array =  JSON.parse(localStorage.getItem("array"))   	 			

	 			localStorage.setItem("array",JSON.stringify(res.data))
	 			
	 		})
	 		
		localStorage.setItem("array",this.state.arr)
		}
		
	}
	
   
	onClick(){
		localStorage.removeItem("logged")
		localStorage.setItem("logged",false)
		console.log(localStorage.getItem("logged"))
	}

	onClick1(){
		localStorage.removeItem("logged")
		localStorage.setItem("logged",true)
		console.log(localStorage.getItem("logged"))
	}

	render(){
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>

				<div>Main_page</div>
				<button type="button" onClick={this.onClick1} class="btn btn-primary">true</button>
				<button type="button" onClick={this.onClick} class="btn btn-primary">false</button>
			</div>
			)
	}
}

export default Main;