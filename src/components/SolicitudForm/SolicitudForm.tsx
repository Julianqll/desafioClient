"use client";
import React, { useEffect, useState } from "react";
import { Button, Flex, Group, NativeSelect, Text } from "@mantine/core";
import { getAllProveedores } from "../../api/proveedores.api";
import { useNavigate } from "react-router-dom";
import ProductoForm from "../ProductoForm/ProductoForm";
import { createSolicitud } from "../../api/solicitudes.api";
import { createItems } from "../../api/itemscompra.api";
import { notifications } from '@mantine/notifications';
import { IconX } from "@tabler/icons-react";


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
       // Validar proveedor seleccionado
        if (proveedorSeleccionado == '') {
          notifications.show({
            color: 'red',
            title: 'Error de registro',
            message: 'Proveedor no seleccionado',
            icon: <IconX size="1rem" />,
            autoClose: 3000
        });          
        return;
      }

      // Validar que al menos un producto haya sido agregado
      if (productos.length === 0) {
        notifications.show({
          color: 'red',
          title: 'Error de registro',
          message: 'Debe al menos registrar un producto',
          icon: <IconX size="1rem" />,
          autoClose: 3000
      });           
      return;
      }

      // Validar productos
      const productosValidos = productos.filter(producto => (
        producto.valueNombre.trim() !== '' && // Nombre no vacío
        producto.valueEnlace.trim() !== '' && // Enlace no vacío
        producto.valueCantidad !== '' && // Cantidad no vacía
        producto.valuePrecio !== '' && // Precio no vacío
        validateURL(producto.valueEnlace.trim()) // Enlace válido
    ));

      if (productosValidos.length !== productos.length) {
        notifications.show({
          color: 'red',
          title: 'Error de registro',
          message: 'Todos los campos de los productos deben estar completos y tener enlaces correctos',
          icon: <IconX size="1rem" />,
          autoClose: 3000
      });     
        return;
      }
      let solicitud = {
          proveedor_id :proveedorSeleccionado,
          precio_total : 0
      }
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
      try
      {
        await createItems(itemsObject);
        navigate("/solicitudes");
      }
      catch(error:any){
        notifications.show({
          color: 'red',
          title: 'Error de registro',
          message: 'Ocurrio un error al registrar la solicitud',
          icon: <IconX size="1rem" />,
          autoClose: 3000
      });
      }


    };
  
    const addProductoForm = () => {
      setProductos([...productos, {
        valueNombre: '',
        valueEnlace: '',
        valueCantidad: '',
        valuePrecio: ''
      }]);
    };

    const removeProductoForm = (index: number) => {
        const newProductos = [...productos];
        newProductos.splice(index, 1);
        setProductos(newProductos);
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
                <>
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
                <Button variant="link" onClick={() => removeProductoForm(index)}>Eliminar</Button>

                </>
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

const validateURL = (url: string) => {
  const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return pattern.test(url);
};