import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 소개", checked: false },
      { id: 1, text: "리액트 소개", checked: false },
      { id: 2, text: "리액트 소개", checked: false }
    ]
  };

  render() {
    return (
      <TodoListTemplate form={<Form />}>
        <TodoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;

/**

Form 기능 
- 텍스트 내용 바뀌면 state 업데이트
- 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
- 인풋에서 Enter 누르면 버튼을 클릭한것과 동일한 작업진행하기
 */