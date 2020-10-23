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
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
  let checkBoxNumber = document.getElementsByClassName(`${classNames.TODO_CHECKBOX}`).length

  list.innerHTML += `<li id="li${checkBoxNumber+1}">  
                                                            <div class=${classNames.TODO_ITEM}>
                                                            ${textToAdd.value} 
                                                            <input type="checkbox" class = ${classNames.TODO_CHECKBOX} 
                                                                    id="toIncrement${checkBoxNumber+1}" name="check${checkBoxNumber+1}" value="increment${checkBoxNumber+1}"
                                                                    onclick="updateUncheckedCount()">
                                                            <button class="todo-delete" type="delete" onclick="deleteMe(this)">Delete Me!</button>
                                                            </div>
                     </li>`;

}



document.addEventListener('DOMContentLoaded', function() {

  updateCount = function () {

    updateTodoCount();
    updateUncheckedCount();


  }

  updateTodoCount = function () {
    let checkBox = document.getElementsByClassName(`${classNames.TODO_CHECKBOX}`)
    let nbrTodo=0
    for(var i = 0, l = checkBox.length; i < l; ++i) {
      nbrTodo+=1
      }
      itemCountSpan.innerHTML = nbrTodo;
    }


  updateUncheckedCount = function () {
    let checkBox = document.getElementsByClassName(`${classNames.TODO_CHECKBOX}`)
    let nbrUnchecked=0
    for(var i = 0, l = checkBox.length; i < l; ++i) {
      if(!checkBox[i].checked) {
        nbrUnchecked+=1
      }
    }
    uncheckedCountSpan.innerHTML = nbrUnchecked;
  }

  deleteMe = function(element){
    let liParent = element.parentNode.parentNode.id
    document.getElementById(liParent).remove();

    updateCount()
    }

}, false);
