const { selector } = require('recoil');
const { todoListFilterState, todoListState } = require('./atom');

// 过滤条件state
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return [...list]
          .filter((item) => item.isComplete)
          .sort((a, b) => a.priority - b.priority);
      case 'Show Uncompleted':
        return [...list]
          .filter((item) => !item.isComplete)
          .sort((a, b) => a.priority - b.priority);
      default:
        return [...list].sort((a, b) => a.priority - b.priority);
    }
  },
});

// listStats
const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const list = get(todoListState);
    const totalNum = list.length;
    const totalCmpltNum = list.filter((item) => item.isComplete).length;
    const totalunCmpltNum = totalNum - totalCmpltNum;
    const percentCmplt = totalNum === 0 ? 0 : totalCmpltNum / totalNum;

    return {
      totalNum,
      totalCmpltNum,
      totalunCmpltNum,
      percentCmplt,
    };
  },
});

// const orderedByPriorityListState = selector({
//   key: 'orderedByPriorityListState',
//   get: ({ get }) => {
//     const list = get(filteredTodoListState);
//     console.log("object")
//     return list.sort((a, b) => a.priority - b.priority);
//   },
// });

export { filteredTodoListState, todoListStatsState };
