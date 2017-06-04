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
    //expect createAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test data',
      completed: false,
      createAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check fist todo has completed prop is false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handleToggle with id 11
    todoApp.handleToggle(11);
    //verify whether value is changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  //Test that when toggle from true to false, completed get removed
  it('should toggle remove completedAt value when handleToggle called from true to false', () => {
    var todoData = {
      id: 12,
      text: 'Test data',
      completed: true,
      createAt: 0,
      completedAt: 12324353
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //check fist todo has completed prop is false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handleToggle with id 11
    todoApp.handleToggle(12);
    //verify whether value is changed
    expect(todoApp.state.todos[0].completed).toBe(false);
    //expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
