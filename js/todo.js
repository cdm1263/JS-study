const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

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
    // 아래 newTodoObj에서 할당한 id를 li태그에 id속성값으로 붙여줌
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    // string형태로 주던 newTodo 대신 object형식으로 만들어 각 내용이 고유한 랜덤id를 갖는 newTodoObj를 만듬
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    painToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello (event) {
    console.log("good", event);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // 새로고침 할 때마다 toDos의 빈 array를 반환하기 때문에 기존에 입력했던 array를 toDos에 덮어씌움
    toDos = parsedToDos;
    parsedToDos.forEach(painToDo);
}