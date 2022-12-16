import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Search from './components/Search';

function App() {
  return (
  <div className='app'>
    <h2>Pomodoro Notes</h2>
      <Search />
    <div className="app-container">
      <div className="left">
          <Todo />
      </div>
      <div className="right">
        <TodoList />
      </div>
    </div>

  </div>
  );
}

export default App;
