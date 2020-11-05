import { useRecoilValue } from 'recoil';
import { orderedTodoListState } from '../recoil/selector';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

export default function TodoList() {
  const todoList = useRecoilValue(orderedTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}

      <TodoListStats />
    </>
  );
}
