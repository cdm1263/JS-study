const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo (event) {
    // 클릭한 버튼의 부모 태그가 무엇인지 정확히 지정할 수 있음
    const deleteli = event.target.parentElement;
    deleteli.remove();
}

function painToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // 먼저 newTodo라는 변수에 인풋값을 저장함
    const newTodo = toDoInput.value;
    // 그 후에 인풋값을 비워도 newTodo에는 이전에 저장된 값이 그대로 있음
    toDoInput.value = "";
    toDos.push(newTodo);
    painToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello (event) {
    console.log("good", event);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(element => console.log("this is the turn of", element));
}