import React, { Component } from 'react';

class TodoItem extends Component {


  render() {
    return (
      <li className="">
        <strong> {this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  project: React.PropTypes.object
}

export default TodoItem;
