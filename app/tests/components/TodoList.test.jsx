var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoLsit', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });

    it('should render empty message when there is no todo', () => {
      var todos = [];
      var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var $el = $(ReactDOM.findDOMNode(todoList));
      var message = $el.find('.container__message');

      expect(message.length).toBe(1);
    });
});
