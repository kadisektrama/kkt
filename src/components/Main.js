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

				<div align="center"><b>Main_page</b></div>
				<p>information about book.</p>
				
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
  nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
  Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
  lobortis nisl ut aliquip ex ea commodo consequat.</p>
			</div>
			)
	}
}

export default Main;