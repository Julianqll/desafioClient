import {Badge, Button, Table, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

interface ResourcesTableProps {  
  type: string;
  data: any;
}

const ResourcesTable: React.FC<ResourcesTableProps> = ({ type, data }) => {
  let rows;
  let head;
  if (type == "proveedores"){
    head =  
    <Table.Tr>
      <Table.Th>Nombre</Table.Th>
      <Table.Th>Direccion</Table.Th>
      <Table.Th>Contacto</Table.Th>
    </Table.Tr>;

    rows = data.map((item:any) => (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.nombre}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.direccion}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm">{item.contacto}</Text>
        </Table.Td>
      </Table.Tr>
    ));
  }
  else if (type == "items"){
    head =  
    <Table.Tr>
      <Table.Th>Producto</Table.Th>
      <Table.Th>Enlace</Table.Th>
      <Table.Th>Cantidad</Table.Th>
      <Table.Th>Precio</Table.Th>
    </Table.Tr>;
    if (Array.isArray(data.items)) {
    rows = data.items.map((item:any) => (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.producto.nombre}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.producto.enlace}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.cantidad}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.precio_unitario}
          </Text>
        </Table.Td>
      </Table.Tr>
    ));
    rows.push(
      <Table.Tr key="additionalRow">
        <Table.Td>
        </Table.Td>
        <Table.Td>
        </Table.Td>
        <Table.Td>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {data.precio_total}
          </Text>
        </Table.Td>
      </Table.Tr>
    );
    }
  }
  else{
    head =  
    <Table.Tr>
      <Table.Th>Id</Table.Th>
      <Table.Th>Proveedor</Table.Th>
      <Table.Th>Precio Total</Table.Th>
      <Table.Th>Estado</Table.Th>
      <Table.Th>Detalles</Table.Th>
    </Table.Tr>;
    rows = data.map((item:any) => (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.id}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.proveedor.nombre}
          </Text>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {item.precio_total}
          </Text>
        </Table.Td>
        <Table.Td>
          {item.aprobada ? 
          <Badge color="green">Aprobado</Badge>
          :
          <Badge color="red">No aprobado</Badge>
          }
        </Table.Td>
        <Table.Td>
          <Button component={Link} to={`/solicitudes/${item.id}`} variant="filled" color="gray">Ver más</Button>
        </Table.Td>
      </Table.Tr>
    ));
  }

  return (
    <Table.ScrollContainer minWidth={800} mt={20}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          {head}
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
export default ResourcesTable;