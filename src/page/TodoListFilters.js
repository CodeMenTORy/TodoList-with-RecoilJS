import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/atom';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <span>Filter:</span>
      <select value={filter} onChange={changeFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}
