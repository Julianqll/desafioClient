"use client";
import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title
  } from '@mantine/core';
  import classes from './AuthenticationImage.module.css';
import { useEffect, useState } from 'react';
import { login } from '../../api/user.api';
import { useNavigate } from 'react-router-dom';
import authInstance from '../../auth';

export function AuthenticationImage() {
    const [valueUsername, setValueUsername] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          navigate("/portal");
        }
    }, []);

    const handleLogin =async() => {
       let userData = {
        username: valueUsername,
        password: valuePassword
       }
       const resLogin = await login(userData);
       authInstance.setTokenAndUser(resLogin.data.token,resLogin.data.user)
       navigate("/portal");

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
            label="Usuario" 
            placeholder="Nombre de usuario" 
            size="md" 
            value={valueUsername}
            onChange={(event) => setValueUsername(event.currentTarget.value)}
          />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Tu contraseña" 
            mt="md" 
            size="md" 
            value={valuePassword}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
          />
          <Button fullWidth mt="xl" size="md" onClick={handleLogin}>
            Ingresar
          </Button>
  
        </Paper>
      </div>
    );
  }