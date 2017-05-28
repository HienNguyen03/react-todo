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
});
