import React from 'react';
import { render } from 'react-dom';


let id = 0

const Todo = props => (
  <li>
    <input type="checkbox" />
    <button>delete</button>
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
      todos:[...this.state.todos,{id: id++, text: text}]
    })
  }

  render() {
    return(
      <div>
        <button class="btn" onClick={() => this.addTodo()}>
                Add Todo <span class="badge badge-primary"></span>
        </button>
        <ul>
          {this.state.todos.map(todo => <Todo todo={todo}></Todo>)}
        </ul>
      </div>
      ) 
    };
};

export default App;
