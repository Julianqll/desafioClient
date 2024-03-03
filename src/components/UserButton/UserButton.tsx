"use client";
import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconArrowBarRight, IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';


export function UserButton() {

    function signOut(): void {
        throw new Error('Function not implemented.');
    }

  return (
    <>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar radius="xl"/>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Julian
          </Text>
          <Text c="dimmed" size="xs">
          Julian
          </Text>
        </div>
        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
      <Button ml={15} rightSection={<IconArrowBarRight size={14} />} onClick={() => signOut()}>Salir</Button>
      </>
  );
}