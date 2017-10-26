var React  = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
	handeSubmit: function(e){
		//console.log(this.refs.newItem.value);
		e.preventDefault();
		this.props.onAdd(this.refs.newItem.value);
		this.refs.newItem.value = '';
	},

	render: function(){
		return (
			<form id="add-todo" onSubmit = {this.handeSubmit} >
				<input type="text" required ref="newItem"/>
				<input type="submit" value= "Add Item"/>		
			</form>
		);
	}
})

module.exports = AddItem
