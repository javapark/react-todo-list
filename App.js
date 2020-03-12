import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

function App() {
  return (
    <TodoListTemplate form={<Form/>}>
       <TodoItemList/>
    </TodoListTemplate>
  );
}

export default App;


