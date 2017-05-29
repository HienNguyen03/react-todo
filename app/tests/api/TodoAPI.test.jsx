var $ = require('jQuery');
var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos to localStorage', () => {
      var todosData = [{
        id: 11,
        text: 'this is a test',
        completed: false
      }];
      TodoAPI.setTodos(todosData);

      var actualData = JSON.parse(localStorage.getItem('todos'));

      expect(actualData).toEqual(todosData);
    });

    it('should not set invalid todos to localStorage', () => {
      var todosData = {a: 1}
      TodoAPI.setTodos(todosData);

      var actualData = localStorage.getItem('todos');
      expect(actualData).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should get empty array if localStorage give valid data', () => {
      var todosData = [{
        id: 11,
        text: 'this is a test',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todosData));
      var actualData = TodoAPI.getTodos();

      expect(actualData).toEqual(todosData);
    });

    it('should NOT get todos array if localStorage not give valid data', () => {
      var actualData = TodoAPI.getTodos();

      expect(actualData).toEqual([]);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some to do 1',
      completed: false
    },
    {
      id: 2,
      text: 'Need to do 2',
      completed: true
    },
    {
      id: 3,
      text: 'Some to do 3',
      completed: false
    }];
    it('should return all todos if showCompleted is true', () => {
      var filterdTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterdTodos.length).toBe(3);
    });

    it('should return todos not completed if showCompleted is false', () => {
      var filterdTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterdTodos.length).toBe(2);
    });

    it('should sort todos not completed first', () => {
      var filterdTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterdTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filterdTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filterdTodos.length).toBe(2);
    });

    it('should return all todos if empty searchText', () => {
      var filterdTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterdTodos.length).toBe(3);
    });
  });
});
