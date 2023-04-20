// Save Todo
export const saveTodo = (text) => {
        
    const newTodo = {
        id : crypto.randomUUID(),
        text
    }
    
    return newTodo
}


export const deleteTodo = (id) => {
    return id
}


export const editTodo = (todo) => {
    return todo
}

export const updateTodo = (id , text) => {
    return {id , text}
}