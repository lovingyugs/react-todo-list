var React = require('react');
var ReactDOM = require('react-dom');
require('./css/todoItem.css');

var TodoItem = React.createClass({
	render: function() {
		// console.log(this.props);
	
		return(
			<li>
				<div className = "todo-item">
					<span className="item-sno">{this.props.indexNumber+1}.</span>
					<span className="item-name">{this.props.item}</span>
					<span className="item-remove" onClick={this.handleEdit}> ✎</span>
					<span className="item-remove" onClick={this.handleDelete}>🗑</span>
				</div>
			</li>
		)
	},

	handleDelete: function(){
		this.props.onDelete(this.props.item)
	},

	handleEdit: function(){

		this.props.onEdit(this.props.item, this.props.indexNumber)
	}
})

module.exports = TodoItem;
