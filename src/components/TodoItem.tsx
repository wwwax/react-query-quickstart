import { ListItem, Stack, Checkbox } from '@chakra-ui/react';

const TodoItem = () => {
  const toggle = () => {
    console.log('toggle');
  };

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={toggle}>
        <Checkbox isChecked={true}>false</Checkbox>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
