import Header from "./components/header/Header";
import Input from "./components/input/Input";
import TodoList from "./components/todoList/TodoList";
import Background from "./components/background/background";

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
