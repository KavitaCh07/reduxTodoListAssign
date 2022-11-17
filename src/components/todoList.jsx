import React, { useEffect } from 'react'
import List from './list';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/slice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch])

  //    todos = [
  //     {id: 1, title: 'todo1'},
  //     {id: 2, title: 'todo2'},
  //     {id: 3, title: 'todo3'},
  // ];

  return (
    <div>
      {todos.map((todo) => {
        return <List id={todo && todo.id} title={todo && todo.title} />
      }
      )}
    </div>


  );
};

export default TodoList;
