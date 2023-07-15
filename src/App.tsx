import { Container, Divider, Stack } from '@chakra-ui/react';

import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <Container mt="5" mx="auto">
      <Stack spacing={4}>
        <NewTodo />
        <TodoList />
        <Divider />
      </Stack>
    </Container>
  );
}

export default App;
