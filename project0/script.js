const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let itemCount = document.getElementById('item-count')

  itemCount.innerHTML = Number(itemCount.innerHTML) + 1

  document.getElementById('todo-list').innerHTML += `<li>  
                                                            <div class="todo-container">
                                                            .. 
                                                            <input type="checkbox" class = "todo-checkbox" id="toIncrement1" name="check1" value="increment">
                                                            </div>
                                                      </li>`;

}
