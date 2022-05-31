import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import { getTodos, deleteTodoById, postTodo } from "../api/user.service";


function ToDo() {
    const client = useQueryClient();
    const { isLoading, isError, isSuccess, data, error } = useQuery('todos', getTodos);

    const mutationAdd = useMutation(newTodo => postTodo(newTodo), {
      onSuccess: () => {
        client.invalidateQueries('todos');
      },
    })

    const mutationDelete = useMutation(todoId => deleteTodoById(todoId), {
      onSuccess: () => {
        client.invalidateQueries('todos');
      },
    })

    function addTodo(inputText) {
      mutationAdd.mutate(inputText);
    }

    
    function deleteTodo(id) {
      mutationDelete.mutate(id);
    }

  return (
    <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <InputArea onAdd={addTodo} />
        <div>
          {isLoading ? 'Loading...' : null}
          {isError ? error : null}
          {isSuccess ? 
          <ul>
            {data.data.map((todoItem) => (
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