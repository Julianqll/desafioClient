"use client";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, ScrollArea, Title, Text } from '@mantine/core';
import {
    IconTable,
    IconFilePencil,
    IconShoppingCart,
    IconTruck
  } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './CollapseDesktop.module.css';
import { UserButton } from '../UserButton/UserButton';
import { ActionToggle } from '../ActionToggle/ActionToggle';
import authInstance from '../../auth';


  const options_colocador = [
    { label: 'Proveedores', icon: IconTruck, link: '/proveedores'},
    { label: 'Solicitudes de Compra', icon: IconShoppingCart , link: '/solicitudes'}
  ];

  const options_aprobador = [
    { label: 'Solicitudes de Compra', icon: IconShoppingCart , link: '/solicitudes'}
  ];

export function CollapseDesktop({
    children
  }: {
    children: React.ReactNode  
  }) {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  let mockdata = options_colocador;

  if (authInstance.getUser()?.groups.includes(3)){
    mockdata = options_aprobador;
  }
  else if (authInstance.getUser()?.groups.includes(2) || authInstance.getUser()?.groups.includes(1) ){
    mockdata = options_colocador;
  }


  const links = mockdata?.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 310,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify='space-between'>
          <Group>
            <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
            <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
            <Text<'a'>
                component="a"
                href="/dashboard"
            >
              <Title order={2} ta="center">
                Stracon Portal
              </Title>
            </Text>
          </Group>
          <ActionToggle/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
        <div className={classes.footer}>
          <UserButton />
        </div>
        </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}