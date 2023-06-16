import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED, } from "./actionType"
const initialState = []
const nextTodoId = (todos) => {
    const maxid = todos.reduce((maxid, todo) => Math.max(todo.id, maxid), -1)
    return maxid + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    complete: false
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo?.completed
                }
            })


        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            })

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })


        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        default:
            return state;
    }
}

export default reducer;