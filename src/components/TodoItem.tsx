import { ListItem, Stack, Checkbox } from '@chakra-ui/react';
import { Todo } from '../types/todo';

const TodoItem: React.FC<Todo> = ({ id, title, completed }) => {
  return (
    <ListItem>
      <Stack spacing={4} direction="row">
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
