import { useState } from 'react';
import { List, Spinner } from '@chakra-ui/react';

import { TodoItem } from './TodoItem';

const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <List>
      <TodoItem />
      <TodoItem />
    </List>
  );
};

export { TodoList };
