import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atom';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [itemPriority, setitemPriority] = useState(4);
  // useSetRecoilState用于write state
  const setTodoListItem = useSetRecoilState(todoListState);
  const inputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const priorityChange = ({ target: { value } }) => {
    setitemPriority(value);
  };

  // 添加item
  const addTodoItem = () => {
    setTodoListItem((oldTodoListState) => [
      ...oldTodoListState,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
        priority: itemPriority,
      },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputChange} />
      <select
        name="itemPriority"
        id="itemPriority"
        value={itemPriority}
        onChange={priorityChange}
      >
        <option value={1}>❗❗❗❗</option>
        <option value={2}>❗❗❗</option>
        <option value={3}>❗❗</option>
        <option value={4}>❗</option>
      </select>
      <button onClick={addTodoItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
