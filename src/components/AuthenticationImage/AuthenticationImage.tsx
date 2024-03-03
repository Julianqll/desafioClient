"use client";
import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title
  } from '@mantine/core';
  import classes from './AuthenticationImage.module.css';
import { useState } from 'react';

export function AuthenticationImage() {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    

    function handleLogin(): void {
        throw new Error('Function not implemented.');
    }

    return (
      <div className={classes.wrapper}>
        <Title order={2} className={classes.topLeftText} ta="center" mt="md" m={20}>
          Stracon Portal
        </Title>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Iniciar sesión
          </Title>
  
          <TextInput 
            label="Correo electrónico" 
            placeholder="hello@gmail.com" 
            size="md" 
            value={valueEmail}
            onChange={(event) => setValueEmail(event.currentTarget.value)}
          />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Tu contraseña" 
            mt="md" 
            size="md" 
            value={valuePassword}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
          />
          <Button fullWidth mt="xl" size="md" onClick={() => handleLogin()}>
            Ingresar
          </Button>
  
        </Paper>
      </div>
    );
  }