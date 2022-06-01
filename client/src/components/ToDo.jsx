import React from "react";

import { useGetTodos } from "../hooks/useGetTodos";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useCreateTodo } from "../hooks/useCreateTodo";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";


function ToDo() {
    const getTodosQuery = useGetTodos();
    const createTodoMutation = useCreateTodo();
    const deleteTodoMutation = useDeleteTodo();

    function addTodo(inputText) {
      createTodoMutation.mutate(inputText);
    }

    
    function deleteTodo(id) {
      deleteTodoMutation.mutate(id);
    }

  return (
    <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addTodo} />
        <div>
          {getTodosQuery.isLoading ? 'Loading...' : null}
          {getTodosQuery.isError ? getTodosQuery.error : null}
          {getTodosQuery.isSuccess ? 
          <ul>
            {getTodosQuery.data.data.map((todoItem) => (
              <ToDoItem
                key={todoItem._id}
                id={todoItem._id}
                text={todoItem.todo}
                onChecked={deleteTodo}
              />
            ))}
          </ul>
          : null}
        </div>
      </div>
  );
}

export default ToDo;