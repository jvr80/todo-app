import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import ListItem from './ListItem'

function ListGroup() {
  
  const {todos} = useContext(GlobalContext)

  return (
    <ul className="list-group">
          {
            todos.map(todo => <ListItem key={todo.id} todo={todo}/>)
          }
        </ul>
  )
}

export default ListGroup