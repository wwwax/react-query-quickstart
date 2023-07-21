import { ListItem, Stack, Checkbox } from '@chakra-ui/react';
import { Todo } from '../types/todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';

const TodoItem: React.FC<Todo> = ({ id, title, completed }) => {
  const client = useQueryClient();

  const { mutate: toggle } = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries(['todos']), // completed status won't update without it
  });

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={() => toggle()}>
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
