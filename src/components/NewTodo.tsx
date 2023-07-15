import { useState } from 'react';
import { Stack, Input, Button } from '@chakra-ui/react';

const NewTodo = () => {
  const [title, setTitle] = useState('');

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('submit');
    return null;
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
