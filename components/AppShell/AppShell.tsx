import { AppShell, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavBar } from '../NavBar/NavBar';
import { CardPaper } from '../Card/CardPaper';
import { CardPoly } from '../Card/CardPoly';
import { Tables } from '../Table/Table';

export default function BlackBoxShell() {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <div>BlackBox (Logo Here)</div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        Main
        <Container mt="sm">
          <CardPaper />
          <CardPoly />
          <Tables />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
