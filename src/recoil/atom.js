const { atom } = require('recoil');

// 用于管理todoList
const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// 用于管理filter
const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export { todoListState, todoListFilterState };
