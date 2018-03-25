/**
 * Created by Agronom on 24.03.2018.
 */

function makeToDoItem(title) {
    var element = document.createElement('div');
    element.setAttribute('class','toDoItem');
    const newToDoItem = [{tag:'input',className:'completeItem',type:'checkbox'},
                         {tag:'label',className:'labels',innerHTML:title},
                         {tag:'input',className:'changeButton',type:'button',value:'Изменить'},
                         {tag:'input',className:'deleteButton',type:'button',value:'Удалить'}]

    for (var i=0;i<newToDoItem.length;i++) {
        var tempEl = document.createElement(newToDoItem[i]['tag']);
        Object.keys(newToDoItem[i]).forEach(function(item){
            if (newToDoItem[i]!=='tag') tempEl[item]=newToDoItem[i][item]});
        element.appendChild(tempEl);
    }
    element.querySelector('.completeItem').addEventListener('click',completeToDoItem);
    element.querySelector('.deleteButton').addEventListener('click',deleteToDoItem);
    return element;
}

function addToDoItem(){
    var title = document.getElementById('inputField').value;
    toDoList.appendChild(makeToDoItem(title));

}

function editToDoItem(){

}

function deleteToDoItem(){
    var toDoItem = this.parentElement;
    toDoList.removeChild(toDoItem);
}

function completeToDoItem() {
    const toDoItem = this.parentElement;
    toDoItem.classList.toggle('completedItem');
}


function bindListeners(){
    Object.keys(toDoList).forEach(function() {
        completeItem.addEventListener('click', completeToDoItem);
        deleteButton.addEventListener('click', deleteToDoItem);
        addButton.addEventListener('click', addToDoItem)})
}
window.onload = function(){
    var req = new XMLHttpRequest();
    req.open("GET", "toDoList.txt", true);
    console.log(req.status);
    req.addEventListener("load", function() {
        console.log("Done:", req.status);
        console.log(req.response);
    });
    req.send(null);
    const completeItem = document.querySelector('.completeItem');
    const toDoList = document.querySelector('#toDoList');
    const deleteButton = document.querySelector('.deleteButton');
    const addButton = document.querySelector('#addButton');
    completeItem.addEventListener('click', completeToDoItem);
    deleteButton.addEventListener('click', deleteToDoItem);
    addButton.addEventListener('click',addToDoItem);
}