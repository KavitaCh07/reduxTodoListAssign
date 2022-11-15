import React from 'react';
import { useState, useEffect } from 'react';
import { Add, Delete } from '../actions/action';
import { useSelector, useDispatch } from 'react-redux';
import './form.css';



const Form = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.Reducer.list)

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(inputData))
     }, [inputData]);

    return (
        <div className='container'>
            <div className='form-container' action=''>
                <div className='input-div'>
                    <input type="text" id="" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <button className='add-btn' onClick={() => dispatch(Add(inputData), setInputData(''))}><span className='add-text'>ADD</span></button>
                </div>
                
                <div className='show-container'>
                {
                    list.map((elem) => {
                        return (
                            <div className='show-data-div' key={elem.id}>
                                <div className='show-data-box'>{elem.data}</div>
                                <button className='remove-btn' onClick={() => dispatch(Delete(elem.id))}><span className='remove-text'>Remove</span></button>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default Form;
