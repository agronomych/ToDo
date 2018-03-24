/**
 * Created by Agronom on 24.03.2018.
 */

function makeToDoItem(tag, properties, ...childrens) {
    var element;

}

function addToDoItem(){

}

function editToDoItem(){

}

function deleteToDoItem(){
    console.log('Inside delete');
    const toDoItem = this.parentElement;
    toDoItems.parentElement.removeChild(toDoItem);
}

function completeToDoItem() {
    const toDoItem = this.parentElement;
    toDoItem.classList.toggle('completedItem');
}

window.onload = function(){
    const completeItem = document.querySelector('.checkItem');
    const toDoItems = document.querySelector('toDoItems');
    const toDoItem = document.querySelector('.toDoItem');
    completeItem.addEventListener('click', completeToDoItem);
    toDoItem.addEventListener('click', deleteToDoItem);
}