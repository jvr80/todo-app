import React, { useContext } from 'react'
import { deleteTodo , editTodo } from '../context/GlobalActions'
import GlobalContext from '../context/GlobalContext'

function ListItem({todo}) {
  
  const {dispatch} = useContext(GlobalContext)

  const handleDelete = (id) => {
    const data = deleteTodo(id)
    dispatch({
      type : "DELETE",
      payload : data
    })
  }

  const handleEdit = (todo) => {
    const data = editTodo(todo)
    dispatch({
      type : "EDIT",
      payload : data
    })
  }
  
  return (
    <li className="list-group-item">
    {todo.text}
    <button className="btn btn-danger rounded-0 btn-sm float-end" onClick={()=>handleDelete(todo.id)}>Delete</button>
    <button className="btn btn-warning rounded-0 btn-sm float-end" onClick={()=>handleEdit(todo)}>Edit</button>
  </li>
  )
}

export default ListItem