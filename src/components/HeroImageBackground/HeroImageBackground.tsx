import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { Link } from 'react-router-dom';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Stracon Desafio FullStack - Django + React
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Portal de proveedores donde se puedan generar solicitudes de compra y asociar facturas.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component={Link} to="/login" className={classes.control} variant="white" size="lg">
            Ingresar
          </Button>
        </div>
      </div>
    </div>
  );
}