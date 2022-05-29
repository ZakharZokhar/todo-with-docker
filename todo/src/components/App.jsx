import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { getTodos, deleteTodoById, getTodo, postTodo } from "../api/user.service";

function App() {
  const [items, setItems] = useState([]);

  async function addItem(inputText) {
    const { data } = await postTodo(inputText);

    const newTodo = await getTodo(data)

    setItems(prevItems => {
      return [...prevItems, newTodo.data];
    });
  }

  async function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item) => {
        return item._id !== id;
      });
    });
    await deleteTodoById(id);
  }

  useEffect(() => {
    async function fetchTodos() {
      const {data} = await getTodos();
      setItems(data);
    }

    fetchTodos();
  },[])

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem
              key={todoItem._id}
              id={todoItem._id}
              text={todoItem.todo}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;