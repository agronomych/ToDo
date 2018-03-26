/**
 * Created by Agronom on 24.03.2018.
 */
/*В следующей функции сохраняем все задачи в JSON
и отправляем на сервер с URL='saveDate',
этот url служит указанием для сервера запустить
функцию сохранения данных
 */
function saveData(){
    var data = [];
    var toDoItems = document.getElementsByClassName('toDoItem');
    for (var i=0;i<toDoItems.length;i++)
    {
        var isChecked = toDoItems.item(i).querySelector('.completeItem').checked;
        var temp = toDoItems.item(i).querySelector('.labels').innerHTML;
        data.push({'checked':isChecked,'task':temp});
    }
    data = JSON.stringify(data);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
        }
    }
    request.open('POST', 'saveData',true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(data);
}


/*вспомогательная функция для формирования одного элемента*/
function makeToDoItem(title,check) {
    var element = document.createElement('div');
    element.setAttribute('class','toDoItem');
    const newToDoItem = [{tag:'input',className:'completeItem',type:'checkbox',checked:check},
                         {tag:'label',className:'labels',innerHTML:title},
                         {tag:'input',className:'changeButton',type:'button',value:'Изменить'},
                         {tag:'input',className:'deleteButton',type:'button',value:'Удалить'}]

    for (var i=0;i<newToDoItem.length;i++) {
        var tempEl = document.createElement(newToDoItem[i]['tag']);
        Object.keys(newToDoItem[i]).forEach(function(item){
            if (newToDoItem[i]!=='tag') tempEl[item]=newToDoItem[i][item];
            if (newToDoItem[i].checked===true) element.classList.add('completedItem');
        });
        element.appendChild(tempEl);
    }
    element.querySelector('.completeItem').addEventListener('click',completeToDoItem);
    element.querySelector('.deleteButton').addEventListener('click',deleteToDoItem);
    return element;
}

/*добавить задачу*/
function addToDoItem(){
    var title = document.getElementById('inputField').value;
    toDoList.appendChild(makeToDoItem(title,false));
    document.getElementById('inputField').value="";
    saveData();
}

/*редактировать задачу*/
function editToDoItem(){

}

/*удалить задачу*/
function deleteToDoItem(){
    var toDoItem = this.parentElement;
    toDoList.removeChild(toDoItem);
    saveData();
}

/*завершить задачу*/
function completeToDoItem() {
    const toDoItem = this.parentElement;
    toDoItem.classList.toggle('completedItem');
    saveData();
}

/*Привязка обработчиков к событиям*/
function bindListeners(){
    const completeItem = document.querySelector('.completeItem');
    const toDoList = document.querySelector('#toDoList');
    const deleteButton = document.querySelector('.deleteButton');
    const addButton = document.querySelector('#addButton');
    completeItem.addEventListener('click', completeToDoItem);
    deleteButton.addEventListener('click', deleteToDoItem);
    addButton.addEventListener('click',addToDoItem);
    /*Object.keys(toDoList).forEach(function() {
        completeItem.addEventListener('click', completeToDoItem);
        deleteButton.addEventListener('click', deleteToDoItem);
        addButton.addEventListener('click', addToDoItem)})*/
}

function loadToDoList(data) {
    var temp;
    data = JSON.parse(data);
    data.forEach(function(item){toDoList.appendChild(makeToDoItem(item.task,item.checked))});
}

window.onload = function(){
    var req = new XMLHttpRequest();
    var data;
    req.open("POST", "toDoList.txt", true);
    req.setRequestHeader('Content-type','application/json; charset=utf8')
    req.addEventListener("load", function() {
        loadToDoList(req.responseText);
        bindListeners();
    });
    req.send();
}