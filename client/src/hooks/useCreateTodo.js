import { useMutation, useQueryClient } from 'react-query';
import { postTodo } from '../api/user.service';

export const useCreateTodo = () => {
  const client = useQueryClient();

  const mutation = useMutation(newTodo => postTodo(newTodo), {
    onSuccess: () => {
      client.invalidateQueries('todos');
    },
  })

  return mutation;
};