import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atom';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  // useSetRecoilState用于write state
  const setTodoListItem = useSetRecoilState(todoListState);
  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 添加item
  const addTodoItem = () => {
    setTodoListItem((oldTodoListState) => [
      ...oldTodoListState,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputChange} />
      <button onClick={addTodoItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
