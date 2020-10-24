import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

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
      todos:[...this.state.todos,{text: text}]
    })
  }

  render() {
    return(
      <div style={styles}>
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
