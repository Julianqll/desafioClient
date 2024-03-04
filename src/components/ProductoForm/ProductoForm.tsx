"use client";
import React, { useState } from "react";
import { Button, Flex, Group, NumberInput, Text, TextInput } from "@mantine/core";
interface ProductoFormProps {
    values: {
        valueNombre: string;
        valueEnlace: string;
        valueCantidad: string| number;
        valuePrecio: string|number;
      };
      setters: {
        setValueNombre: (value: any) => void;
        setValueEnlace:  (value: any) => void;
        setValueCantidad:  (value: any) => void;
        setValuePrecio:  (value: any) => void;
      };
}

const ProductoForm: React.FC<ProductoFormProps> = ({ values, setters }) => {
  return (
    <div>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
              withAsterisk
              label="Nombre del producto"
              placeholder="Producto"
              value={values.valueNombre}
              onChange={(event) => setters.setValueNombre(event.currentTarget.value)}
            />
            <TextInput
              withAsterisk  
              label="Enlace del producto"
              placeholder="https://www.google.com"
              value={values.valueEnlace}
              onChange={(event) => setters.setValueEnlace(event.currentTarget.value)}
            />
            <NumberInput 
                label="Cantidad"
                withAsterisk
                placeholder="Cantidad de productos"
                value={values.valueCantidad}
                onChange={(event) => setters.setValueCantidad(event)}
            />
                <NumberInput
                withAsterisk
                label="Precio"
                placeholder="Precio del producto"
                decimalScale={2}
                value={values.valuePrecio}
                onChange={(event) => setters.setValuePrecio(event)}
                />
        </Flex>
      </Flex>
    </div>
  );
}

export default ProductoForm;