import React, { useState } from 'react';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';
import { useDispatch } from 'react-redux';
import addTodo from '../redux/todos/thunk/addTodo';

const Header = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    // For complete part
    const completeAll = () => {
        dispatch(allCompleted())
    }

    const clearHandler = () => {
        dispatch(clearCompleted())
    }


    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={(e) => handleSubmit(e)}
            >
                <img
                    src="./images/notes.png"
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={completeAll} className="flex space-x-1 cursor-pointer">
                    <img
                        className="w-4 h-4"
                        src="./images/double-tick.png"
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={clearHandler} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;