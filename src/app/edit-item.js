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
					<input type="text" className="item-name item-edit" ref="editedItem" placeholder={this.props.item} onChange={this.handleChange}/>
					<span className="item-remove" onClick={this.handleSave}>✔️</span>
					<span className="item-remove" onClick={this.handleSave}>❌</span>
				</div>
			</li>
		)
	},

	handleChange: function(e){
		// console.log('cahnge');
	},

	handleSave: function(){
		// console.log(this.refs.editedItem.value || this.props.item);
		this.props.onSave(this.refs.editedItem.value || this.props.item, this.props.indexNumber);
	}
})

module.exports = TodoItem;
