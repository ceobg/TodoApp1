
import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = () => {
    console.log('Hello')
  }
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <ListItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
        delTodo={this.props.delTodo} />


      // <h3>{ todo.title }</h3>
    ));
    // <div>
    // <h1> My Todo List </h1>

    // </div>
    //);
  }
}

// PropTypes

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
