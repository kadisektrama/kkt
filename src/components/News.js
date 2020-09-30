import React from 'react';

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