var React = require('react');
var {connect} = require('react-redux');

import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
  render () {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      var filterdTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filterdTodos.length  === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return filterdTodos.map((todo) => {
          return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
