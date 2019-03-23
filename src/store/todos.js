
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const newToDo = text => ({
    type: ADD_TODO,
    text
})

export const toggleToDo = todoID => ({
    type: TOGGLE_TODO,
    id: todoID
})


let id = 0;

const toDosReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            id++
            const newToDo = {
                text: action.text,
                isCompleted: false,
                id
            }
            return [
                ...state,
                newToDo
            ]
        case TOGGLE_TODO:

        return state.map(todo => {
                return todo.id === action.id
                    ?
                    { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            })

        default:
            return state
    }
}




export default toDosReducer;