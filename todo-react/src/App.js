import React from 'react';
import { render } from 'react-dom';


let id = 0

const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("insert a Todo")
    this.setState({
      todos:[...this.state.todos,{id: id++, text: text, checked: false}]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id != id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id != id) return todo
        return {
            id: todo.id,
            text: todo.text,
            checked: !todo.checked,
        }
      
      })
    })
  }

  render() {
    return(
      <div>
      <div>Todo Count: {this.state.todos.length}</div>
      <div>Unchecked Count: {this.state.todos.filter(x => !x.checked ).length}</div>
       <button class="btn" onClick={() => this.addTodo()}>
                Add Todo <span class="badge badge-primary"></span>
        </button>
        <ul>
          {this.state.todos.map(
            todo => (
            <Todo 
            onToggle={() => this.toggleTodo(todo.id)}
            onDelete={() => this.removeTodo(todo.id)}
            todo={todo}>
            </Todo>)
            )}
        </ul>
      </div>
      ) 
    };
};

export default App;
