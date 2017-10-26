var React  = require('react');
import {Link} from 'react-router';

var About = React.createClass({
	
	render: function(){
		let pStyle = {
			float: 'right'
		}
		return (
			<div>
				<Link to ={'/'}>Home</Link>
				<h1>All about me!</h1>
				<p style= {pStyle} >Developed by Yugal Jain</p>
				<p style={{float:'left'}}>Developed on React</p>
			</div>
		);
	}
})

module.exports = About
