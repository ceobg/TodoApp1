export const reduxAddTodo = (todo) => {
    return { 'type': 'ADD_TODO', 'todo': todo }
}
export const reduxDeleteTodo = (todo) => {
    return { type: 'DELETE_TODO', 'todo': todo }
}
export const reduxUpdateTodo = (todo) => {
    return { type: 'UPDATE_TODO', 'todo': todo }
}
export const reduxCompleteTodo = (todo) => {
    return { type: 'COMPLETE_TODO', 'todo': todo }
}
