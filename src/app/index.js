const React = require('react');
const ReactDOM = require('react-dom');
const TodoItem = require('./todoItem');
const AddItem = require('./add-item');
const About = require('./about');
const TodoEdit = require('./edit-item');
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router';

const TodoComponent = React.createClass({

	getInitialState:function() {
		return {
			todos: ['wash up','eat','fun'],
			age: 21,
			editable: [false,false,false]
		}	
	},

	onDelete: function(item){
		let itemIndex;
		let updateTodos = this.state.todos.filter(function(val, i){
			itemIndex = i;
			return item !== val; 
		});

		let updateEditable = this.state.editable.filter(function(val, i){
			if(i === itemIndex){
				return false;
			}else{
				return true;
			}
		});
		
		// console.log(updateTodos )
		this.setState({
			todos: updateTodos,
			editable: updateEditable
		})
	},

	onAdd: function(item){
		let updateTodos = this.state.todos;
		let updatedEditable =this.state.editable;
		// console.log(updateTodos);
		updateTodos.push(item);
		updatedEditable.push(false);
		this.setState({
			todos: updateTodos,
			editable: updatedEditable
		});

	},

	onEdit: function(item, indexNumber){
		let updatedEditable =this.state.editable;
		for (let i = 0; i < updatedEditable.length; i++) {
			if(item === item && indexNumber === i){
				// console.log('in if');
				updatedEditable[i] = true;
			}
			else{
				updatedEditable[i] = false;
			}
		}

		this.setState({
			editable: updatedEditable
		})
	},
	
	onSave: function(item, indexNumber){
		let updateTodos = this.state.todos;
		let updateEditable = this.state.editable;
		for (let i = 0; i < updateTodos.length; i++) {
			if(i === indexNumber){
				updateTodos[i] = item;
				updateEditable[i] = false;
			}
		}
		this.setState({
			todos: updateTodos,
			editable: updateEditable
		});
	},

	componentWillMount() {
		console.log('componentWillMount');	
	},

	componentDidMount() {
		console.log('componentDidMount');	
	},
	render:function(){
		let ager = setTimeout(function(){
			this.setState({
				age: 22
			});
		}.bind(this), 5000);

		var todos = this.state.todos;
		todos = todos.map(function(item, i){
			// console.log(this.state.editable[i]);
			if(!this.state.editable[i])
			{	return (
					<TodoItem item={item} editable = {0} indexNumber={i} key={i} onDelete={this.onDelete} onEdit={this.onEdit}/>
				);
			}
			else{
				return(
					<TodoEdit item={item}  editable = {1} indexNumber={i} key={i} onDelete={this.onDelete} onSave={this.onSave}/>
				);
			}	
		}.bind(this));
		return (
			<div>
				<h1 className="heading">Todo-List</h1>
				<div id="todo-list">
					<Link to={'/about'}>About</Link>
					<p>{this.state.age}</p>
					<ul>{todos}</ul>
					<AddItem onAdd = {this.onAdd}/>
				</div>
			</div>
		);	
	}
})


const App = React.createClass({
	render: function(){
		return (
			<Router history = {browserHistory}>
				<Route path={'/'} component = {TodoComponent}></Route>
				<Route path={'/about'} component = {About}></Route>
			</Router>
		);
	}
})


ReactDOM.render(<App msg="I am yugal"/>, document.getElementById('todo-wrapper'));