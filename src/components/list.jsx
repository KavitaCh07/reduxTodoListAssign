import React from 'react';
import './list.css'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE, deleteTodoAsync } from '../redux/slice';


const List = (props) => {
    
    const dispatch = useDispatch();
    console.log(props);

    const handleDeleteClick = () => {
        dispatch(deleteTodoAsync({id:props.id}));
    };

    return (
        <div className='show-container'>
                    <div className='show-data-div'>
                
                        <div className='show-data-box'><span>{props.title}</span></div>
                        <button type='submit' onClick={handleDeleteClick} className='remove-btn'><span className='remove-text'>Remove</span></button>
                    </div>

                
        </div>
    )
}

export default List;
