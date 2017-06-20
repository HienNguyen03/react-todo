var $ = require('jQuery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filterdTodos = todos;
    //filter by showCompleted
    filterdTodos = filterdTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filterdTodos = filterdTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //sort todos with non-complete first
    filterdTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filterdTodos;
  }
};
