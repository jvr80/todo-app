import React, { useContext , useState , useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'
import { saveTodo, updateTodo } from '../context/GlobalActions'

function Form() {
  
  const { edit , dispatch} = useContext(GlobalContext)
  
  const [text , setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(edit.isEdit){
      const data = updateTodo(edit.todo.id , text)
      dispatch({
        type : "UPDATE",
        payload : data
      })
    }else{
      const data = saveTodo(text)
      dispatch({
        type : "SAVE",
        payload : data
      })
    }

    setText("")

  }
  
 useEffect(()=>{
  setText(edit.todo.text)
 },[edit])


  
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
          <div class="mb-3">
            <input type="text" value={text} class="form-control mb-2" onChange={(e)=>setText(e.target.value)}/>
            <button className="btn btn-danger w-100 rounded-0">Save</button>
          </div>
          </form>
  )
}

export default Form