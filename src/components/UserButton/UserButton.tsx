"use client";
import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconArrowBarRight, IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { logout } from '../../api/user.api';
import { useNavigate } from 'react-router-dom';
import authInstance from '../../auth';

export function UserButton() {
  const navigate = useNavigate();

  const signOut = async () => {
    try {
        await logout();
        authInstance.removeTokenAndUser();
        navigate("/login");
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};


  return (
    <>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar radius="xl"/>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {authInstance.getUser()?.username}
          </Text>
          <Text c="dimmed" size="xs">
          {authInstance.getUser()?.email}
          </Text>
        </div>
        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
      <Button ml={15} rightSection={<IconArrowBarRight size={14} />} onClick={() => signOut()}>Salir</Button>
      </>
  );
}