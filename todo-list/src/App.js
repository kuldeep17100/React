import './App.css';
import React from "react"
import TodoItems from "./TodoItems.js"
import todosData from "./todosData.js"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos:todosData
    }
    this.handleChange=this.handleChange.bind(this)
    
  }
  handleChange(id){
    this.setState(preState=>{
      const updatedtodos=preState.todos.map(todo=>{
        if (id===todo.id){
          return{
            ...todo,
            completed:!todo.completed
          }
        }
        return todo
      })

        return{
          todos:updatedtodos
        }
      
    })
  }
  
  render(){
    const allTodos = this.state.todos.map(todo =>
      <TodoItems key={todo.id} item={todo} handleChange={this.handleChange}/>
    )
  return (
    <div className="todo-list">
      <h2>Todo-List</h2>
      {allTodos}
    </div>
  )}
}

export default App;
