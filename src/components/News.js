import React from 'react';
import ReactDOM from 'react-dom';

class News extends React.Component{

	render(){
		return(
			<div style={{backgroundColor:localStorage.getItem('color')}}>

				<div>News</div>
					<li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Выпадающий пункт <span class="caret"></span></a>
			          <ul class="dropdown-menu" role="menu">
			            <li><a href="#">Подпункт</a></li>
			            <li><a href="#">Еще подпункт</a></li>
			            <li><a href="#">Еще что-то</a></li>
			            <li class="divider"></li>
			            <li><a href="#">И еще</a></li>
			          </ul>
			        </li>
			    <br/>
			</div>
			)
	}
}
export default News;