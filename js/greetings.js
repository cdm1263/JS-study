const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저의 기본기능 막기.
  event.preventDefault();
  // loginform에 hidden 클래스부여. submit이 실행되면 form을 숨겨버린다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username 변수에 Input으로 들어온 값 저장
  const typedUsername = loginInput.value;
  // 로컬 스토리지에 key와 value 형식으로 값을 저장해둠.
  localStorage.setItem(USERNAME_KEY,typedUsername)
  paintGreetings(typedUsername);
}

function paintGreetings(username) {
   // submit이 되고나면 greeting이라는 id가 있는 태그는 hidden 클래스를 없애서 보여준다.
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}