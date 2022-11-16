import React from 'react';
import './list.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../redux/slice';


const List = ({ id, title }) => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(DELETE({id:id}));
    };

    return (
        <div className='show-container'>
            {todos.map((todo) => (
                <div className='show-data-div'>
                    <div className='show-data-box'><span>{todo.title}</span></div>
                    <button type='submit' onClick={handleDeleteClick} className='remove-btn'><span className='remove-text'>Remove</span></button>
                </div>

            ))}
        </div>
    )
}

export default List;
