import { useQuery } from 'react-query';
import { getTodos } from '../api/user.service';

export const useGetTodos = () => {
  return useQuery('todos', async () => await getTodos());
}