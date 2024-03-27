import { Stack, Button } from '@mantine/core';

export function NavBar() {
  return (
    <Stack h={300}>
      <Button variant="filled">Home</Button>
      <Button variant="filled">Profile</Button>
      <Button variant="filled">Settings</Button>
      <Button variant="filled">Logout</Button>
    </Stack>
  );
}
