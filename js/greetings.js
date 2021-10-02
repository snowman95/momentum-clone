/*
  로컬스토리지에 유저 정보가 있으면
  greeting(한영) 화면
  
  유저 정보가 없으면
  login 화면

  hidden class를 붙였다 뗐다하여 화면 제어함.
*/
import * as todo from './todo.js';
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const loginForm = document.querySelector("#main-content__login_form");
const loginInput = document.querySelector("#main-content__login_form__input");
const greeting = document.querySelector("#main-content__login_greeting");
function onLoginSubmit(event){
}

function paintGreetings(usersname){
  greeting.innerText = `Hello ${usersname} 🙋‍♂️🙋‍♀️`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo.loadTodoList();
}

// 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
  // form 보이기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", (event)=>{
    // 기본동작 막기 (새로고침 안할거임)
    event.preventDefault();
    // form 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // 로컬스토리지에 username 등록
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  });

}else{
  paintGreetings(savedUsername);
}