const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const textToAdd = document.getElementById(`${classNames.TODO_TEXT}`)

function newTodo() {

  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1


  list.innerHTML += `<li>  
                                                            <div class=${classNames.TODO_ITEM}>
                                                            ${textToAdd.value} 
                                                            <input type="checkbox" class = ${classNames.TODO_CHECKBOX} id="toIncrement1" name="check1" value="increment">
                                                            </div>
                                                      </li>`;

}
