import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/slice';
import './form.css';



const Form = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    // const list = useSelector((state) => state.Reducer.list)

    const onSubmit = (event) => {
		event.preventDefault();
		dispatch(ADD({
            title:inputData,
            })
        )
	};

   
    return (
        <div className='container'>
            <form className='form-container' onSubmit={onSubmit} action=''>
                <div className='input-div'>
                    <input type="text" id="" value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <button  type='submit' className='add-btn'><span className='add-text'>ADD</span></button>
                </div>
            </form>
        </div>
    )
}

export default Form;
