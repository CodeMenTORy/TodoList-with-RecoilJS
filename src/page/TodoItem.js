import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atom';

export default function TodoItem({ item }) {
  // 类似于useState，进行读取以及设置操作
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todoItem) => todoItem === item);

  //更改item状态
  const toggleItemCompletion = () => {
    const newList = [...todoList];
    newList.splice(index, 1, { ...item, isComplete: !item.isComplete });
    setTodoList(newList);
  };

  // 更改todoItem的内容
  const editItemText = ({ target: { value } }) => {
    const newList = [...todoList];
    newList.splice(index, 1, { ...item, text: value });
    setTodoList(newList);
  };

  // 删除item
  const deleteItem = () => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const priorityChange = ({ target: { value } }) => {
    const newList = [...todoList];
    newList.splice(index, 1, { ...item, priority: value });
    setTodoList(newList);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input type="text" value={item.text} onChange={editItemText} />
      <select
        name="itemPriority"
        id="itemPriority"
        value={item.priority}
        onChange={priorityChange}
      >
        <option value={1}>❗❗❗❗</option>
        <option value={2}>❗❗❗</option>
        <option value={3}>❗❗</option>
        <option value={4}>❗</option>
      </select>
      <button onClick={deleteItem}>❌</button>
    </div>
  );
}
