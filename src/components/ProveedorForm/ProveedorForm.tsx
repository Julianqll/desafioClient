"use client";
import React from "react";
import { Flex, Text } from "@mantine/core";
import InputFieldsProveedor from "../InputFieldsProveedor/InputFieldsProveedor";

interface FormularioDirectivasProps {
  nombre: string;
  values: {
    valueNombre: string;
    valueDireccion: string;
    valueContacto: string;
  };
  setters: {
    setValueNombre: React.Dispatch<React.SetStateAction<string>>;
    setValueDireccion: React.Dispatch<React.SetStateAction<string>>;
    setValueContacto: React.Dispatch<React.SetStateAction<string>>;
  };
}

const ProveedorForm: React.FC<FormularioDirectivasProps> = ({ nombre, values, setters }) => {
  return (
    <div>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Text
            size="xl"
            fw={500}
        >
          {nombre}
        </Text>
        <InputFieldsProveedor
            values={values}
            setters={setters}
        />
      </Flex>
    </div>
  );
}

export default ProveedorForm;