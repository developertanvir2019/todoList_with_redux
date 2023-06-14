import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorSelected, deleted, toggled } from '../redux/todos/actions';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()
    const handleStatusChange = (todoId) => {
        dispatch(toggled(todoId))
    }

    const handleColorChange = (todoId, color) => {
        dispatch(colorSelected(todoId, color))
    }


    const handleDelete = (todoId) => {
        dispatch(deleted(todoId))
    }

    const filters = useSelector((state) => state.filters)
    return (
        <>
            {
                todos?.filter(todo => {
                    const { status } = filters;
                    switch (status) {
                        case 'Complete':
                            return todo.completed;
                        case 'Incomplete':
                            return !todo.completed;


                        default:
                            return true;
                    }
                }).filter(todo => {
                    const { colors } = filters;
                    if (colors.length > 0) {
                        return colors.includes(todo?.color)
                    }
                    return true;
                })
                    .map(todo =>
                        <div key={todo?.id}
                            className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
                        >
                            <div
                                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2  ${todo?.completed === true ? "focus-within:border-green-500 border-green-500" : ""}`}

                            >
                                <input
                                    type="checkbox"
                                    checked={todo?.completed}
                                    onChange={() => handleStatusChange(todo?.id)}
                                    className="opacity-0 absolute rounded-full"
                                />
                                {todo?.completed === true && (
                                    <svg
                                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                )}
                            </div>

                            <div className={`select-none flex-1 ${todo?.completed && "line-through"}`}>
                                {todo?.text}
                            </div>




                            <div
                                className={`border-green-500 hover:bg-green-500 flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${todo?.color === "green" &&
                                    " bg-green-500"
                                    }`}
                                onClick={() => handleColorChange(todo?.id, 'green')}
                            ></div>

                            <div
                                className={`border-yellow-500 hover:bg-yellow-500 flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${todo?.color === "yellow" &&
                                    " bg-yellow-500"
                                    }`}
                                onClick={() => handleColorChange(todo?.id, 'yellow')}
                            ></div>

                            <div
                                className={`border-red-500 hover:bg-red-500 flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer ${todo?.color === "red" &&
                                    " bg-red-500"
                                    }`}
                                onClick={() => handleColorChange(todo?.id, 'red')}
                            ></div>




                            <img
                                src="./images/cancel.png"
                                className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                                alt="Cancel"
                                onClick={() => handleDelete(todo?.id)}
                            />
                        </div>
                    )

            }
        </>
    );
};

export default TodoList;