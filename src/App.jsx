import Background from "./components/background/background";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="app">
      <Background />
      <main>
        <Header />
        <Input />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
