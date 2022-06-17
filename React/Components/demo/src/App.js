import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      
      <header><h1>Todo List</h1></header>

      <main>      
        <TodoList />
      </main>

    </div>
  );
}

export default App;
