import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({palette, form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">오늘 할 일</div>
            <section className="form-wrapper">{palette}</section>
            <section className="form-wrapper">{form}</section>
            <section className="form-wrapper">{children}</section>
        </main>
    );
}

export default TodoListTemplate;

/* 

함수형 컴포넌트


*/