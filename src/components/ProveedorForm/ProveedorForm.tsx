"use client";
import React from "react";
import { Button, Flex, Group, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { createProveedor } from "../../api/proveedores.api";
import { useNavigate } from "react-router-dom";
interface FormularioDirectivasProps {
  nombre: string;
}

const ProveedorForm: React.FC<FormularioDirectivasProps> = ({ nombre }) => {
  const navigate = useNavigate();

  const onSubmit = async (values:any) => {
    await createProveedor(values);
    navigate("/proveedores");
  }


  const form = useForm({
    initialValues: {
      nombre: '',
      direccion: '',
      contacto: '',
    },

    validate: {
      contacto: (value) => (/^\d{9}$/.test(value) ? null : 'Número de contacto inválido'),
    },
  });
  
  return (
    <div>
      <form onSubmit={form.onSubmit((values) =>onSubmit(values))}>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Text
            size="xl"
            fw={500}
        >
          {nombre}
        </Text>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
              withAsterisk
              label="Nombre del proveedor"
              placeholder="Proveedor ejemplo"
              {...form.getInputProps('nombre')}
            />
            <TextInput
              withAsterisk  
              label="Direccion del proveedor"
              placeholder="Dirección de ejemplo"
              {...form.getInputProps('direccion')}
            />
            <TextInput
              withAsterisk
              label="Contacto del proveedor"
              placeholder="999999999"
              {...form.getInputProps('contacto')}
            />
        </Flex>
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Flex>
      </form>
    </div>
  );
}

export default ProveedorForm;