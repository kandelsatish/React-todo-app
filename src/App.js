import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import About from './components/About';

function App() {
  let initTodo = null;
  if (window.localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(window.localStorage.getItem('todos'));
  }
  console.log(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter(e => {
      return e !== todo;
    }))
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  let [todos, setTodos] = React.useState(initTodo);

  const addTodo = (title, dec) => {
    const id = todos.length + 1;
    const todo = {
      id: id,
      title: title,
      description: dec
    }
    setTodos([...todos, todo]);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos" showSearchBar={true} />
        <Switch>
          <Route  exact path="/" >
            <AddTodo addTodo={(title, desc) => addTodo(title, desc)} />
            <Todos todos={todos} onDelete={(todo) => onDelete(todo)} />
          </Route>
          <Route  exact path="/about">
            <About/>
          </Route>
        </Switch>
        {/* <AddTodo addTodo={(title, desc) => addTodo(title, desc)} />
        <Todos todos={todos} onDelete={(todo) => onDelete(todo)} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
