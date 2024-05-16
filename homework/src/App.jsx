import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([{ id: 0, title: '', body: '', isDone: false }]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'body') {
      setBody(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle('');
    setBody('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <form className="input-todo" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="무엇을 해볼까"
          value={title}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="body"
          placeholder="어떻게 해볼까"
          value={body}
          onChange={onChangeHandler}
        />
        <button type="submit">추가</button>
      </form>
      <div className="todo-list">
        <div className="working">
          <h2>하는중...🔥</h2>
          {todos.filter(todo => !todo.isDone).map(todo => (
            todo.id !== 0 && (
              <div key={todo.id} className="todo-item">
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.isDone ? '취소' : '완료'}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </div>
            )
          ))}
        </div>
        <div className="complete">
          <h2>끝났당😁</h2>
          {todos.filter(todo => todo.isDone).map(todo => (
            todo.id !== 0 && (
              <div key={todo.id} className="todo-item">
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <button onClick={() => toggleTodo(todo.id)}>
                  {todo.isDone ? '취소' : '완료'}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
