import React from 'react';
import { MdOutlineDelete } from "react-icons/md";

const Home = ({todos, deleteTodo}) => {
  return (
    <div className='w-full h-full border'>
        <ul className="list-none">
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between py-2 px-4 border-b border-gray-600">
                <span>{todo}</span>
                <button onClick={() => deleteTodo(index)} className="text-red-500"><MdOutlineDelete /></button>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Home;
