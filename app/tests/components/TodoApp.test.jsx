var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to todos state when handleAddTodo', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    var todoText = 'test text';
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test data',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check fist todo has completed prop is false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with id 11
    todoApp.handleToggle(11);
    //verify whether value is changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
