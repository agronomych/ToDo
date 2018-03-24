/**
 * Created by Agronom on 24.03.2018.
 */

function makeToDoItem() {
    var fragment = document.createDocumentFragment();

    var elements = [ document.createElement('input'),
        document.createElement('input'),
        document.createElement('input'),
        document.createElement('input')];
    elements[0].setAttribute('type','checkbox');
    elements[2].setAttribute('type','button');
    elements[2].setAttribute('value','изменить');
    elements[3].setAttribute('type','button');
    elements[3].setAttribute('value','удалить');
    for (var i=0;i<3;i++){
        elements[i].setAttribute('background-color','rgba(0,0,0,0');
        fragment.appendChild(elements[i]);
        console.log('Add element');
    }
    return fragment;
}

function addToDoItem(){
    var newToDoItem = document.createElement('div');
    newToDoItem.className='toDoItem';
    newToDoItem.appendChild(makeToDoItem());
    var toDoItems = document.getElementById('toDoItems');
    toDoItems.appendChild(newToDoItem);
}

function editToDoItem(){

}

function deleteToDoItem(){

}

window.onload = function(){

    var addButton = document.getElementById('addButton');

    addButton.addEventListener('click',addToDoItem);

}