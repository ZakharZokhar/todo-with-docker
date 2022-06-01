import { useMutation, useQueryClient } from 'react-query';
import { deleteTodoById } from '../api/user.service';

export const useDeleteTodo = () => {
  const client = useQueryClient();

  const mutation = useMutation(todoId => deleteTodoById(todoId), {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  })

  return mutation;
};