import { Badge, Button, Group, Text } from "@mantine/core";
import { CollapseDesktop } from "../components/CollapseDesktop/CollapseDesktop";
import ResourcesTable  from "../components/ResourcesTable/ResourcesTable";
import { IconArrowBackUp, IconCheckbox } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSolicitud } from "../api/solicitudes.api";

export function SolicitudesPageOne() {
    const params = useParams();

    const [solicitud, setSolicitud] = useState<any>({});

    useEffect(() => {
        async function loadProveedores() {
            const resSolicitud = await getSolicitud(params.id);
            setSolicitud(resSolicitud.data);
        }
        loadProveedores();
    }, []);
    
    return <CollapseDesktop>
            <Group h="100%" px="md" justify='space-between'>
                <Group></Group>
                <Button component={Link} to="/solicitudes" rightSection={<IconArrowBackUp size={14} />}>Volver</Button>
            </Group>
            <Text
            size="lg"
            fw={500}
             >
                Proveedor : {solicitud.proveedor?.nombre}
            </Text>
            <Text
            size="lg"
            fw={500}
             >
                Estado : {solicitud.proveedor?.aprobada ? 
                <Badge color="green">Aprobado</Badge>
                :
                <Badge color="red">No aprobado</Badge>
                }
            </Text>
            <ResourcesTable type="items" data={solicitud}/>
            {solicitud.proveedor?.aprobada ? 
                null
                :
                <Button color="gray" component={Link} to="/solicitudes" rightSection={<IconCheckbox size={14} />}>Aprobar solicitud</Button>

            }
        </CollapseDesktop>
}