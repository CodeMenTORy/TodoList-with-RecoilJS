const { selector } = require('recoil');
const { todoListFilterState, todoListState } = require('./atom');

// 过滤条件state
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = [...get(todoListState)].sort(
      (a, b) => a.priority - b.priority,
    );

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
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

const orderedTodoListState = selector({
  key: 'orderedTodoListState',
  get: ({ get }) => {
    const list = [...get(filteredTodoListState)];
    const filter = get(todoListFilterState);
    // 对存在完成任务的列表进行划分，分为未完成与完成两个部分
    if (
      filter === 'Show All' &&
      list.length > 0 &&
      list.some((item) => item.isComplete)
    ) {
      for (let i = 0, count = 0; count < list.length; i++, count++) {
        if (list[i].isComplete === true) {
          //将完成任务按顺序放到队尾
          list.push(...list.splice(i, 1));
          i--;
        }
      }
    }
    return list;
  },
});

export { filteredTodoListState, todoListStatsState, orderedTodoListState };
