import React from 'react';
import ReactDOM from 'react-dom';

class News extends React.Component{

	render(){
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>

				<div>News</div>
					
			    <br/>
			</div>
			)
	}
}
export default News;