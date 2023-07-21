import { Todo, TodoState } from '../types/todo';

const BASE_URL = 'http://localhost:3004/todos';

export async function fetchTodos(state: TodoState = 'all'): Promise<Todo[]> {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;

  const res = await fetch(`${BASE_URL}/${queries}`);

  if (!res.ok) throw new Error('Failed to fetch todos');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
}

export async function toggleTodoStatus(id: number, completed: boolean) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}
