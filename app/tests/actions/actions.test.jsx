import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate setSearchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc12311',
        text: 'something to do',
        createdAt: 400,
        completed: false
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create a todo and dispatch addTodo actions', (done) => {
    const store = createMockStore({});
    const todoText = 'Something to do';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({type: 'ADD_TODO'});
      expect(actions[0].todo).toInclude({text: todoText});
      done();
    }).catch(done);
  });

  it('shoud generate ADD_TODOS action', () => {
    var todos = [{
      id: 11,
      text:'something to do',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Test with firebase todo', () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'test todo',
        completed: false,
        createAt: 1232443
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch ADD_TODO action', (done) => {
      var store = createMockStore({});
      var action = actions.startToggleTodo(testTodoRef.id, true);

      store.dispatch(action).then(() => {
        var mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({completed: true});
        expect(mockActions[0].updates.completedAt).toExist();      
      }, done);
      done();
    });
  });
});
