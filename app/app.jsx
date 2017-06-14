var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addTodo('Take transcript'));
store.dispatch(actions.setSearchText('transcript'));
store.dispatch(actions.toggleShowCompleted());
//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
