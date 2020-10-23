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

  list.innerHTML += `<li>  
                                                            <div class=${classNames.TODO_ITEM}>
                                                            ${textToAdd.value} 
                                                            <input type="checkbox" class = ${classNames.TODO_CHECKBOX} 
                                                                    id="toIncrement${checkBoxNumber+1}" name="check${checkBoxNumber+1}" value="increment"
                                                                    onclick="updateCount()">
                                                            </div>
                     </li>`;

}



document.addEventListener('DOMContentLoaded', function() {

  updateCount = function () {
    let checkBox = document.getElementsByClassName(`${classNames.TODO_CHECKBOX}`)
    let nbrUnchecked=0
    for(var i = 0, l = checkBox.length; i < l; ++i) {
      if(!checkBox[i].checked) {
        nbrUnchecked+=1
      }
    }
    document.getElementById("unchecked-count").innerHTML = nbrUnchecked;
  }
}, false);
