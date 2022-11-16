import React from 'react'
import List from './list';
import { useSelector } from 'react-redux';

const TodoList = () => {

    const todos = useSelector((state) => state.todos);

    //    todos = [
    //     {id: 1, title: 'todo1'},
    //     {id: 2, title: 'todo2'},
    //     {id: 3, title: 'todo3'},
    // ];

  return (
    
    {todos.map((todo) => (
            <List id={todo.id} title={todo.title}/>
        ))}
      
    
  );
};

export default TodoList;
