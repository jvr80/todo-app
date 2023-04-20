const GlobalReducer = (state , action) => {

    switch (action.type) {

        case 'SAVE' : 
        return {
            ...state,
            todos : [...state.todos , action.payload]
        }

        case 'DELETE' : 
        return{
            ...state,
            todos : state.todos.filter(item => item.id !== action.payload)
        }
    
        case 'EDIT' : 
        return{
            ...state,
            edit : {todo : action.payload , isEdit : true}
        }

        case 'UPDATE' : 
        return {
            ...state,
            todos : state.todos.map(item => item.id === action.payload.id ? {...item , text : action.payload.text} : item),
            edit : {todo : {} , isEdit : false}
        }

        default:
         return state  
    }
}

export default GlobalReducer