import React from "react";
import { TextInput, Flex } from "@mantine/core";

interface InputFieldsProveedorProps {
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

const InputFieldsProveedor: React.FC<InputFieldsProveedorProps> = ({ values, setters }) => {
  
  return (
    <Flex
        mt={20}
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
    >
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                label="Nombre del proveedor"
                placeholder="Proveedor ejemplo"
                value={values.valueNombre}
                onChange={(event) => setters.setValueNombre(event.currentTarget.value)}
            />
            <TextInput
                label="Direccion del proveedor"
                placeholder="Dirección de ejemplo"
                value={values.valueDireccion}
                onChange={(event) => setters.setValueDireccion(event.currentTarget.value)}
            />
            <TextInput
                label="Contacto del proveedor"
                placeholder="+51 999999999"
                value={values.valueContacto}
                onChange={(event) => setters.setValueContacto(event.currentTarget.value)}
            />
        </Flex>
    </Flex>
  );
}

export default InputFieldsProveedor;