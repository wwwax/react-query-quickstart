export type TodoState = 'all' | 'open' | 'completed';

export type Todo = {
  id: number;
  compoleted: boolean;
  title: string;
};
