import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 소개 0", checked: false },
      { id: 1, text: "리액트 소개 1", checked: true },
      { id: 2, text: "리액트 소개 2", checked: false }
    ]
  };

  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos : todos.concat({
        id : this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 이면 handleCreate 호출
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  render() {
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;
    return (
      <TodoListTemplate form={(
        <Form 
          value = {input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos}/>
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

 
배열 사용시 push 를 하면 안됨
 
*/