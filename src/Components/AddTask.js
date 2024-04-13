import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ addTodo }) => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
            // Navigate to the homepage after adding a task
            navigate('/');
        }
    }

    return (
        <div className='min-h-72 w-1/2 mt-12 mx-auto'>
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                <label className='text-xl text-white mb-2' htmlFor='text'>Enter text</label>
                <input
                    className='w-full text-black h-12 rounded-lg p-4 mb-4'
                    type='text'
                    onChange={handleChange}
                    placeholder='type here...'
                    value={text}
                />
                <button className='bg-blue-500 text-white py-2 px-4 rounded-lg font-bold text-2xl'>Add</button>
            </form>
        </div>
    )
}

export default AddTask;
