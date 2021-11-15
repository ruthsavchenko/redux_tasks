import React from 'react'
import './App.css';
import Done from './components/Done';
import InProgress from './components/InProgress';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo />
      <InProgress />
      <Done />
    </div>
  );
}

export default App;
