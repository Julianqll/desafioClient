"use client";
import React, { useEffect, useState } from "react";
import { Button, Flex, Group, NativeSelect, Text } from "@mantine/core";
import { getAllProveedores } from "../../api/proveedores.api";
import { useNavigate } from "react-router-dom";
import ProductoForm from "../ProductoForm/ProductoForm";
import { createSolicitud } from "../../api/solicitudes.api";
import { createItems } from "../../api/itemscompra.api";
interface FormularioDirectivasProps {
  nombre: string;
}

const SolicitudForm: React.FC<FormularioDirectivasProps> = ({ nombre }) => {
    const [proveedores, setProveedores] = useState<any>([]);

    useEffect(() => {
        async function loadProveedores() {
            const resProveedores = await getAllProveedores();
            setProveedores(resProveedores.data);
        }
        loadProveedores();
    }, []);

    const navigate = useNavigate();
    const [productos, setProductos] = useState<any[]>([]); // Estado para almacenar los productos agregados
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState('');

    const onSubmit = async() => {
      let solicitud = {
          proveedor_id :proveedorSeleccionado,
          precio_total : 0
      }
      console.log(solicitud)
      const resSolicitud = await createSolicitud(solicitud);
      const solicitudId = resSolicitud.data.id;
      let itemsObject = productos.map((item: any) => ({
        solicitud : solicitudId,
        cantidad: item.valueCantidad,
        precio_unitario: item.valuePrecio,
        producto : {
          nombre: item.valueNombre,
          enlace: item.valueEnlace
        }
      }));
      let res = await createItems(itemsObject);
      navigate("/solicitudes");

    };
  
    const addProductoForm = () => {
      setProductos([...productos, {
        valueNombre: '',
        valueEnlace: '',
        valueCantidad: '',
        valuePrecio: ''
      }]);
    };
    let proveedores_values = proveedores.map((item: any) => ({
        label: item.nombre,
        value: item.id
      }));      
      proveedores_values.unshift({ label: 'Seleccionar Proveedor', value: '' });

    return (
      <div>
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
              direction="column"
              wrap="wrap"
            >
              <NativeSelect 
                value={proveedorSeleccionado}
                onChange={(event) => setProveedorSeleccionado(event.currentTarget.value)}
                label="Seleccionar Proveedor" 
                data={proveedores_values} />
              {productos.map((producto, index) => (
                <ProductoForm
                  key={index}
                  values={producto}
                  setters={{
                    setValueNombre: (value: string) => {
                      setProductos(prevProductos => {
                        const newProductos = [...prevProductos];
                        newProductos[index].valueNombre = value;
                        return newProductos;
                      });
                    },
                    setValueEnlace: (value: string) => {
                      setProductos(prevProductos => {
                        const newProductos = [...prevProductos];
                        newProductos[index].valueEnlace = value;
                        return newProductos;
                      });
                    },
                    setValueCantidad: (value: string | number) => {
                      setProductos(prevProductos => {
                        const newProductos = [...prevProductos];
                        newProductos[index].valueCantidad = value;
                        return newProductos;
                      });
                    },
                    setValuePrecio: (value: string | number) => {
                      setProductos(prevProductos => {
                        const newProductos = [...prevProductos];
                        newProductos[index].valuePrecio = value;
                        return newProductos;
                      });
                    },
                  }}
                />
              ))}
            </Flex>
            <Button variant="cta" onClick={addProductoForm}>Agregar Producto</Button> {/* Agregar botón para agregar más productos */}
            <Group justify="flex-end" mt="md">
              <Button  onClick={onSubmit}>Submit</Button>
            </Group>
          </Flex>
      </div>
    );
  };
export default SolicitudForm;