import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		logged:false,
		x:true,
		y:false
	}
	
	}
	componentDidMount(){
    setInterval(()=>{
      this.setState({logged:localStorage["logged"]}) },500)
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
			<div>

				<div>Main_page</div>
				<button type="button" onClick={this.onClick1} class="btn btn-primary">true</button>
				<button type="button" onClick={this.onClick} class="btn btn-primary">false</button>
			</div>
			)
	}
}
export default Main;