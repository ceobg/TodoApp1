const todosReducer = (state = [], action) => {
    let newState;
    let todo;
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'DELETE_TODO':
            newState = state.filter(todo => todo.id !== action.todo.id)
            return newState;
        case 'UPDATE_TODO':
            newState = [...state]
            todo = newState.find(todo => todo.id === action.todo.id)
            todo.title = action.todo.title
            return newState;
        case 'COMPLETE_TODO':
            newState = [...state]
            console.log('COMPLETE_TODO: action.todo=' +  JSON.stringify(action.todo))
            todo = newState.find(todo => todo.id === action.todo.id)
            console.log('todo=' + todo)
            console.log('todo=' +  JSON.stringify(todo))
            todo.completed = !action.todo.completed
            return newState;
        default:
            return state;
    }
}
export default todosReducer;

/* const newTodo = {
   id: uuid.v4(),
   title,
   completed: false
 }
 */